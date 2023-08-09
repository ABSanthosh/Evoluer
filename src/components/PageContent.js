import mdReader from "../data/util/mdReader";

export default async function PageContent() {
  const files = await mdReader(window.location.pathname.split("/")[1]);
  const neededFile = files.find((file) => {
    return file.path === `..${window.location.pathname}`;
  });

  if (!neededFile) return this.html``;

  return this.html`
    <div class="markdown-body">${this.html(neededFile.html)}</div>
  `;
}
