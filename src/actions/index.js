//product unit
export const increment = ()=>{
    return {
        type: 'INCREMENT'
    }
}
export const decrement = ()=>{
    return {
        type: 'DECREMENT'
    }
}

//modal
export const toggleModal = ()=>{
    return {
        type:'TOGGLE'
    }
}

//product
export const getProduct = ()=>{
    return {
        type:'GET_PRODUCT'
    }
}
export const addProduct = (product,unit)=>{
    return {
        type:'ADD_PRODUCT',
        payload: product,
        unit:unit
    }
}
export const deleteProduct = (product)=>{
    return {
        type:'DEL_PRODUCT',
        payload: product
    }
}