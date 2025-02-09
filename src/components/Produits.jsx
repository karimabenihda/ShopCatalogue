import React, { useState, useEffect } from 'react';
import './produits.css';
import { CiFaceFrown } from "react-icons/ci";

function Affichage({ category, price }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }, []);

    const filteredProducts = products.filter(product => {
        const matchesCategory = category === '' || product.category === category;
     
        const [minPrice, maxPrice] = price ? price.split('-').map(Number) : [0, Infinity];
        const matchesPrice = !price || (
            product.price >= minPrice && product.price <= maxPrice
        );
        
        return matchesCategory && matchesPrice;
    });

    return (
        <div><br />
            <h2 style={{textAlign:'center',color:'#6892d5'}}>Recommendation</h2><br />
            <div className="card-container" >
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div className="card" key={product.id} style={{paddingInline:'20px',width: '230px',border:"1px,solid,#ddd" ,borderRadius:'10px'}}>
                            <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img className="card-img-top circle" src={product.thumbnail} alt={product.title} style={{width:"180px",height:'180px', boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" ,margin:'auto 0' ,borderRadius:"50%", objectFit: 'cover'}}/>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title" style={{fontSize:'22px'}} >{product.title}</h3>
                            <span className='badge bg-primary' style={{backgroundColor:'#6892d5',color:'white',fontSize: "17px", fontWeight: "600",padding:'4px' ,borderRadius:'10px'}}>{product.category}</span>
                                <p className="card-text">{product.description.slice(0,50)}</p>
                                <p className="card-text" id='price'       
                                style={{ fontSize: "22px", fontWeight: "700",color:"#6892d5" }}
                                >{product.price} MAD</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh", 
    width: "58vw", 
  }}
>
  <div
    className="alert alert-danger"
    role="alert"
    style={{
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      margin: "10px",
      width: "360px",
    }}
  >
    <h4
      className="alert-heading"
      style={{ fontSize: "35px", fontWeight: "500" }}
    >
      Product Not Found! <CiFaceFrown style={{marginBottom:'-6px',height:'35px',width:'35px',color:'#6892d5'}}/>
    </h4>
    <p style={{ fontSize: "18px", fontWeight: "500" }}>
      Please select another category to view products.
    </p>
  </div>
</div>

                )}
            </div>
        </div>
    );
}

export default Affichage;
