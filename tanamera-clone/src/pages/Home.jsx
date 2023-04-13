// import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import Card from "../components/Card";

export default function Home() {


    return (
        <>
            <Carousel />
            {/* {Products.map(el => {
                return <Card product={el} />
            })} */}
            <Card />
        </>
    )
}