import {createRoot} from 'react-dom/client'  //React 19
import App from './App.jsx'

createRoot(document.getElementById('root')).render(<App/>)
//createRoot(document.getElementById('root')).render(<div><h1>Good Evening</h1><h2>Welcome to React World</h2></div>)
//createRoot(document.getElementById('root')).render(<h1>Good Evening</h1>)
//createRoot(document.getElementById('root')).render("Hello,GE")

