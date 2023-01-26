import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";

function App() {

  const [cartIsShown,setCartIsShown]=useState(false);
  const showCarthandler = ()=>{
    setCartIsShown(true);
  }

  const hideCartHandler =()=>{
    setCartIsShown(false);
  }

  return (
    <>
      {cartIsShown&&<Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCarthandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
