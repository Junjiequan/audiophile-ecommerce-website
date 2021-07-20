
const counterReducer = (state = {data:[], unit:0}, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {
                ...this.data,
                unit: this.unit + 1
            }
        case 'DECREMENT':
            return {
                ...this.data,
                unit: this.unit - 1
            }
        default :
            return state;
    }
}

export default counterReducer