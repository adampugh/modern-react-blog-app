import _ from "lodash";
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from "../actions";

export default function(state = {}, action) {
    switch (action.type) {
        case DELETE_POST:
            // lodash method that says if there is an object with
            // the specified key id, then omit it
            return _.omit(state, action.payload);
            
        case FETCH_POST:
            // ES5 VERSION
            // const post = action.payload.data;
            // const newState = { ...state }
            // newState[post.id] = post;
            // return newState;

            // ES6 VERSION
            return { ...state, [action.payload.data.id]: action.payload.data };

        case FETCH_POSTS:
            // creates objects with a key of the object's current id
            return _.mapKeys(action.payload.data, "id");
        default:
            return state;
    }
}