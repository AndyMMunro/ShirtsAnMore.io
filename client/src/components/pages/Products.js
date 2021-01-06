import React, {useEffect, useState} from 'react';
import '../Products.css';
import Products from './ProductsPage';
import Cart from './Cart';
const PAGE_PRODUCTS = 'PRODUCTS';
const PAGE_CART = 'cart';

//import ProductsCard from "../ProductsCard"
//import Axios from "axios";
//import '../../App.css';
// import { Link } from "react-router-dom";
// import API from "../../utils/API.js"

//export default function Products() {

  //const [products, setProducts] = useState([]);
  // const [error, setError] = useState("");
  // console.log(products, "testing state array");

 // useEffect(() => {
 //   loadAllProducts()
 // }, [])
  
 // function loadAllProducts() {
   // Axios.get("api/products") 
   // .then(res =>{
    //  setProducts(res.data)
      // console.log(res, "testing axios response")
   // })
//      .catch(error => console.log(error));
//  };

   // <div>
      
    //  <h1 className='products' results={products}>PRODUCTS</h1>
   //  <ProductsCard 
      //      results={products} 
     //       />
   // </div>
   function App() {
  
    const [cart, setCart] = useState([])
    const [page, setPage] = useState(PAGE_PRODUCTS);
    
  
  
  const removeFromCart = (productToRemove) => {
  setCart(
    cart.filter((product) =>product !==productToRemove)
  );
  
  };
  const addToCart = (product) => {
    setCart([...cart, {...product}]);
    };
    
  
  
  const navigateTo =(nextPage) => {
    setPage(nextPage);
  };
  

   return (
    <div className="App">
      <header>
        <button onClick ={() => navigateTo(PAGE_CART)}>
        Go to Cart ({cart.length})
      </button>
      
      <button onClick ={() => navigateTo(PAGE_PRODUCTS)}>
        View Products
      </button>
      
      
      </header>
      {page === PAGE_PRODUCTS && (
         <Products addToCart={addToCart} />
      )}
         {page ===  PAGE_CART && (  
         <Cart cart={cart} removeFromCart ={removeFromCart} />
         )}
  </div>
         );
  
         }
  
export default  App;

  