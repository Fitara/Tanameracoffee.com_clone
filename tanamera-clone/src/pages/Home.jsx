import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../../stores/actions/actionCreator";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import { useEffect } from "react";

export default function Home() {
    const products = useSelector((state) => {
        return state.productReducer.products
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <>  
            <Carousel />
            <div className="container">
                <div className="grid grid-cols-3 grid-rows-2 gap-4 ml-14 mr-14 text-center"></div>
                    <div className="">
                    {products?.map(el => {
                        return <Card className="flex" product={el} />
                    })}
                    </div>
                <div>
                </div>
                <div className="h-[500px] mt-10 ml-14 mr-14" style={{backgroundImage: "url('https://www.hyundai.com/content/dam/hyundai/id/id/images/local/myhyundai/partners/partner-tanamera.png')", backgroundRepeat: "no-repeat", backgroundSize: "100%"}}></div>
                </div>
                <div className="divide-x"></div>
        </>
    )
}