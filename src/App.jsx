import { useState } from "react";
import Header from "./components/HEader";
import Hero from "./components/Hero";
import Toggle from "./components/Toggle";
import Rooter from "./components/Rooter";

function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    state: "cart",
  });
  const [selected, setSelected] = useState([]);

  const [prices, setPrices] = useState(500)
 

  const priceIncress = (price) => {
    const addMoney = price + prices;
    setPrices(addMoney)
  }

  const priceDecress = (id) =>{
    const deletePrice = selected.find((p) => p.recipe_id == id)
    console.log(typeof deletePrice)
    setPrices(prices - deletePrice.price)
  }

  const onDelete = (id) => {
    priceDecress(id)
    const remainig = selected.filter((p) => p.recipe_id !== id);
    setSelected(remainig)
  }

  const handleSelectedPr = (product) => {
    const findPro = selected.find((p) => p.recipe_id === product.recipe_id);

    if (!findPro) {
      const newProduct = [...selected, product];
      setSelected(newProduct);
      priceIncress(product.price);
    }else{
      alert("haw maw khaw")
    }
  };

  const handleActiveState = (state) => {
    if (state == "cart") {
      setIsActive({
        cart: true,
        state: "cart",
      });
    } else {
      setIsActive({
        cart: false,
        state: "about",
      });
    }
  };

  return (
    <>
      <section className="md:w-10/12 mx-auto">
        <Header selected={selected} price={prices} />
        <Hero />
        <Toggle
          handleActiveState={handleActiveState}
          handleSelectedPr={handleSelectedPr}
          isActive={isActive}
          selected={selected}
          onDelete={onDelete}
        />

        <div></div>
      </section>
      <Rooter />
    </>
  );
}

export default App;
