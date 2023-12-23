

import {useDispatch, useSelector} from "react-redux"
import { useState } from 'react';
import { deleteGood ,editGood,addGood} from '../app/features/goodsSlice';
function Goods() {
    let {goods } = useSelector((state)=> state.goodReducer);
    const[price,setPrice] = useState(0);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    let [indexObj,setIndexObj] = useState(0)
    
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productValue, setProductValue] = useState("");
    

    const editGoods= ()=>{
        let obj = {...goods[indexObj],product_price:price}
        dispatch(editGood({obj,indexObj}));
        setShow(false);
    }

    const addGoods = () => {
      let newProduct = {
          product_name: productName,
          product_description: productDescription,
          product_price: productValue
      }
      dispatch(addGood(newProduct));
      setProductName("");
      setProductDescription("");
      setProductValue("");
  }

  return (
    <div className="App">
      <div>
      <input  onChange={(e) => setProductName(e.target.value)} type="text" placeholder="name"/>
            <input   onChange={e => setProductDescription(e.target.value)} type="text"
                   placeholder="description"/>
            <input   onChange={e => setProductValue(e.target.value)} type= "number" placeholder="price"/>
            <button onClick={addGoods}>Add</button>
      </div>
     {goods.map((good,index)=>{
          return (
            <div key={index}>
              <li>
               {good.product_name} {good.product_price}
              </li>
              <button onClick={() => dispatch(deleteGood(index))}>
                DELETE
              </button>
              <button
                onClick={() => {            
                //   setPrice(good.product_price)
                setPrice(good.product_price)

                setIndexObj(index)
                  setShow(true)

                  
                }}
              >
                EDIT
              </button>
              <div>
               
             
              </div>
            </div>
          );
     })}
       
       {show && <div className='editWindow'>
                    <div >
                    { console.log(price)}
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        defaultValue={price}
                        

                         />
                       
                       
                    </div>
                    <button 
                           onClick={editGoods}
                        >Edit</button>
                </div>} 
    </div>
  );
}

export default Goods;
