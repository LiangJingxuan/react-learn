export default (state, action)=>{
    if(state===undefined){
        state={
            r: 255,
            g: 0,
            b: 0
        }
    }

    switch (action.type){
        case 'G' :
            return {...state, g: state.g+10}
    }

    return state;
}