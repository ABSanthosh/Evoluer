import mdReader from "../util/mdReader";

export default async function PageContent() {
  const files = await mdReader(
    window.location.pathname.split("/")[1],
    window.location.pathname.split("/")[2]
  );

  if (!files) return this.html``;

  return this.html`
    <div class="markdown-body">${this.html(files.html)}</div>
  `;
}
