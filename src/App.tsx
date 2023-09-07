import { Provider } from 'react-redux';

import { AppProvider } from '@/providers';
import { store } from '@/stores';

function App() {
  return (
    <>
      <Provider store={store}>
        <AppProvider />
      </Provider>
    </>
  );
}

export default App;
