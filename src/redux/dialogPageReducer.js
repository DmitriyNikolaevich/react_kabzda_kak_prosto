const ADD_MESSAGE = 'ADD-MESSAGE';
const WRITE_MESSAGE = 'WRITE-MESSAGE';

const dialogPageReducer = (state, action) => {
    switch (action.type) {
        case WRITE_MESSAGE:
            state.newMessageText = action.newLetter;
            return state;
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = "";
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const writeMessageActionCreator = (text) =>
  ({ type: WRITE_MESSAGE, newLetter: text });

export default dialogPageReducer;