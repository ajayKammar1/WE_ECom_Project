import React from "react";
import Cisco from "./Pages/CISCO";
import RegisterForm from "./Pages/Register";
import Inventory from "./Pages/inventory";
import Addproduct from "./Pages/AddProduct";
import Supplier from "./Pages/Supplier";
import Supplier2 from "./Pages/Supplier2";
import PurchaseOrder from "./Pages/PurchaseOrder";

const App = () => {
  return (
    <>
      <Cisco/>
      <RegisterForm/>
      <Inventory/>
      <Addproduct/>
      <Supplier/>
      <Supplier2/>
      <PurchaseOrder/>
    </>
  );
}

export default App;