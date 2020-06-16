
function counterReducer(state,action){
    switch(action.type){
        case 'increment':
            return state + 1;
        default:
            throw new Error();
    }
}

export default counterReducer;