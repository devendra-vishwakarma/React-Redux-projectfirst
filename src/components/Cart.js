import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { remove } from '../store/cartSlice';
function Cart() {
    const dispatch = useDispatch();
    const products = useSelector(state => (state.cart))
    console.log(products);

    const handleRemove = (productid)=>{
        dispatch(remove(productid))
    }
  return (
    <div>
        <h3>
            Cart 
        </h3>
        <div className='cartWrapper'>
            {
             products.map(product=>{ return <>
               <div>
                <img src={product.image} alt="" />
               </div>
               <h5>{product.price}</h5>
               <button onClick={()=> handleRemove(product.id)}>Remove</button>
             </>})
            }
        </div>
    </div>
  )
}

export default Cart