
function counterReducer(state,action){
    switch(action.type){
        case 'increment':
            return state + 1;
    }
}

export default counterReducer;