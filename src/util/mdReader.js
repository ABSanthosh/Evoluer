import * as matter from "gray-matter";
import { parse } from "marked";

export async function getTitleList(lang) {
  const files = Array.from({ length: 97 }, (_, i) => {
    return `/data/${lang}/${String(i + 1).padStart(3, "0")}.md?raw`;
  });

  return await Promise.all(
    files.map(async (file) => {
      const html = matter((await import(/* @vite-ignore */ file)).default);
      return {
        path: file.replace("data/", "").replace(".md", "").replace("?raw", ""),
        title: html.data.title,
      };
    })
  );
}

export default async function mdReader(lang, id) {
  const file = `/data/${lang}/${id}.md?raw`;
  const html = matter((await import(/* @vite-ignore */ file)).default);

  return {
    path: file.replace("data/", "").replace(".md", "").replace("?raw", ""),
    title: html.data.title,
    html: parse(html.content),
  };
}
