import { useParams } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const ProductDetails = () => {
  const params = useParams();
  const axiosPublic = useAxiosPublic();
  const [singleProductDetails, setSingleProductDetails] = useState({});

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
    <div className=" ">
      <div className="mt-2.5 space-y-2.5 border-4">
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
        <Button
          radius="none"
          className="w-full bg-primary-color text-white font-semibold"
        >
          By Now
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
