// Routes.js
import Header from './Header';
import Home from './Home'
import Contact from './Contact';
import Footer from './Footer'
import Shop from './Shop';
import FuturePrice from './FuturePrice';
import Shop2 from './Shop2';
import Cart from './Cart';
import Pcoconut from './Pcoconut';
import Papple from './Papple';
import Pcorn from './Pcorn';
import Ppotato from './Ppotato';
import Ptomato from './Ptomato';
import Praddish from './Praddish';
import Pycap from './Pycap';
import Pturnip from './Pturnip';
import Pcoriander from './Pcoriander';
import Pcap from './Pcap';
import Pctomato from './Pctomato';
import Pguava from './Pguava';
import Prcap from './Prcap';
import Pstrawberry from './Pstrawberry';
import About from './About';
import Pcabbage from './Pcabbage';
import Pbanana from './Pbanana';
import Ppear from './Ppear';
import Pbittergourd from './Pbittergourd';
import Pgonion from './Pgonion';
import Plemon from './Plemon';
import Pmango from './Pmango';
import Ppomgra from './Ppomgra';
import Papricot from './Papricot';
import { Routes, Route } from 'react-router-dom';
import Pcarrot from './Pcarrot';
import Login from './Login';
import Signup from './Signup'
import VegAi from './VegAi';
import Payment from './Payment'

function AppRoutes() {
  return (
    <Routes>
    < Route exact path="/" element={<Login/>}/>
   <Route exact path="/signup" element={<Signup/>}/>
   <Route exact path="/home" element={[<Header/>,<Home/>]}/>
   <Route exact path="/VegAi" element={[<Header/>,<VegAi/>]} />
   <Route exact path="/contact" element={[<Header/>,<Contact/>]} />
   <Route exact path="/shop" element={[<Header/>,<Shop/>]} />
   <Route exact path="/shop2" element={[<Header/>,<Shop2/>]} />
    <Route exact path="/shop/coconut" element={[<Header/>,<Pcoconut/>]} />
    <Route exact path="/shop/apple" element={[<Header/>,<Papple/>]} />
    <Route exact path="/shop/corn" element={[<Header/>,<Pcorn/>]} />
    <Route exact path="/shop/potato" element={[<Header/>,<Ppotato/>]} />
    <Route exact path="/shop/tomato" element={[<Header/>,<Ptomato/>]} />
    <Route exact path="/shop/turnip" element={[<Header/>,<Pturnip/>]} />
    <Route exact path="/shop/y_cap" element={[<Header/>,<Pycap/>]} />
    <Route exact path="/shop/r_cap" element={[<Header/>,<Prcap/>]} />
    <Route exact path="/shop/cap" element={[<Header/>,<Pcap/>]} />
    <Route exact path="/shop/strawberry" element={[<Header/>,<Pstrawberry/>]} />
    <Route exact path="/shop/guava" element={[<Header/>,<Pguava/>]}/>
    <Route exact path="/shop/coriander" element={[<Header/>,<Pcoriander/>]} />
    <Route exact path="/shop/raddish" element={[<Header/>,<Praddish/>]} />
    <Route exact path="/shop/c_tomato" element={[<Header/>,<Pctomato/>]} />
    <Route exact path="/shop/cabbage" element={[<Header/>,<Pcabbage/>]} />
    <Route exact path="/shop/banana" element={[<Header/>,<Pbanana/>]} />
    <Route exact path="/shop/pear" element={[<Header/>,<Ppear/>]} />
    <Route exact path="/shop/mango" element={[<Header/>,<Pmango/>]} />
    <Route exact path="/shop/carrot" element={[<Header/>,<Pcarrot/>]} />
    <Route exact path="/shop/lemon" element={[<Header/>,<Plemon/>]} />
    <Route exact path="/shop/bittergourd" element={[<Header/>,<Pbittergourd/>]} />
    <Route exact path="/shop/g_onion" element={[<Header/>,<Pgonion/>]} />
    <Route exact path="/shop/pomegra" element={[<Header/>,<Ppomgra/>]} />
    <Route exact path="/shop/apri" element={[<Header/>,<Papricot/>]} />
   <Route exact path="/cart" element={[<Header/>,<Cart/>]} />
   <Route exact path="/cart/payment" element={[<Payment/>]} />
   <Route path="/predicts" element={[<Header/>,<FuturePrice />]} />
   <Route exact path="/about" element={[<Header/>,<About/>]} />
    </Routes>
  );
}

export default AppRoutes;
