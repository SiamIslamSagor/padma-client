import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllCategoriesProducts = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: allCategoriesProducts = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["allCategoriesProducts"],
    queryFn: async () => {
      const res = await axiosPublic.get("/get-all-categories-product");
      return res.data;
    },
    staleTime: 1000 * 5,
  });

  return { allCategoriesProducts, isLoading, isError, refetch };
};

export default useAllCategoriesProducts;
