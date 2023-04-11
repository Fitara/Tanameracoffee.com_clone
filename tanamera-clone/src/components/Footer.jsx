export default function Footer() {
    return (
        <>
            <div className="font-sans font-extralight w-[960px] mt-10">
                <footer className="flex justify-between footer ml-14 mr-14 border-t-2 p-5">
                    <div className="flex gap-20">
                        <div className="flex flex-col">
                             <span className="footer-title text-black tracking-widest">Locations</span> 
                            <a className="link link-hover">Indonesia</a> 
                            <a className="link link-hover">Singapore</a>
                        </div> 
                        <div className="flex flex-col">
                            <span className="footer-title text-black tracking-widest">Company</span> 
                                <a className="link link-hover">About us</a> 
                                <a className="link link-hover">Career</a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-end">
                        <span className="footer-title flex text-black self-end tracking-widest">Newsletter</span> 
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xs uppercase tracking-widest font-semibold">Email address</span>
                                </label> 
                            <div className="flex flex-col">
                                <input type="text" placeholder="Email Adress" className="input input-bordered border-gray-500 w-[200px] h-[30px]" /> 
                                <button className="btn btn-sm text-white w-24 mt-5 bg-red-600">Subscribe</button>
                            </div>
                            <div className="flex mt-5 align-center gap-2 self-end">
                                <img className="w-[20px] h-[20px]" src="https://img.icons8.com/ios/256/instagram-new.png" alt="" />
                                <img className="w-[22px] h-[22px]" src="https://img.icons8.com/ios-filled/256/youtube-play.png" alt="" />
                            </div>
                        </div>
                    </div>
                </footer>
                <footer className="footer justify-between items-center ml-14 mr-14 mt-10 mb-10">
                    <div className="items-center grid-flow-col">
                        <img className="w-[60px] h-[60px]" src="https://www.studioskato.com/v2/wp-content/uploads/2020/07/tanamera-monogram.png.webp" alt="" /> 
                    </div> 
                    <div className="grid-flow-col flex flex-col text-black font-semibold p-0 self-end">
                        <p>INTERNATIONAL AWARD-WINNING COFFEE</p>
                        <p className="flex self-end">Copyright © 2023 - All right reserved</p>
                    </div>
                </footer>
            </div>
        </>
    )
}