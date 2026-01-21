import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import Book from './component/Book.tsx';
import MyApp from './component/MyApp.tsx';
// import Parent from './component/props/Parent.tsx';
import CardApp from './component/props/CardApp.tsx';
import Products from './component/props/Products.tsx';
import ParentCardLayout from './component/children/ParentCardLayout.tsx';
import Counter from './component/state/Counter.tsx';
import InputSample from './component/state/InputSample.tsx';
import InputMultiSample from './component/state/InputMultiSample.tsx';
import InputMultiSample2 from './component/state/InputMultiSample2.tsx';
import Say from './component/state/Say.tsx';
import Poster from './component/state/Poster.tsx';
import MyBtn from './component/state/MyBtn.tsx';
import CounterRef from './component/ref/CounterRef.tsx';
import InputRef from './component/ref/InputRef.tsx';
import Button from './component/children/event/Button.tsx';
import Button2 from './component/children/event/Button2.tsx';
import Toolbar from './component/children/event/Button3.tsx';
import SignUp from './component/children/event/SignUp.tsx';
import SignUp2 from './component/children/event/SignUp2.tsx';
import UserForm from './component/children/event/UserForm.tsx';
import LifeCycle from './component/effect/LifeCycle.tsx';
import LifeCycle2 from './component/effect/LifeCycle2.tsx';
import ListTask from './component/state/ListTask.tsx';
import TaskApp from './component/state/TaskApp.tsx';
import UserApp from './component/reducer/UserApp.tsx';
import UserApp2 from './component/reducer/UserApp2.tsx';
import Memo from './component/memo/Memo.tsx';
import Parent from './component/memo/Parent.tsx';

createRoot(document.getElementById('root')!).render(
  <>
    {/* <App />
    <Book /> */}
    {/* <Parent /> */}
    {/* <MyApp /> */}
    {/* <CardApp /> */}
    {/* <Products /> */}
    {/* <ParentCardLayout /> */}
    {/* <Counter /> */}
    {/* <InputSample /> */}
    {/* <InputMultiSample2 /> */}
    {/* <Say /> */}
    {/* <Poster /> */}
    {/* <MyBtn /> */}
    {/* <CounterRef /> */}
    {/* <InputRef /> */}
    {/* <Button2 /> */}
    {/* <Toolbar /> */}
    {/* <SignUp2 /> */}
    {/* <UserForm/> */}
    {/* <LifeCycle2 /> */}
    {/* <TaskApp /> */}
    {/* <UserApp2 /> */}
    {/* <TaskApp /> */}
    {/* <Memo /> */}
    <Parent />
  </>,
);
