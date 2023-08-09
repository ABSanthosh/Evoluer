export default async function Header() {
  const lang = window.location.pathname.split("/")[1];
  const restPath = `/${window.location.pathname.split("/").slice(2).join("/")}`;

  return this.html`
    <header class="HeaderWrapper make-flex">
    <div class="Header">
      <h1>
        <a href="/${window.location.pathname.split("/")[1]}">Évoluer</a>
      </h1>
      <div>
        <select onchange="window.history.pushState({}, '', this.value)">
          <option
            value="/en${restPath}"
            ${lang === "en" ? "selected" : ""}
          >
            English
          </option>
          <option 
            value="/fa${restPath}"
            ${lang === "fa" ? "selected" : ""}
          >فارسی</option>
          <option 
            value="/ru${restPath}"
            ${lang === "ru" ? "selected" : ""}
          >Русский</option>
          <option 
            value="/tr${restPath}"
            ${lang === "tr" ? "selected" : ""}
          >Türkçe</option>
        </select>
      </div>
    </div>
  </header>
    `;
}
