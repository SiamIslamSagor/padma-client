import useAllCategoriesProduct from "../../hooks/useAllCategoriesProduct";
import ProductSlider from "../utils/ProductSlider";

const ProductSection = () => {
  const { allCategoriesProducts } = useAllCategoriesProduct();
  console.log(allCategoriesProducts);
  return (
    <div className="">
      <h4 className="text-xl mt-2 lg:mt-5 md:text-2xl font-semibold lg:text-3xl capitalize">
        Recommended for you
      </h4>
      <div>
        {allCategoriesProducts?.map((singleCategoryProducts, idx) => (
          <ProductSlider
            key={singleCategoryProducts.category + idx}
            singleCategoryProducts={singleCategoryProducts}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
