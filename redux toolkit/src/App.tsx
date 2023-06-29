import { Provider } from 'react-redux';
import store from './redux/store';
import Dashboard from './Dashboard';
export interface User {
  isTrue: boolean,
  name: string
}
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Dashboard />
      </div>
    </Provider>
  );
};

export default App;
