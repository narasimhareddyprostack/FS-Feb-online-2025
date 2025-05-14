import {GM,GN} from './message.action';
let intialState={
    msg:"Hello! MR"
}
let messageReducer  = (state=intialState,action)=>{

    switch (action.type) {
        case GM:
            return {msg:"Good Moring"};
        case GN:
            return {msg:"Good Night"};
        default:
            return state;
    }

}
export {messageReducer}