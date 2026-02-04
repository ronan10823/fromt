import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import './index.css';
import MyTodo from './redux/component/MyTodo.tsx';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/modules/index.ts';

const store = configureStore({
  reducer: rootReducer,
});

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <MyTodo />,
  </Provider>,
  // <Consumer />,
);
