import React from "react";
import "@material-tailwind/react/tailwind.css";
import Button from "@material-tailwind/react/Button";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Fashion from "./components/Productinfo/ecommerce/Fashion";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import Servicetwo from "./components/Service/Servicetwo";
import ScrollToTop from "./components/ScrollTop/ScrollTop";
import Restaurant from "./components/Productinfo/ecommerce/Restaurant";

import Grocery from "./components/Productinfo/ecommerce/Grocery";
import Furniture from "./components/Productinfo/ecommerce/Furniture";
import Gadget from "./components/Productinfo/ecommerce/Gadget";
import Gadgetweb from "./components/Productinfo/ecommerce/ecommerceweb/Gadgetweb";

import Plant from "./components/Productinfo/ecommerce/Plant";
import Plantweb from "./components/Productinfo/ecommerce/ecommerceweb/Plantweb";
import RestaurantWeb from "./components/Productinfo/ecommerce/ecommerceweb/RestaurantWeb";
import Fashioncart from "./components/Productinfo/ecommerce/ecommerceweb/Fashioncart";
import Grocerycart from "./components/Productinfo/ecommerce/ecommerceweb/Grocerycart";
import Products from "./components/product/Products";
import TechInfo from "./components/tech/TechInfo";
import Industry from "./components/Industry/Industry";
import Contact from "./components/Contact/Contact";
import Navbartwo from "./components/navbar/Navbartwo";
import Footer from "./components/Footer/Footer";
import Estimate from "./components/estimate/Estimate";

import ERP from "./components/Productinfo/software/ERP";
import LMS from "./components/Productinfo/software/LMS";
import EMS from "./components/Productinfo/software/EMS";
import POS from "./components/Productinfo/software/POS";

import FashionApp from "./components/Productinfo/Apps/FashionApp";
import Food from "./components/Productinfo/Apps/Food";
import GroceryApp from "./components/Productinfo/Apps/GroceryApp";

import Restuwebsite from "./components/Productinfo/Web/Restuwebsite";
import HotelWeb from "./components/Productinfo/Web/HotelWeb";
import SchoolWeb from "./components/Productinfo/Web/SchoolWeb";
import AdvertisementWeb from "./components/Productinfo/Web/AdvertisementWeb";

const App = () => {
  return (
    <div>
      <Navbartwo></Navbartwo>

      <ScrollToTop></ScrollToTop>
      <switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/services" component={Servicetwo}></Route>
        <Route path="/products" component={Products}></Route>
        <Route path="/technologies" component={TechInfo}></Route>
        <Route path="/industries" component={Industry}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/estimate" component={Estimate}></Route>

        <Route path="/fashion" component={Fashion}></Route>
        <Route path="/restaurant" component={Restaurant}></Route>
        <Route path="/restaurantcart" component={RestaurantWeb}></Route>
        <Route path="/grocery" component={Grocery}></Route>
        <Route path="/furniture" component={Furniture}></Route>
        <Route path="/gadget" component={Gadget}></Route>
        <Route path="/gadgetcart" component={Gadgetweb}></Route>
        <Route path="/plant" component={Plant}></Route>
        <Route path="/plantcart" component={Plantweb}></Route>
        <Route path="/fashioncart" component={Fashioncart}></Route>
        <Route path="/grocerycart" component={Grocerycart}></Route>

        <Route path="/erp" component={ERP}></Route>
        <Route path="/lms" component={LMS}></Route>
        <Route path="/ems" component={EMS}></Route>
        <Route path="/pos" component={POS}></Route>

        <Route path="/fashionapp" component={FashionApp}></Route>
        <Route path="/foodapp" component={Food}></Route>
        <Route path="/groceryapp" component={GroceryApp}></Route>

        <Route path="/restuweb" component={Restuwebsite}></Route>
        <Route path="/hotelweb" component={HotelWeb}></Route>
        <Route path="/schoolweb" component={SchoolWeb}></Route>
        <Route path="/advertisementweb" component={AdvertisementWeb}></Route>
      </switch>

      <Footer></Footer>
    </div>
  );
};

export default App;
