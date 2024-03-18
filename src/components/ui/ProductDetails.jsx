import { useParams } from "react-router-dom";
import { Button, ButtonGroup } from "@nextui-org/react";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const ProductDetails = () => {
  const params = useParams();
  const axiosPublic = useAxiosPublic();
  const [singleProductDetails, setSingleProductDetails] = useState({});
  const [productQuantity, setProductQuantity] = useState(1);

  useEffect(() => {
    if (params?.id) {
      axiosPublic
        .get(`/get-single-product-details/${params?.id}`)
        .then(res => {
          console.log(res.data);
          setSingleProductDetails(res?.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [params.id, axiosPublic]);
  console.log(singleProductDetails);

  return (
    <div className="container max-w-7xl mx-auto px-5 ">
      {singleProductDetails?.title && (
        <>
          <div className="mt-2.5 space-y-2.5">
            <h3 className="text-2xl md:text-3xl font-bold truncate">
              {singleProductDetails.title}
            </h3>
            <p className=" space-x-2  ">
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
            <div className="max-w-[575px] pt-16 space-y-3 xsm:space-y-4 md:space-y-5">
              <ButtonGroup radius="none">
                <Button
                  onClick={() =>
                    productQuantity === 1
                      ? null
                      : setProductQuantity(productQuantity - 1)
                  }
                  className="bg-transparent border border-r-0 text-xl"
                >
                  -
                </Button>
                <Button className="bg-transparent border border-r-0 text-xl">
                  {productQuantity}
                </Button>
                <Button
                  onClick={() =>
                    productQuantity >=
                    singleProductDetails["available-quantity"]
                      ? null
                      : setProductQuantity(productQuantity + 1)
                  }
                  className="bg-transparent border text-xl"
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
          <div>
            <div className="my-10 p-5 md:p-8 lg:p-10 bg-[#F4F4F4]">
              <h4 className="text-xl md:text-2xl font-medium">Description</h4>
              <p className="text-base md:text-lg">
                {singleProductDetails?.description}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
