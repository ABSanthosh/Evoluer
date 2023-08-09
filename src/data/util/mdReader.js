function langSwitcher(lang) {
  switch (lang) {
    case "en":
      return import.meta.glob("../en/*.md");
    case "fa":
      return import.meta.glob("../fa/*.md");
    case "ru":
      return import.meta.glob("../ru/*.md");
    case "tr":
      return import.meta.glob("../tr/*.md");
    default:
      return import.meta.glob("../en/*.md");
  }
}

export default async function mdReader(lang) {
  let files = langSwitcher(lang);
  console.log(files);

  return Promise.all(
    Object.keys(files).map(async (key) => {
      const html = await import(key);

      return {
        path: key.replace("data/", "").replace(".md", ""),
        title: html.attributes.title,
        html: html.html,
      };
    })
  );
}
