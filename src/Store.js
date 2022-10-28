import { createStore } from "redux";
import rootReducer from "./Redux/Reducer/Main";

const store = createStore(
    rootReducer
);

export default store ;