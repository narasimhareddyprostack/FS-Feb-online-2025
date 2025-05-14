import Message from "./components/Message/Message";
import {Provider} from 'react-redux'
import { store } from "./redux/store";
let App = ()=>{

    return <div>
            <Provider store={store}>
              <h3>App Component</h3>
              <hr/>
              <Message/>
            
            </Provider>
          </div>

}

export default App;