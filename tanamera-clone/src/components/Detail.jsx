export default function Detail() {
    return (
        <>
            <p style={{ fontFamily: 'Abolition Test' }} className="ml-14 font-medium text-3xl mb-5 tracking-widest">Beans</p>
            <div className="flex mx-auto h-[450px] ml-14 mr-14 mb-10">
                <img className="w-1/2" src="https://tanameracoffee.com/wp-content/uploads/2021/03/31092033-8b98-466e-bfe8-13be0fe6c27a.jpg" alt="" />
                <div className="w-1/2 overflow-y-scroll p-10 bg-purple-100">
                    <p className="flex justify-end">
                        <img className="w-[24px] h-[24px] mr-1" src="https://img.icons8.com/windows/256/hearts.png" alt="" /><p className="font-semibold"> Add to wishlist</p>
                    </p>
                    <p className="text-sm font-serif font-bold text-center uppercase mt-10">Beans</p>
                    <p style={{ fontFamily: 'Abolition Test', }} className="text-4xl font-normal uppercase text-center tracking-wider mb-16">Solok Natural CM TT</p>
                    <div>
                        <p style={{ fontFamily: 'AktivBold' }} className="text-sm font-semibold uppercase tracking-widest mb-2">Process</p>
                        <p style={{ fontFamily: 'Abolition Test' }} className="text-lg font-mono text-justify font-thin uppercase mb-7 tracking-wider">Natural</p>
                    </div>
                    <div>
                        <p style={{ fontFamily: 'AktivBold' }} className="text-sm font-semibold uppercase tracking-widest mb-2">Tasting Note</p>
                        <p style={{ fontFamily: 'Abolition Test' }} className="text-lg font-mono text-justify font-thin uppercase mb-7 tracking-wider">APPLE JUICE, TAMARIND, ALMOND CHOCO BALL, SILKY BODY AND SMOOTH ACIDITY</p>
                    </div>
                    <div>
                        <p style={{ fontFamily: 'AktivBold' }} className="text-sm font-serif font-semibold uppercase tracking-widest mb-2">Product Description</p>
                        <p style={{ fontFamily: 'Futura' }} className="font-sans text-justify font-xs capitalize">Lubuk Gadang, Solok Selatan (Sumatera Barat) memiliki tanah dan dataran yang subur dan tinggi yang tepat untuk menanam biji kopi berkualitas tinggi, pada ketinggian 1500 - 1600 MSL. Kopi Solok dari Solok Selatan bisa juga disebut sebagai Kopi Solok Minang. Menariknya, kopi tersebut diproduksi secara organik dengan menggunakan pupuk alami tanpa pestisida yang menghasilkan kualitas lebih tinggi.
Varian kopi Solok memberikan tingkat keasaman dan manis yang tinggi, high body dan juga menghasilkan aroma rasa jus apel, asam jawa dan choco almond.</p>
                    </div>
                    <div className="flex align-baseline justify-start mt-10">
                        <p style={{ fontFamily: 'Futura' }} className="">Posted by : Admin</p>
                    </div>
                </div>
            </div>
        </>
    )
}