import { useDispatch, useSelector } from "react-redux"
// import { fetchProducts } from "../../stores/actions/actionCreator";
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
            {products?.map(el => {
                return <Card product={el} />
            })}
            {/* <Card /> */}
        </>
    )
}