import { PagesRoute } from "./types";
import { lazyLoad } from "../utils";
export * from "./types";

const Home = lazyLoad(() => import("pages/Home"));
const _404 = lazyLoad(() => import("pages/_404"));

const PlayableAdsDog = lazyLoad(() => import("pages/PlayableDog"));
const Scratcher = lazyLoad(() => import("pages/Scratcher"));

/**The key "data" means that the page configuration is located here. The rest of the keys are the path given the breadCrumbs */

export const routes: PagesRoute = {
  "/": {
    data: {
      component: Home,
    },
  },

  "/dogAds": {
    data: {
      component: PlayableAdsDog,
    },
  },
  "/scratcher": {
    data: {
      component: Scratcher,
    },
  },

  "*": {
    data: {
      component: _404,
    },
  },
};
