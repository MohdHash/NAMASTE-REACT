import { useDispatch, useSelector } from "react-redux"
import { ITEMLIST_IMG } from "../utils/constants";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = ()=>{
    //Subscribing to the store (Reading the cart items)
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }
    
    const handleRemove =(item)=>{
        
        dispatch(removeItem(item));
        
    }

    console.log(cartItems);

    return(
        <div className="">
            <div className=" mx-auto mr-[300px] bg-gray-300 rounded-lg w-16 ">
                <button onClick={handleClearCart}>Clear Cart</button>
            </div>
            <div className=" p-4 mx-auto  w-8/12 shadow-xl shadow-slate-100">
                {
                    cartItems.map((item)=>(
                        <div key={item.card.info.id}>
                            <div className=" bg-gray-100 border-b-2 border-gray-200 p-4 text-left flex justify-between" >

                                <div className="py-2 w-10/12">
                                    <span className="font-bold text-lg">{item.card.info.name} </span>
                                    <span> - ₹{item.card.info.defaultPrice ? item.card.info.defaultPrice/100 : item.card.info.price/100}</span>
                                    <p className=" text-xs">{item.card.info.description}</p>
                                </div>
                                <div className="mr-4 w-2/12">
                                    <button onClick={()=>handleRemove(item.card.info.id)} className="bg-black text-white rounded-lg  w-24 text-center absolute ml-8 mt-32  shadow-md px-2 ">Remove</button>
                                    <img className="rounded-lg shadow-lg" src={ ITEMLIST_IMG+item.card.info.imageId}/> 
                                </div>
                                
                            </div>
                        </div>
                    ))
                }
            </div>
           
        </div>
    )
}


export default Cart;