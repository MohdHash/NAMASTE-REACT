import { ITEMLIST_IMG } from "../utils/constants";

const ItemList = ({items})=>{

    console.log(items);

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
                                <img className=" rounded-lg shadow-lg"  src={ITEMLIST_IMG+item.card.info.imageId}></img>
                            </div>
                            
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default ItemList;