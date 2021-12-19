
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement} from './action/index';

function App() {
  const myState = useSelector((state)=>state.changeNumber);
  const dispatch = useDispatch();
  return (

    <div className="App">
        <h1>Welcome to React Redux Application</h1>
        <h4>Increment/Decrement Counter</h4>

        <div className='counter_main'>
          <a  className='operation' onClick={()=>dispatch(decrement())}><span>-</span></a>
          <input type="text" value={myState}/>
          <a  className='operation'  onClick={()=>dispatch(increment())}><span>+</span></a>
        </div>
    </div>
  );
}

export default App;
