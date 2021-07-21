const initialState = {
    cartItems:[]
}

const onAdd = (currentItem, newItem, unit) =>{
    const exist = currentItem.find(item=> item.id === newItem.id);

    if(exist){  
        const result = currentItem.map(item=> 
            item.id === newItem.id ? {...exist, qty: exist.qty + unit} : item 
            );
        return result;
    } else {
        const addedNewItem = [...currentItem, {...newItem, qty: unit}];
        return addedNewItem;
    }
}
const onRemove = (currentItem, delItem) =>{
    const exist = currentItem.find(item=> item.id === delItem.id);

    if(exist.qty === 1){
        const result = currentItem.filter(item=> item.id !== delItem.id);
        return result;
    } else {
        const decrementedItem = currentItem.map(item=>
                item.id === delItem.id ? {...exist, qty:exist.qty - 1} : item
            )
        return decrementedItem;
    }
} 

const productsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'RES_PRODUCT':
            return initialState;
        case 'ADD_PRODUCT':
            return {
                ...state,
                cartItems: onAdd(state.cartItems, action.payload, action.unit)
            };
        case 'DEL_PRODUCT':
            return {
                ...state,
                cartItems: onRemove(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default productsReducer