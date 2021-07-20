const initialState = {
    carItems:[]
}

const onAdd = (currentItem, newItem, unit) =>{
    const exist = currentItem.find(item=> item.id === newItem.id);
    if(exist){  
        const result = currentItem.map(item=> item.id === newItem.id ? {...exist, qty: exist.qty + unit} : item );
        return result;
    } else {
        const addNewItem = [...currentItem, {...newItem, qty: unit}];
        return addNewItem;
    }
}

const productsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_PRODUCT':
            return state;
        case 'ADD_PRODUCT':
            return {
                ...state,
                carItems: onAdd(state.carItems, action.payload, action.unit)
            };
        case 'DEL_PRODUCT':
            return state;
        default:
            return state;
    }
}

export default productsReducer