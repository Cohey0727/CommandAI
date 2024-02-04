import { Route } from "src/utils/router";
import * as pages from "src/pages";

const routes: Route[] = [
  {
    path: "/",
    component: pages.Root,
    children: [
      {
        path: "/chats",
        component: pages.Chats,
      },
      {
        path: "/chats/:chatId",
        component: pages.ChatsChatId,
      },
    ],
  },
];

export default routes;
