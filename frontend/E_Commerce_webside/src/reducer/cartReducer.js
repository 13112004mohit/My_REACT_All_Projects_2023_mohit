const cartReducer = (state,action) =>{

        switch(action.type){
        
        case "ADD_TO_CART":
          let { id, color, amount, product } = action.payload;
      
               // tackle the existing product
              let existingProduct = state.cart.find(
                  (curItem) => curItem.id === id + color
                );
                // same product rhene pr bs uska amount increase krna hai
              if (existingProduct) {
                 let updatedProduct = state.cart.map((curElem) => {
                   if (curElem.id === id + color) {
                     let newAmount = curElem.amount + amount;
                                 if (newAmount >= curElem.max) {
                       newAmount = curElem.max;
                     }
                     return {
                       ...curElem,
                       amount: newAmount,
                     };
                   } else {
                     return curElem;
                   }
                 });
                 return {
                   ...state,
                   cart: updatedProduct,
                 };
                //  new product cart me add horha hai
               } else {
                 let cartProduct = {
                   id: id + color,
                   name: product.name,
                   color,
                   amount,
                   image: product.image[0].url,
                   price: product.price,
                   max: product.stock,
                 };
                             return {
                   ...state,
                   cart: [...state.cart, cartProduct],
                 };
                     }
                
        case "SET_DECREASE":
                 let decrese_Product = state.cart.map(
                   (curElem)=>{
                     if(curElem.id === action.payload){
                       let decAmount = curElem.amount - 1;

                       if(decAmount<=1){
                         decAmount = 1
                       }

                       return{
                         ...curElem,
                         amount:decAmount
                       }
                     }
                     else{
                       return curElem;
                     }
                   }
                 )

                return {
                    ...state,
                    cart:decrese_Product,
                }


        case "SET_INCREASE":
            let Increase_Product = state.cart.map(
            (curElem)=>{
              if(curElem.id === action.payload){
                let IncAmount = curElem.amount + 1;

                if(IncAmount>=curElem.max){
                  IncAmount = curElem.max;
                }

                return{
                  ...curElem,
                  amount:IncAmount
                }
              }
              else{
                return curElem;
              }
            }
          )

        return {
            ...state,
            cart:Increase_Product
        }



        case "REMOVE_ITEM":
                let updatedCart = state.cart.filter(
                        (curItem) =>curItem.id !== action.payload);
                return {
                        ...state,
                        cart:updatedCart,
                }        
 
        case "CLEAR_CART":
                return{
                        ...state,
                        cart:[],
                } 

        case "CART_TOTAL_ITEM":
                 let updatedValue = state.cart.reduce((initialVal,currentVal)=>{
                    let {amount} = currentVal;
                    initialVal = initialVal+amount;
                    return initialVal;
                 },0)       
                 
                 return {
                    ...state,
                    total_amount:updatedValue,
                 }

        case "CART_TOTAL_PRICE":
                let total_price = state.cart.reduce((initialdata,curElem)=>{
                  let {price,amount} = curElem;
                  initialdata = initialdata+price*amount;

                  return initialdata
                },0)
               
                return{
                  // after EC6 if key and value is name then you can write only
                  // one single ko bhi likh skte hai key:value agar same hai to 
                  // total_price:total_price,
                  ...state,
                  total_price
                }


        default :        
           return state;
        }


}

 export default cartReducer;











// const cartReducer = (state, action) => {
//         if (action.type === "ADD_TO_CART") {
//           let { id, color, amount, product } = action.payload;
      
//           // tackle the existing product
      
//           let existingProduct = state.cart.find(
//             (curItem) => curItem.id == id + color
//           );
      
//           if (existingProduct) {
//             let updatedProduct = state.cart.map((curElem) => {
//               if (curElem.id == id + color) {
//                 let newAmount = curElem.amount + amount;
      
//                 if (newAmount >= curElem.max) {
//                   newAmount = curElem.max;
//                 }
//                 return {
//                   ...curElem,
//                   amount: newAmount,
//                 };
//               } else {
//                 return curElem;
//               }
//             });
//             return {
//               ...state,
//               cart: updatedProduct,
//             };
//           } else {
//             let cartProduct = {
//               id: id + color,
//               name: product.name,
//               color,
//               amount,
//               image: product.image[0].url,
//               price: product.price,
//               max: product.stock,
//             };
      
//             return {
//               ...state,
//               cart: [...state.cart, cartProduct],
//             };
//           }
//         }
      
//         // to set the increment and decrement
//         if (action.type === "SET_DECREMENT") {
//           let updatedProduct = state.cart.map((curElem) => {
//             if (curElem.id === action.payload) {
//               let decAmount = curElem.amount - 1;
      
//               if (decAmount <= 1) {
//                 decAmount = 1;
//               }
      
//               return {
//                 ...curElem,
//                 amount: decAmount,
//               };
//             } else {
//               return curElem;
//             }
//           });
//           return { ...state, cart: updatedProduct };
//         }
      
//         if (action.type === "SET_INCREMENT") {
//           let updatedProduct = state.cart.map((curElem) => {
//             if (curElem.id === action.payload) {
//               let incAmount = curElem.amount + 1;
      
//               if (incAmount >= curElem.max) {
//                 incAmount = curElem.max;
//               }
      
//               return {
//                 ...curElem,
//                 amount: incAmount,
//               };
//             } else {
//               return curElem;
//             }
//           });
//           return { ...state, cart: updatedProduct };
//         }
      
//         if (action.type === "REMOVE_ITEM") {
//           let updatedCart = state.cart.filter(
//             (curItem) => curItem.id !== action.payload
//           );
//           return {
//             ...state,
//             cart: updatedCart,
//           };
//         }
      
//         // to empty or to clear to cart
//         if (action.type === "CLEAR_CART") {
//           return {
//             ...state,
//             cart: [],
//           };
//         }
      
//         if (action.type === "CART_TOTAL_ITEM") {
//           let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
//             let { amount } = curElem;
      
//             initialVal = initialVal + amount;
//             return initialVal;
//           }, 0);
      
//           return {
//             ...state,
//             total_item: updatedItemVal,
//           };
//         }
      
//         if (action.type === "CART_TOTAL_PRICE") {
//           let total_price = state.cart.reduce((initialVal, curElem) => {
//             let { price, amount } = curElem;
      
//             initialVal = initialVal + price * amount;
//             // 25000 + 0 = 25000
//             // 10199 + 25000 = 121
      
//             return initialVal;
//           }, 0);
      
//           return {
//             ...state,
//             total_price,
//           };
//         }
      
//         return state;
//       };
      
//       export default cartReducer;