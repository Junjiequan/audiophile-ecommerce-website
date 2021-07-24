const successToggleReducer = (state = false, action) => {
    switch(action.type){
        case 'SUCCESS':
            return !state;
        default :
            return state;
    }
}

export default successToggleReducer