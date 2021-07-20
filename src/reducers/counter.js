const counterReducer = (state = 1, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
                if(state <= 1) return state = 1 
                else return state - 1;
        default :
            return state;
    }
}

export default counterReducer