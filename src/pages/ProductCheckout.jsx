import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useState } from "react";
import { Button, Checkbox } from "@nextui-org/react";
import { useForm } from "react-hook-form";

const ProductCheckout = () => {
  const params = useParams();
  const axiosPublic = useAxiosPublic();
  const [singleProductDetails, setSingleProductDetails] = useState({});
  const productQuantity = params?.id.split("+qun")[1] / 1;
  // console.log(singleProductDetails.title, productQuantity);

  // load product
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = data => {
    const { name, address, area, number } = data;
    let userAddress = address.replace(/\n/g, "");
    let submittedData = {
      userName: name,
      userAddress,
      locationArea: area,
      PhoneNumber: number,
    };
    console.log(submittedData);
  };

  return (
    <div className="container max-w-[1175px] mx-auto max-xl:px-5 ">
      <div className="my-24 max-lg:space-y-10 lg:flex justify-between ">
        <div className="my-2 rounded-[4px]">
          <div className="max-w-[575px] mx-auto w-full md:border md:p-6">
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    autoFocus={true}
                    {...register("name", {
                      required: "Name is required *",
                    })}
                    aria-invalid={errors.name ? "true" : "false"}
                    className="border border-[#9B9B9B] focus:ring-1 focus:ring-primary-color mt-1 lg:mt-2 h-14 px-2 rounded-[4px] text-base lg:text-lg duration-300 w-full align-middle outline-transparent  focus:outline-none active:ring-0 active:outline-none"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.name?.message}
                    </p>
                  )}
                </div>
                <div className="w-full flex flex-col">
                  <label className="label">
                    <span className="text-lg font-medium leading-3">
                      Your Address
                    </span>
                  </label>
                  <textarea
                    className="mt-1 lg:mt-2 py-3 px-4 block w-full border border-[#9B9B9B] rounded-[4px] resize-none 
                    outline-transparent focus:ring-0 focus:outline-none active:ring-0 active:outline-none"
                    rows="3"
                    {...register("address", {
                      required: "Address is required *",
                    })}
                    aria-invalid={errors.address ? "true" : "false"}
                    placeholder="This is a textarea placeholder"
                  ></textarea>
                  {errors.address && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.address?.message}
                    </p>
                  )}
                </div>
                <div className="w-full flex flex-col">
                  <select
                    {...register("area", {
                      required: "Area is required *",
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                    defaultValue={"Outside of Dhaka"}
                    className="py-4 px-2 rounded-[4px] border border-[#9B9B9B] w-full text-base lg:text-lg duration-300 align-middle outline-transparent focus:ring-0 focus:outline-none active:ring-0 active:outline-none"
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
                    type="number"
                    placeholder="019245*****"
                    {...register("number", {
                      required: true,
                      minLength: 11,
                      maxLength: 11,
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                    className="border border-[#9B9B9B] focus:ring-1 focus:ring-primary-color mt-1 lg:mt-2 h-14 px-2 rounded-[4px] text-base lg:text-lg duration-300 w-full align-middle outline-transparent focus:outline-none active:ring-0 active:outline-none"
                  />
                  {errors.number?.type === "required" && (
                    <p className="text-sm text-red-600 mt-1">
                      Phone Number is required *
                    </p>
                  )}
                  {errors.number?.type === "minLength" && (
                    <p className="text-sm text-red-600 mt-1">
                      Phone Number must be 11 characters *
                    </p>
                  )}
                  {errors.number?.type === "maxLength" && (
                    <p className="text-sm text-red-600 mt-1">
                      Phone Number must be 11 characters *
                    </p>
                  )}
                </div>
                <div className="w-full flex flex-col">
                  <Checkbox isRequired={true} radius="none" size="sm">
                    I accept terms & conditions and return policy of PADMA
                    Ecommerce.
                  </Checkbox>
                </div>
                <div>
                  <Button
                    type="submit"
                    className="w-full bg-primary-color text-white font-semibold rounded-[4px]"
                  >
                    Place Order
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="my-2 rounded-[4px]">
          <div className="max-w-[575px] mx-auto w-full md:border md:p-6">
            <div className="max-xsm:space-y-2 max-sm:space-y-4 sm:space-y-6 lg:space-y-12 duration-300 pb-10">
              <h4 className="text-xl lg:text-2xl font-semibold">
                Order Overview
              </h4>
              <div className="flex flex-col border">
                <div className="-m-1.5 overflow-x-auto">
                  <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                      <table className="w-full ">
                        <thead className="w-full">
                          <tr className="w-full">
                            <th
                              scope="col"
                              className="px-2 md:px-4 py-6 text-start bg-[#F2F4F8] text-lg lg:text-xl duration-300 font-medium border w-[40%] border-t-0 border-l-0"
                            >
                              Product Name
                            </th>
                            <th
                              scope="col"
                              className="px-2 md:px-4 py-6 text-center bg-[#F2F4F8] text-lg lg:text-xl duration-300 font-medium border  border-t-0"
                            >
                              Quantity
                            </th>
                            <th
                              scope="col"
                              className="px-2 md:px-4 py-6 text-center bg-[#F2F4F8] text-lg lg:text-xl duration-300 font-medium border  border-t-0 border-r-0"
                            >
                              Price
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                          <tr className="w-full">
                            <td className="px-2 md:px-4 py-4 whitespace-nowrap text-base lg:text-lg duration-300 font-medium text-gray-800 dark:text-gray-200 text-wrap">
                              Havit H2010d-Pro RGB Gaming Headphone{" "}
                            </td>
                            <td className="px-2 md:px-4 py-4 whitespace-nowrap text-base lg:text-lg duration-300 text-gray-800 dark:text-gray-200 border-x-1 text-center">
                              1
                            </td>
                            <td className="px-2 md:px-4 text-center py-4 whitespace-nowrap text-base lg:text-lg duration-300 text-gray-800 dark:text-gray-200">
                              TK 1790
                            </td>
                          </tr>

                          <tr className="w-full">
                            <td className="px-2 md:px-4 py-4 whitespace-nowrap text-base lg:text-lg duration-300 font-medium text-gray-800 dark:text-gray-200 border-r-1">
                              Sub-Total
                            </td>
                            <td className="px-2 md:px-4 py-4 whitespace-nowrap text-base lg:text-lg duration-300 text-gray-800 dark:text-gray-200"></td>
                            <td className="px-2 md:px-4 text-center py-4 whitespace-nowrap text-base lg:text-lg duration-300 text-gray-800 dark:text-gray-200">
                              TK 1790
                            </td>
                          </tr>

                          <tr className="w-full">
                            <td className="px-2 md:px-4 py-4 whitespace-nowrap text-base lg:text-lg duration-300 font-medium text-gray-800 dark:text-gray-200 border-r-1">
                              Delivery Cost
                            </td>
                            <td className="px-2 md:px-4 py-4 whitespace-nowrap text-base lg:text-lg duration-300 text-gray-800 dark:text-gray-200"></td>
                            <td className="px-2 md:px-4 text-center py-4 whitespace-nowrap text-base lg:text-lg duration-300 text-gray-800 dark:text-gray-200">
                              TK 120
                            </td>
                          </tr>
                          <tr className="w-full">
                            <td className="px-2 md:px-4 py-4 whitespace-nowrap text-base lg:text-lg duration-300 font-medium text-gray-800 dark:text-gray-200 border-r-1">
                              Total
                            </td>
                            <td className="px-2 md:px-4 py-4 whitespace-nowrap text-base lg:text-lg duration-300 text-gray-800 dark:text-gray-200"></td>
                            <td className="px-2 md:px-4 text-center py-4 whitespace-nowrap text-base lg:text-lg duration-300 text-gray-800 dark:text-gray-200">
                              TK 1910
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCheckout;
