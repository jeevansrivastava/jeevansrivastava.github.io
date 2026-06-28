"use client";

import { useEffect, useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";

interface Article {
  title: string;
  link: string;
  description: string;
  categories: string[];
}

export function ArticlesSection() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticles() {
      try {
        const feedUrl = "https://medium.com/feed/@thejeevan";
        const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${feedUrl}`;
        const res = await fetch(apiUrl);
        const data = await res.json();

        if (data.status === "ok" && data.items) {
          const parsedArticles = data.items.slice(0, 4).map((item: any) => {
            // Extract plain text
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = item.content || item.description || "";
            tempDiv.querySelectorAll("figure, figcaption, img, pre, code").forEach(el => el.remove());
            
            let desc = tempDiv.textContent || tempDiv.innerText || "";
            desc = desc.replace(/\s+/g, " ").trim();
            if (desc.length > 150) desc = desc.substring(0, 150) + "...";

            return {
              title: item.title,
              link: item.link,
              description: desc || "Read the full article on Medium.",
              categories: item.categories?.slice(0, 3) || ["Medium", "Writing"],
            };
          });
          setArticles(parsedArticles);
        }
      } catch (err) {
        console.error("Failed to load articles", err);
      } finally {
        setLoading(false);
      }
    }

    loadArticles();
  }, []);

  return (
    <section id="writing" className="mb-24">
      <SectionLabel command="ls ./writing/" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {loading ? (
          <>
            <div className="skeleton-card p-7 flex flex-col rounded-[6px]">
              <div className="skeleton-header"></div>
              <div className="skeleton-text"></div>
              <div className="skeleton-text short"></div>
              <div className="skeleton-tags mt-auto"></div>
            </div>
            <div className="skeleton-card p-7 flex flex-col rounded-[6px]">
              <div className="skeleton-header"></div>
              <div className="skeleton-text"></div>
              <div className="skeleton-text short"></div>
              <div className="skeleton-tags mt-auto"></div>
            </div>
          </>
        ) : (
          articles.map((article, index) => (
            <a 
              key={article.link} 
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline block"
            >
              <ProjectCard
                number={String(index + 1).padStart(2, "0")}
                title={article.title}
                description={article.description}
                tags={article.categories}
              />
            </a>
          ))
        )}
      </div>
      
      {!loading && articles.length > 0 && (
        <div className="mt-8 text-right">
          <a
            href="https://medium.com/@thejeevan"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.8rem] text-accent hover:text-text transition-colors no-underline"
          >
            Read more on Medium →
          </a>
        </div>
      )}
    </section>
  );
}
