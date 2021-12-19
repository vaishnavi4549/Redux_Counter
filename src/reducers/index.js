import { changeNumber } from "./upDown";

//here we are combining all the reducer in this folder

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    changeNumber,
})

export default rootReducer;