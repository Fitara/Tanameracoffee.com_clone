import { Link } from "react-router-dom";

export default function Card({ product }) {
  return (
    <>
        <Link to={`/detail/${product.id}`}>
            <div>
              <div className="card shadow w-[375px]">
                <img src={product.mainImg} alt="" />
                <div className="bg-gray-100">
                  <p className="text-base font-semibold tracking-wide mt-1">
                    {product.name}
                  </p>
                  <p className="font-sans uppercase text-xs text-black font-bold tracking-widest mb-2">
                  From IDR {product.price}
                  </p>
                </div>
              </div>
            </div>
        </Link>
    </>
  );
}
