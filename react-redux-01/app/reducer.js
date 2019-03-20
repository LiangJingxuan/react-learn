export default (state, action)=>{
    if(state===undefined){
        state={
            v: 0,
            a: 1,
            b: 2
        }
    }

    return state;
}