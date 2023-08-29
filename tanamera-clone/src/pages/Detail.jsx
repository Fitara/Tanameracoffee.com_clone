import { useDispatch, useSelector } from "react-redux";
import { detail } from "../redux/actions/actionCreator";
import { useParams } from "react-router-dom"
import { useEffect } from "react";

export default function Detail() {
    const product = useSelector((state) => {
        return state.productReducer.product
    })

    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(detail(id))
    }, [])

    useEffect(() => {
        
    }, [product])

    return (
        <>
            <p style={{ fontFamily: 'Abolition Test' }} className="ml-14 font-medium text-3xl mb-5 tracking-widest">Beans</p>
            <div className="flex mx-auto h-[600px] ml-14 mr-14 mb-10">
                <div className="w-1/2 carousel">
                    <div id="slide1" className="carousel-item relative w-full" style={{ paddingBottom: 100 }}>
                        <div className="absolute inset-0 right-0 left-0 top-0 bottom-0 transition-opacity duration-300 ease-in-out hover:opacity-50">
                            <img src="https://tanameracoffee.com/wp-content/uploads/2021/03/31092033-8b98-466e-bfe8-13be0fe6c27a.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="text-black">❮</a> 
                                <a href="#slide2" className="text-black">❯</a>
                            </div>
                        </div>
                        <div className="absolute right-0 left-0 top-0 bottom-0 hover:opacity-1">
                            <img src="https://tanameracoffee.com/wp-content/uploads/2021/03/31092033-8b98-466e-bfe8-13be0fe6c27a.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="text-black">❮</a> 
                                <a href="#slide2" className="text-black">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://tanameracoffee.com/wp-content/uploads/2021/03/Rasuna-Natural.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="text-black">❮</a> 
                            <a href="#slide3" className="text-black">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://tanameracoffee.com/wp-content/uploads/2021/03/Category-Banner-Beans-scaled.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="text-black">❮</a> 
                            <a href="#slide1" className="text-black">❯</a>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 overflow-y-scroll p-10 bg-purple-100">
                    <p className="flex justify-end">
                        <img className="w-[24px] h-[24px] mr-1" src="https://img.icons8.com/windows/256/hearts.png" alt="" /><p className="font-semibold"> Add to wishlist</p>
                    </p>
                    <p className="text-sm font-serif font-bold text-center uppercase mt-10">Beans</p>
                    <p style={{ fontFamily: 'Abolition Test', }} className="text-4xl font-normal uppercase text-center tracking-wider mb-16">{ product?.name }</p>
                    <div>
                        <p style={{ fontFamily: 'AktivBold' }} className="text-sm font-semibold uppercase tracking-widest mb-2">Process</p>
                        <p style={{ fontFamily: 'Abolition Test' }} className="text-lg font-mono text-justify font-thin uppercase mb-7 tracking-wider">{ product?.Category?.name}</p>
                    </div>
                    <div>
                        <p style={{ fontFamily: 'AktivBold' }} className="text-sm font-semibold uppercase tracking-widest mb-2">Tasting Note</p>
                        <p style={{ fontFamily: 'Abolition Test' }} className="text-lg font-mono text-justify font-thin uppercase mb-7 tracking-wider">APPLE JUICE, TAMARIND, ALMOND CHOCO BALL, SILKY BODY AND SMOOTH ACIDITY</p>
                    </div>
                    <div>
                        <p style={{ fontFamily: 'AktivBold' }} className="text-sm font-serif font-semibold uppercase tracking-widest mb-2">Product Description</p>
                        <p style={{ fontFamily: 'Futura' }} className="font-sans text-justify font-xs capitalize">{ product?.description }</p>
                    </div>
                    <div className="flex align-baseline justify-start mt-10">
                        <p style={{ fontFamily: 'Futura' }} className="">Posted by : { product?.User?.username }</p>
                    </div>
                </div>
            </div>
        </>
    )
}