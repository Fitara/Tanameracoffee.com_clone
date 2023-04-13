import { Link } from "react-router-dom";

export default function Card(props) {
    return (
        <>
            <section>
                <div>
                    <div className="grid grid-cols-3 grid-rows-2 gap-4 ml-14 mr-14 mt-14 text-center">
                    <Link to={"/detail"}>
                        <div>
                            <a className="card shadow">
                                <img src="https://tanameracoffee.com/wp-content/uploads/2021/03/TC_RasunaNaturalFilter250g_210226-1-600x600.jpg" alt="" />
                                <div className="bg-gray-100">
                                    <p className="text-base font-semibold tracking-wide mt-1">Rasuna Natural</p>
                                    <p className="font-sans uppercase text-xs text-black font-bold tracking-widest mb-2">From IDR 91 K</p>
                                </div>    
                            </a>    
                        </div>
                    </Link>
                    <div>
                        <a className="card shadow rounded-none">
                            <img src="https://tanameracoffee.com/wp-content/uploads/2021/03/31092033-8b98-466e-bfe8-13be0fe6c27a.jpg" alt="" />
                            <div className="bg-gray-100">
                                <p className="text-base font-semibold tracking-wide mt-1">Solok Natural CM TT</p>
                                <p className="font-sans uppercase text-xs text-black font-bold tracking-widest mb-2">From IDR 220 K</p>
                            </div>
                        </a>    
                    </div>
                    <div>
                        <a className="card shadow">
                            <img src="https://tanameracoffee.com/wp-content/uploads/2021/03/TC_MandailingWashedEspresso250g_210226.jpg" alt="" />
                            <div className="bg-gray-100">
                                <p className="text-base font-semibold tracking-wide mt-1">Mandailing Washed</p>
                                <p className="font-sans uppercase text-xs text-black font-bold tracking-widest mb-2">From IDR 220 K</p>
                            </div>
                        </a>    
                    </div>
                    <div>
                        <a className="card shadow">
                            <img src="https://tanameracoffee.com/wp-content/uploads/2021/03/TC_KintamaniWashedFilter250g_210226-copy-3.jpg" alt="" />
                            <div className="bg-gray-100">
                                <p className="text-base font-semibold tracking-wide mt-1">Bali Kintamani Washed</p>
                                <p className="font-sans uppercase text-xs text-black font-bold tracking-widest mb-2">From IDR 91 K</p>
                            </div>
                        </a>    
                    </div>
                    <div>
                        <a className="card shadow">
                            <img src="https://tanameracoffee.com/wp-content/uploads/2021/03/TC_MtBatukaruWashedFilter250g_210226-copy-1.jpg" alt="" />
                            <div className="bg-gray-100">
                                <p className="text-base font-semibold tracking-wide mt-1">Bali Kintamani Mt. Batukaru Washed</p>
                                <p className="font-sans uppercase text-xs text-black font-bold tracking-widest mb-2">From IDR 82 K</p>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a className="card shadow">
                            <img src="https://tanameracoffee.com/wp-content/uploads/2021/03/TC_MtBatukaruEspresso250kg_210226.jpg" alt="" />
                            <div className="bg-gray-100">
                                <p className="text-base font-semibold tracking-wide mt-1">Bali Kintamani Mt. Batukaru Natural</p>
                                <p className="font-sans uppercase text-xs text-black font-bold tracking-widest mb-2">From IDR 99 K</p>
                            </div>
                        </a>    
                    </div>
                    <div>
                        <a className="card shadow">
                            <img src="https://tanameracoffee.com/wp-content/uploads/2021/03/TC_SindoroHoneyFilter250g_210226-1.jpg" alt="" />
                            <div className="bg-gray-100">
                                <p className="text-base font-semibold tracking-wide mt-1">Sindoro Honey</p>
                                <p className="font-sans uppercase text-xs text-black font-bold tracking-widest mb-2">From IDR 99 K</p>
                            </div>
                        </a>    
                    </div>
                    <div>
                        <a className="card shadow">
                            <img src="https://tanameracoffee.com/wp-content/uploads/2021/03/TC_AcehGayoNaturalFilter250g_210226-copy-1.jpg" alt="" />
                            <div className="bg-gray-100">
                                <p className="text-base font-semibold tracking-wide mt-1">Aceh Gayo Natural</p>
                                <p className="font-sans uppercase text-xs text-black font-bold tracking-widest mb-2">From IDR 91 K</p>
                            </div>
                        </a>    
                    </div>
                    <div>
                        <a className="card shadow">
                            <img src="https://tanamera.logixone.cloud/wp-content/uploads/2021/03/TC_KerinciNaturalFilter250g_210226.jpg" alt="" />
                            <div className="bg-gray-100">
                                <p className="text-base font-semibold tracking-wide mt-1">Kerinci Natural</p>
                                <p className="font-sans uppercase text-xs text-black font-bold tracking-widest mb-2">From IDR 91 K</p>
                            </div>
                        </a>    
                    </div>    
                    </div>  
                </div>
                <div>
                    <div className="h-[350px] mt-10 ml-14 mr-14" style={{backgroundImage: "url('https://www.hyundai.com/content/dam/hyundai/id/id/images/local/myhyundai/partners/partner-tanamera.png')", backgroundRepeat: "no-repeat", backgroundSize: "100%"}}>
                        <p>TEST</p>
                    </div>
                </div>
                <div className="divide-x"></div>
            </section>
        </>
    )
}

// className="hover:scale-150