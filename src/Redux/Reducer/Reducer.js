const initialState = {
    carts: []
};

export const cartReducer = 
(state= initialState , action ) => {
   switch (action.type) {
    case "ADD_CART":
       
            const itemIndex = state.carts.findIndex((item)=> item.id === action.payload.id);
           
            if(itemIndex >= 0) {
                state.carts[itemIndex].qnty +=1
            }else{
                const temp = {...action.payload, qnty:1}

                return {

                    ...state, 
                    carts: [...state.carts, temp]
                }
            }
          

        case "DELETE_CART":
            const data = state.carts.filter((element) => element.id !== action.payload)
            return{
                ...state, 
                carts: data
            }
           

            case "Remove_Qnty":
       
                const itemIndexQunty = state.carts.findIndex((item)=> item.id === action.payload.id);
               
                if(state.carts[itemIndexQunty].qnty >= 1) {
                   const removeItem = state.carts[itemIndexQunty].qnty -=1
                   console.log([...state.carts, removeItem]);

                   return {
    
                    ...state, 
                    carts: [...state.carts, ]
                }
                }else if(state.carts[itemIndexQunty].qnty === 1) {
                    const data = state.carts.filter((element) => element.id !== action.payload);

                    return{
                        ...state, 
                        carts: data
                    }
                }
               
                
              


        default: return state
   }
}