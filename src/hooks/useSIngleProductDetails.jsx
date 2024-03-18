/* import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSingleProductDetails = productId => {
  const axiosPublic = useAxiosPublic();

  const {
    data: singleProductDetails = {},
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["singleProductDetails"],
    enabled: !!productId,
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/get-single-product-details/${productId && productId}`
      );
      return res?.data;
    },
    staleTime: 0,
  });

  return { singleProductDetails, isLoading, isError, refetch };
};

export default useSingleProductDetails;
 */
