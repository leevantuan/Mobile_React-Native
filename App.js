import Index from './src/Components/Router/Index';
import { Provider } from 'react-redux';
import store from './src/Components/Redux/Store';

export default function App() {
  return (
    <Provider store={store} >
      <Index />
    </Provider>
  );
};