export default function Carousel() {
    return (
        <div className="carousel mt-2 mb-10 w-[1240px] h-[600px] mx-auto">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://tanameracoffee.com/wp-content/uploads/2023/02/Banner-Website-Manakala-scaled.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="text-black">❮</a> 
                    <a href="#slide2" className="text-black">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://tanameracoffee.com/wp-content/uploads/2021/12/TC_BANNER_WEBSITE_CONCENTRATE-SACHETS-scaled.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="text-black">❮</a> 
                    <a href="#slide3" className="text-black">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://tanameracoffee.com/wp-content/uploads/2023/02/Banner-Website-Biodegradable-scaled.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="text-black">❮</a> 
                    <a href="#slide4" className="text-black">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://tanameracoffee.com/wp-content/uploads/2021/03/TC_Fellow-IDWeb-04.png" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="text-black">❮</a> 
                <a href="#slide1" className="text-black">❯</a>
            </div>
            </div>
        </div>
    )
}