import { useDispatch } from "react-redux";
import { ITEMLIST_IMG } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items})=>{

    const dispatch = useDispatch()
    const handleItemClick = (item)=>{
        dispatch(addItem(item));

        //creates an object:
        // {
        //     payload:"Burger"
        // }
    }
    // console.log(items);

    return(
        <div>
            {
                items.map((item)=>(
                    <div key={item.card.info.id}>
                        <div className=" bg-gray-100 border-b-2 border-gray-200 p-4 text-left flex justify-between" >

                            <div className="py-2 w-10/12">
                                <span className="font-bold text-lg">{item.card.info.name} </span>
                                <span> - ₹{item.card.info.defaultPrice ? item.card.info.defaultPrice/100 : item.card.info.price/100}</span>
                                <p className=" text-xs">{item.card.info.description}</p>
                            </div>
                            <div className="mr-4 w-2/12">
                                {/* conditional rendering  */}
                                {item.card.info.imageId ?  (
                                <>
                                    <button onClick={()=>handleItemClick(item)} className=" bg-black text-white rounded-lg  w-16 text-center absolute ml-6 mt-16 shadow-md px-2 ">Add +</button> 
                                    <img className="rounded-lg shadow-lg" src={ ITEMLIST_IMG+item.card.info.imageId}/> 
                                </>
                                ) : 
                                <button  onClick={()=>handleItemClick(item)} className=" bg-black text-white rounded-lg  w-16 text-center absolute ml-6 mt-4 shadow-md px-2 ">Add +</button> 
                                }
                            </div>
                            
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default ItemList;