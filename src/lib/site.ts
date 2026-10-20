export const siteUrl = "https://jeevansrivastava.com";
export const personId = `${siteUrl}/#person`;

export function absoluteUrl(path: string): string {
  return new URL(path, siteUrl).href;
}
