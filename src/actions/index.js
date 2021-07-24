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
export const toggleSuccess = ()=>{
    return {
        type:'SUCCESS'
    }
}

//product
export const resProduct = ()=>{
    return {
        type:'RES_PRODUCT'
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