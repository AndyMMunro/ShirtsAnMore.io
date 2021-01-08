import React, { useState} from 'react';

export default function Products({ addToCart}) {
    const [products] = useState([
        {
            name: 'T-shirt',
            cost: 19.99,
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e4fc88f2-863c-4ca7-9aed-f4b7616af161/acg-gift-shop-long-sleeve-top-rNdfSR.jpg'
          
          },
        {
          name: 'Pants',
          cost: 29.99,
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3f647ba0-acf8-4b9d-a6e2-e0099cf3094c/sportswear-club-fleece-mens-cargo-pants-NhXSTS.jpg'
        
        },

        {
          name: 'Dress',
          cost: 65.00,
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/daa3137d-0e39-408e-9aab-80f1573fecc8/air-womens-dress-wjj6n3.jpg'
        
        },


        {
          name: 'Shoes',
          cost: 110.00,
          image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fe715079-7f06-4897-8bcf-3230721c94ac/air-force-1-crater-mens-shoe-hcd5fv.jpg'
        
        },




      ]);
    
 
    
    
 return (
        <>
      
        <h1>Products</h1>
        <div className="products">
        {products.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
            <img src={product.image} alt={product.name}/>
            <button onClick={() => addToCart(product)}>
          Add to Cart
          </button>
        </div>
        ))}
       </div>
    </>
      
      );
}