import "./App.css";
import { useState, useEffect} from "react";
import bakeryData from "./assets/bakery-data.json";
import bakeryItem from "./components/BakeryItem.js"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  
  
  return (
    <div className="App">
      <div className="row">
        <div className="column">
          <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
          {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            // <p>Bakery Item {index}</p> // replace with BakeryItem component
            <div key={index}>
              {bakeryItem(item)} 
              <input type="submit" value="add to cart" onClick={() => addToCart(item)} />
            </div>
          ))}
        </div>
        <div className="column">
          <h2>Cart</h2>
          {/* TODO: render a list of items in the cart */}
          {cart.map((item, index) => (
          <div key={index}>
            {`${item.name}: $${item.price}`}
          </div>
        ))}
        <div>Total: ${cartTotal}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
