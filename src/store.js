import createStore from "redux";
import rootReducer from "./reducers/reduceController";

const store = createStore(rootReducer);

export default store;
