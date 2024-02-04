import { Route } from "src/utils/router";
import index from 'src/pages';
import about from 'src/pages/about';
import chats from 'src/pages/chats';
import chatsChatId from 'src/pages/chats/:chatId';
import chatsNew from 'src/pages/chats/new';

const routes: Route[] = [
  { path: '/', component: index },
  { path: '/about', component: about },
  { path: '/chats', component: chats },
  { path: '/chats/:chatId', component: chatsChatId },
  { path: '/chats/new', component: chatsNew },
];
 

export default routes;