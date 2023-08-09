import "./src/styles/root/global.css";
import "./src/styles/routes/home.css";

import Tonic from "@socketsupply/tonic";
import { MyGreeting } from "./src/components/Hello";
import TitleCard from "./src/components/Card";
import CardsEnum from "./src/components/CardEnum";
import { TonicRouter } from "@socketsupply/components/router";
import PageContent from "./src/components/PageContent";
import Header from "./src/components/header";

const regexPattern = new RegExp(/^\/(en|ru|fa|tr)(?:\/\d{3})?$/gm);

window.onload = () => {
  if (window.location.pathname === "/") {
    window.location.pathname = "/en";
  } else if (window.location.pathname.match(regexPattern) === null) {
    window.location.pathname = `/${window.location.pathname.split("/")[1]}`;
  }
};

const routerHtml = await import("./router.html?raw");
function Router() {
  return this.html(routerHtml.default);
}
Tonic.add(Router, "app-router");
Tonic.add(Header, "app-header");

Tonic.add(PageContent, "page-content");
Tonic.add(TonicRouter, "tonic-router");
Tonic.add(CardsEnum, "cards-enum");
Tonic.add(TitleCard, "title-card");
Tonic.add(MyGreeting, "my-greeting");
