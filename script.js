// ===== MOBILE NAV =====
const mobileToggle = document.getElementById('mobileToggle');
const mobileNav    = document.getElementById('mobileNav');

mobileToggle?.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    mobileNav.classList.toggle('open');
});

document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        mobileNav.classList.remove('open');
    });
});

document.addEventListener('click', (e) => {
    if (!mobileToggle?.contains(e.target) && !mobileNav?.contains(e.target)) {
        mobileToggle?.classList.remove('active');
        mobileNav?.classList.remove('open');
    }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
        const target = document.querySelector(a.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// ===== ACTIVE NAV HIGHLIGHT (left panel) =====
const sections  = document.querySelectorAll('.rp-section');
const navLinks  = document.querySelectorAll('.lp-nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
    });
}, { threshold: 0.35, rootMargin: '-80px 0px -80px 0px' });

sections.forEach(s => sectionObserver.observe(s));

// ===== SCROLL REVEAL =====
const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (!entry.isIntersecting) return;
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
        revealObs.unobserve(entry.target);
    });
}, { threshold: 0.06, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.exp-item, .proj-card').forEach(el => {
    el.classList.add('reveal');
    revealObs.observe(el);
});

// ===== TERMINAL BOOT SEQUENCE =====
const bootLines = document.querySelectorAll('.boot-line');
const uiElements = document.querySelectorAll('.left-panel, .rp-section, .mobile-header, .rp-footer');

uiElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.8s ease';
});

window.addEventListener('load', () => {
    let delay = 0;
    
    bootLines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = '1';
        }, delay);
        
        if (index === 0) delay += 300;
        else if (index === 1) delay += 500;
        else if (index === 2) delay += 700;
        else delay += 400;
    });

    setTimeout(() => {
        uiElements.forEach(el => {
            el.style.opacity = '1';
        });
    }, delay + 200);
});

// ===== TYPEWRITER EFFECT =====
const words = ["a System Architect", "an Engineering Leader", "a Problem Solver"];
let wordIdx = 0;
let charIdx = 0;
let isDeleting = false;
const typewriterEl = document.getElementById('typewriter');

function typeEffect() {
    if (!typewriterEl) return;
    
    const currentWord = words[wordIdx];
    
    if (isDeleting) {
        typewriterEl.textContent = currentWord.substring(0, charIdx - 1);
        charIdx--;
    } else {
        typewriterEl.textContent = currentWord.substring(0, charIdx + 1);
        charIdx++;
    }
    
    let speed = isDeleting ? 40 : 100;
    
    if (!isDeleting && charIdx === currentWord.length) {
        speed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        speed = 500;
    }
    
    setTimeout(typeEffect, speed);
}

if (typewriterEl) {
    setTimeout(typeEffect, 1000);
}

console.log('%c$ whoami', 'color:#3fb950;font-family:monospace;font-size:16px;font-weight:bold');
console.log('%c  Jeevan Jyoti Srivastava — Engineering Leader & Architect', 'color:#58a6ff;font-family:monospace;font-size:12px');

// ===== FETCH MEDIUM ARTICLES =====
async function loadMediumArticles() {
    const writingGrid = document.getElementById('writingGrid');
    if (!writingGrid) return;

    // Save static content as fallback
    const originalContent = writingGrid.innerHTML;
    
    // Display animated skeletons matching terminal card style
    writingGrid.innerHTML = `
        <div class="proj-card skeleton-card">
            <div class="skeleton-header"></div>
            <div class="skeleton-text"></div>
            <div class="skeleton-text short"></div>
            <div class="skeleton-tags"></div>
        </div>
        <div class="proj-card skeleton-card">
            <div class="skeleton-header"></div>
            <div class="skeleton-text"></div>
            <div class="skeleton-text short"></div>
            <div class="skeleton-tags"></div>
        </div>
    `;

    const feedUrl = 'https://medium.com/feed/@thejeevan';
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${feedUrl}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('rss2json API returned error');
        const data = await response.json();
        
        if (data.status !== 'ok') throw new Error('API returned non-ok status');
        
        const items = data.items;
        if (!items || items.length === 0) throw new Error('Empty RSS items');

        writingGrid.innerHTML = ''; // Clear skeletons

        const maxArticles = Math.min(items.length, 4);
        for (let i = 0; i < maxArticles; i++) {
            const item = items[i];
            
            const title = item.title || 'Untitled Article';
            const link = item.link || 'https://medium.com/@thejeevan';
            
            // Handle content extracting
            let contentEncoded = item.content || item.description || '';

            // Extract plain text snippet
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = contentEncoded;
            tempDiv.querySelectorAll('figure, figcaption, img, pre, code').forEach(el => el.remove());
            
            let description = tempDiv.textContent || tempDiv.innerText || '';
            description = description.replace(/\s+/g, ' ').trim();
            if (description.length > 150) {
                description = description.substring(0, 150) + '...';
            } else if (!description) {
                description = 'Read the full article on Medium.';
            }

            // Parse tags
            const categoriesElements = item.categories || [];
            const tags = [];
            for (let j = 0; j < Math.min(categoriesElements.length, 3); j++) {
                tags.push(categoriesElements[j]);
            }
            if (tags.length === 0) tags.push('Medium', 'Writing');

            const numStr = String(i + 1).padStart(2, '0');
            const card = document.createElement('div');
            card.className = 'proj-card reveal';
            
            const tagsHTML = tags.map(tag => `<span>${tag}</span>`).join('');

            card.innerHTML = `
                <div class="proj-header">
                    <span class="proj-num">${numStr}</span>
                    <h3><a href="${link}" target="_blank" style="color: var(--text); text-decoration: none;">${title}</a></h3>
                </div>
                <p>${description}</p>
                <div class="proj-tags">${tagsHTML}</div>
            `;

            writingGrid.appendChild(card);
            
            // Add scroll animation observer
            if (typeof revealObs !== 'undefined') {
                revealObs.observe(card);
            } else {
                card.classList.add('visible');
            }
        }
    } catch (parseErr) {
        console.error('Failed to parse Medium RSS feed. Using static fallback.', parseErr);
        writingGrid.innerHTML = originalContent;
    }
}

// Initialize fetch
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadMediumArticles);
} else {
    loadMediumArticles();
}
