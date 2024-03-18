import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useState } from "react";
import { Button, Checkbox } from "@nextui-org/react";

const ProductCheckout = () => {
  const params = useParams();
  const axiosPublic = useAxiosPublic();
  const [singleProductDetails, setSingleProductDetails] = useState({});
  const productQuantity = params?.id.split("+qun")[1] / 1;
  console.log(singleProductDetails.title, productQuantity);
  useEffect(() => {
    if (params?.id) {
      axiosPublic
        .get(`/get-single-product-details/${params?.id.split("+qun")[0]}`)
        .then(res => {
          setSingleProductDetails(res?.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [params?.id, axiosPublic]);
  return (
    <div className="container max-w-[1175px] mx-auto max-xl:px-5 ">
      <div className="my-24 border-2">
        <div className=" m-2  rounded-[4px]">
          <div className="max-w-[575px] w-full border p-6">
            <form>
              <div className="max-xsm:space-y-2 max-sm:space-y-4 sm:space-y-6 duration-300">
                <h4 className="text-xl lg:text-2xl font-semibold">
                  Customer Information
                </h4>
                <div className="w-full flex flex-col">
                  <label className="label">
                    <span className="text-lg font-medium leading-3">
                      Your Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Md Rocky"
                    autoFocus
                    className="border mt-1 lg:mt-2 h-14 px-2 rounded-[4px] text-base lg:text-lg duration-300 w-full align-middle outline-transparent focus:ring-0 focus:outline-none active:ring-0 active:outline-none"
                  />
                </div>
                <div className="w-full flex flex-col">
                  <label className="label">
                    <span className="text-lg font-medium leading-3">
                      Your Address
                    </span>
                  </label>
                  <textarea
                    className="mt-1 lg:mt-2 py-3 px-4 block w-full border rounded-[4px] resize-none 
                    outline-transparent focus:ring-0 focus:outline-none active:ring-0 active:outline-none"
                    rows="3"
                    placeholder="This is a textarea placeholder"
                  ></textarea>
                </div>
                <div className="w-full flex flex-col">
                  {/*  <Select
                    radius="sm"
                    size="lg"
                    placeholder="Select an area"
                    defaultSelectedKeys={["Outside of Dhaka"]}
                    variant="bordered"
                    className="roundedlg"
                  >
                    <SelectItem
                      key={"Outside of Dhaka"}
                      value={"Outside of Dhaka"}
                    >
                      Outside of Dhaka
                    </SelectItem>
                    <SelectItem
                      key={"Inside of Dhaka"}
                      value={"Inside of Dhaka"}
                    >
                      Inside of Dhaka
                    </SelectItem>
                  </Select> */}
                  <select
                    defaultValue={"Outside of Dhaka"}
                    className="py-4 px-2 rounded-[4px] border w-full text-base lg:text-lg duration-300 align-middle outline-transparent focus:ring-0 focus:outline-none active:ring-0 active:outline-none"
                  >
                    <option value={"Outside of Dhaka"}>Outside of Dhaka</option>
                    <option value={"Inside of Dhaka"}>Inside of Dhaka</option>
                  </select>
                </div>
                <div className="w-full flex flex-col">
                  <label className="label">
                    <span className="text-lg font-medium leading-3">
                      Mobile Number
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="019245*****"
                    autoFocus
                    className="border mt-1 lg:mt-2 h-14 px-2 rounded-[4px] text-base lg:text-lg duration-300 w-full align-middle outline-transparent focus:ring-0 focus:outline-none active:ring-0 active:outline-none"
                  />
                </div>
                <div className="w-full flex flex-col">
                  <Checkbox
                    isRequired={true}
                    var
                    radius="none"
                    size="sm"
                    defaultSelected
                  >
                    I accept terms & conditions and return policy of PADMA
                    Ecommerce.
                  </Checkbox>
                </div>
                <div>
                  <Button className="w-full bg-primary-color text-white font-semibold rounded-[4px]">
                    Place Order
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCheckout;
