import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { fetchProducts } from "../../stores/actions/actionCreator";

export default function Card({product}) {
    return (
        <>
            <section>
                    <Link to={`/detail/${product.id}`}>
                {/* <div className="grid grid-cols-3 grid-rows-2 gap-4 ml-14 mr-14 text-center"> */}
                            <div>  
                            <a className="card shadow w-[400px]">
                                <img src={product.mainImg} alt="" />
                                <div className="bg-gray-100">
                                    <p className="text-base font-semibold tracking-wide mt-1">{ product.name }</p>
                                    <p className="font-sans uppercase text-xs text-black font-bold tracking-widest mb-2">From IDR {product.price}</p>
                                </div>    
                            </a>    
                        </div>
                {/* </div>  */}
                    </Link>   
            </section>
        </>
    )
}

// className="hover:scale-150