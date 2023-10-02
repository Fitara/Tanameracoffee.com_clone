import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/actionCreator";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import { useEffect } from "react";

export default function Home() {
  const products = useSelector((state) => {
    return state.productReducer.products;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <section>
        <Carousel />
          <div className="container mx-auto">
            <div className="flex justify-center">
              <div className="grid grid-cols-3 grid-rows-2 mx-auto gap-5 text-center">
                  {products?.map((el) => {
                    return <Card key={el.id} product={el} />;
                  })}
              </div>
            </div>
              <div
                className="h-[500px] mt-10 ml-14 mr-14"
                style={{
                  backgroundImage:
                    "url('https://www.hyundai.com/content/dam/hyundai/id/id/images/local/myhyundai/partners/partner-tanamera.png')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100%",
                }}
              ></div>
            </div>
          <div className="divide-x"></div>
      </section>
    </>
  );
}
