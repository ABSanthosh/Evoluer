import { getTitleList } from "../util/mdReader";

export default async function CardsEnum() {
  const cardTitles = [];
  const files = await getTitleList(window.location.pathname.split("/")[1]);

  files.forEach((file) => {
    cardTitles.push(
      this
        .html`<title-card title="${file.title}" href="${file.path}"></title-card>`
    );
  });

  return this.html`${cardTitles}`;
}
