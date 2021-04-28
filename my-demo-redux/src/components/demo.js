import {createStore} from 'redux'
import {status,sort} from '../actions/index'
import myReducer from './../reducers/index'
const store = createStore(myReducer);
console.log("Default: ",store.getState());
//Thực hiện công vc thay đổi status


store.dispatch(status());
console.log("TOGGLE STATUS: ",store.getState());

//thực hiện sx tên từ Z-A

store.dispatch(sort({
   by:"name",
   value:-1
}))
console.log("Sort:",store.getState());