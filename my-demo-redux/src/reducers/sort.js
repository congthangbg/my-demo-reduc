
var initialState ={
      by:"status",
      value:1 //1 là tăng , -1 giảm
}

var myReducer=(state = initialState, action)=>{

   if(action.type==="SORT"){
      var {by,value}=action.sort;
      return {
         by,
         value
      }
   }
   return state;
}

export default myReducer;