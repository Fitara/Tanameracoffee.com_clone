export default function Detail() {
    return (
        <>
            <div className="flex mx-auto h-[450px] ml-14 mr-14 mb-10">
                <img className="w-1/2" src="https://tanameracoffee.com/wp-content/uploads/2021/03/31092033-8b98-466e-bfe8-13be0fe6c27a.jpg" alt="" />
                <div className="w-1/2 overflow-y-scroll p-10 bg-purple-100">
                    <p className="font-semibold text-end">Add to wishlist</p>
                    <p className="text-sm font text-center uppercase mt-5">Beans</p>
                    <p className="text-2xl uppercase text-center tracking-wider mb-16">Solok Natural CM TT</p>
                    <p className="text-sm font-semibold uppercase mb-2">Tasting Note</p>
                    <p className="text-sm font-semibold uppercase mb-2">Product Description</p>
                    <p className="text-sm font-normal capitalize">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, provident. Eaque et itaque quis corporis ipsum officia ab cupiditate voluptate atque totam mollitia dolorum natus maxime, ipsa aut doloremque sunt!</p>
                </div>
            </div>
        </>
    )
}