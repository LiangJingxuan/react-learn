export default (state, action)=>{
    if(state===undefined){
        state={
            v: 0,
            a: 1,
            b: 2
        }
    }

    switch (action.type){

        case 'ADD' :
            return {...state, v: state.v+1};

        case 'DIV' :
            return {...state, v: state.v-1};

        case 'ADDNUM' :
            return {...state, v: state.v+action.n};
    }

    return state;
}