import { Provider } from 'react-redux';
import Counter from './counter1';
import {store} from './redux/reducer1';

export default function App() {
// var [count,setCount] = useState(0);

  return (
    <Provider store={store}>
        <Counter/>
        <Counter/>
    </Provider>
  );
}