import * as types from './../contants/actionType'

export const sort=(sort)=>{
   return {
      type: types.SORT,
      sort: sort
   }
}
export const status=()=>{
   return {
      type:types.TOGGLE_STATUS,
   }
}