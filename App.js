import { Provider } from 'react-redux';
import Navigations from './Navigations';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Navigations />
    </Provider>
  );
}

