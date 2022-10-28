export const ADD = (item) => {
     return {
        type: 'ADD_CART',
        payload: item
     }
}


export const Delete = (id) => {
   return {
      type: 'DELETE_CART',
      payload: id
   }
}

export const removeQnty = (item) => {
   return {
      type: 'Remove_Qnty',
      payload: item
   }
}