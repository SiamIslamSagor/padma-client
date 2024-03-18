import { useParams } from "react-router-dom";
import { Button, ButtonGroup } from "@nextui-org/react";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const ProductDetails = () => {
  const params = useParams();
  const axiosPublic = useAxiosPublic();
  const [singleProductDetails, setSingleProductDetails] = useState({});
  const [productImg, setProductImg] = useState("");
  const [productQuantity, setProductQuantity] = useState(1);

  useEffect(() => {
    if (params?.id) {
      axiosPublic
        .get(`/get-single-product-details/${params?.id}`)
        .then(res => {
          setSingleProductDetails(res?.data);
          setProductImg(res?.data.images[0]);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [params.id, axiosPublic]);

  return (
    <div className="container max-w-[1175px] mx-auto max-xl:px-5 ">
      {singleProductDetails?.title && (
        <div>
          <div className="my-10 xsm:space-y-28 sm:space-y-28 md:space-y-36 lg:space-y-0 lg:flex justify-between items-center gap-6">
            <div className=" ">
              <div className="max-w-[575px] max-h-[550px] max-lg:mx-auto">
                <div>
                  <img
                    className="w-full max-xsm:max-h-96 xsm:max-h-[520px] object-cover border duration-300"
                    src={productImg}
                    alt=""
                  />
                </div>
                <div className="flex gap-2 my-5 max-lg:justify-center">
                  {singleProductDetails?.images.map((img, idx) => (
                    <img
                      className={`size-16 xsm:size-20 md:size-24 lg:size-32 duration-300 object-cover border cursor-pointer`}
                      onClick={() => {
                        setProductImg(img);
                        console.log("image changed");
                      }}
                      key={img + idx}
                      src={img}
                      alt={singleProductDetails?.description}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className=" lg:pb-10">
              <div className="mt-2.5 space-y-2.5 max-lg:text-center">
                <h3 className="text-2xl md:text-3xl font-bold truncate">
                  {singleProductDetails.title}
                </h3>
                <p className=" space-x-2 ">
                  {singleProductDetails["discount-price"] && (
                    <span className="text-primary-color  text-2xl md:text-3xl  font-semibold">
                      TK {singleProductDetails["discount-price"]}
                    </span>
                  )}
                  {singleProductDetails["regular-price"] && (
                    <span
                      className={`font-semibold text-xl md:text-2xl ${
                        singleProductDetails["discount-price"] &&
                        "line-through text-gray-500"
                      }`}
                    >
                      TK {singleProductDetails["regular-price"]}
                    </span>
                  )}
                </p>
                <p className="text-lg  font-medium">
                  Available Products :{" "}
                  {singleProductDetails["availableQuantity"]}
                </p>
                <div className="max-lg:mx-auto max-w-[575px] lg:pt-28 space-y-3 xsm:space-y-4 md:space-y-5">
                  <ButtonGroup radius="none">
                    <Button
                      onClick={() =>
                        productQuantity === 1
                          ? null
                          : setProductQuantity(productQuantity - 1)
                      }
                      className="bg-transparent border border-r-0 text-xl font-semibold"
                    >
                      -
                    </Button>
                    <Button className="bg-transparent border border-r-0 text-xl font-semibold">
                      {productQuantity}
                    </Button>
                    <Button
                      onClick={() =>
                        productQuantity >=
                        singleProductDetails["availableQuantity"]
                          ? null
                          : setProductQuantity(productQuantity + 1)
                      }
                      className="bg-transparent border text-xl font-semibold"
                    >
                      +
                    </Button>
                  </ButtonGroup>
                  <Button
                    radius="none"
                    className="py-6 md:py-8 w-full bg-primary-color text-xl md:text-2xl  text-white font-semibold"
                  >
                    By Now
                  </Button>
                  <Button
                    radius="none"
                    className="py-6 md:py-8 w-full bg-secondary-color text-xl md:text-2xl   font-semibold"
                  >
                    Call us{" "}
                    <span className="text-white text-2xl md:text-3xl  ">
                      01703697093
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="max-lg:my-10 lg:my-40 p-5 md:p-8 lg:p-10 bg-[#F4F4F4]">
              <h4 className="text-xl md:text-2xl font-medium">Description</h4>
              <p className="text-base md:text-lg">
                {singleProductDetails?.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
