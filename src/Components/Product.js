import React,{useState}           from 'react'
import {useSelector, useDispatch} from 'react-redux';

function Product() {

    const [productName,setProductName] = useState('');
    const dispatch = useDispatch();



    const state = useSelector(function(state) {
        return state.product;
      });
    
    const handleChange = (e) => {
      setProductName(e.target.value)
    }


    const clickHandler = () => {
      const product = {
        id:Math.floor(Math.random() * 10000),
        product:productName
      }
  
      dispatch({
        type:"CREATE3",
        payload: product
      })
      setProductName("");
    }


    return (
        <div>
            <h2>Product List</h2>

            <input
                type="text"
                value={productName}
                onChange={handleChange}
                placeholder="Product Name"
                style={{padding:'15px',outline: 'none',marginRight:'10px', borderRadius:'10px', border:'1px solid #ddd'}}
            />
            <button onClick={clickHandler}>Add Product</button>

            {
                state.allProducts.map(product=>{
                    return(
                        <div style={{display:"flex",alignItems: "center",justifyContent: "space-between"}}>
                            <img width="80" height="50" src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                            <p style={{backgroundColor:'teal', color:'white', padding:'5px',borderRadius:'5px'}}>{product.id}</p>
                            <h3 >{product.product}</h3>
                        </div>
                    )
                })
            }
            


        </div>
    )
}

export default Product;

