import {gmAction,gnAction} from '../../redux/message/message.action'
import {useDispatch,useSelector} from 'react-redux'
let Message = ()=>{
    let dispatch = useDispatch();
    let message = useSelector((state)=>{
        return state;
    })

    let gmHandler = ()=>{
        //dispatch an action
        dispatch(gmAction())
    }
    let gnHandler = ()=>{
        dispatch(gnAction())
    }
    return <div>
            <h3>Message Component</h3>
            <pre>{JSON.stringify(message)}</pre>
            <h4>Value:{message.msg}</h4>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gnHandler}>GN</button>
           </div>
}

export default Message;