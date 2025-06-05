import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import './styles/reset.css';
import './styles/common.css';
import './styles/main.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './components/Main';
import Intro from './components/Intro';
import Info from './components/Info';
import Event from './components/Event';
import Customer from './components/Customer';
import Login from './components/Login';
import Join from './components/Join';
import Cart from './components/Cart';
import Order from './components/Order';


function App() {
  return (
    <>
    <BrowserRouter>
      <Header />

      {/* 상단 내비게이션 메뉴 클릭시 해당 콤포넌트와 이름이 일치하는 페이지가 나오게 */}
      <Routes>
        <Route path="/ginipet" element={<Main />} />

        {/* 회원가입,로그인 콤포넌트 */}
        <Route path="/ginipet" element={<Main />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/info" element={<Info />} />
        <Route path="/event" element={<Event />} />
        <Route path="/customer" element={<Customer />} />

        {/* 회원가입, 로그인, 주문조회, 장바구니 콤포넌트 */}
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />

      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
