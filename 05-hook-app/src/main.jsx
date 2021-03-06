import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


// import CounterApp from './01-UseState/01-UseState'
// import { Layout } from './05-useLayoutEffect/Layout'
// import CallbackHook from './06-memos/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import MemoHook from './06-memos/Memorize-hook'
// import Memorize from './06-memos/Memorize'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import CounterWithCustomHook from './01-UseState/CounterWithCustomHook'
// import HooksApp from './HooksApp'

// import './08-useReducer/intro-reducer'
// import TodoApp from './08-useReducer/TodoApp'
import MainApp from './09-useContext/MainApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        {/* <React.StrictMode> */}
            <MainApp />
        {/* </React.StrictMode> */}
    </BrowserRouter>

)
