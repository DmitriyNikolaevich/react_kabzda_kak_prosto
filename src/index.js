import state, { addMessage, addPost, writeMessage, writeWords } from './redux/state';
import rerender from './render';
import * as serviceWorker from './serviceWorker';



rerender(state, addMessage, addPost, writeWords, writeMessage);


serviceWorker.unregister();
