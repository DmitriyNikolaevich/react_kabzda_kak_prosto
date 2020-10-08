import state, { addMessage, addPost } from './redux/state';
import rerender from './render';
import * as serviceWorker from './serviceWorker';



rerender(state, addMessage, addPost);


serviceWorker.unregister();
