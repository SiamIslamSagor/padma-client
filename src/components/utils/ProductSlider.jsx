import PropTypes from "prop-types";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "@nextui-org/react";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

const ProductSlider = ({ singleCategoryProducts }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  const [slidesItem, setSlidesItem] = useState(2);
  const handleResize = useCallback(() => {
    const width = window.innerWidth;

    if (width >= 1024) {
      setSlidesItem(4);
    } else if (width >= 768) {
      setSlidesItem(3);
    } else if (width < 768) {
      setSlidesItem(2);
    }
  }, []);

  // side effect
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);
  return (
    <div>
      <h3 className="text-lg mt-3 lg:mt-5 md:text-xl font-semibold lg:text-2xl">
        {singleCategoryProducts?.category}
      </h3>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
        }}
        navigation={true}
        // pagination={pagination}
        slidesPerGroup={slidesItem}
        modules={[Pagination, Navigation]}
        className="mySwiper my-5"
        key={singleCategoryProducts?.category + 5}
      >
        {singleCategoryProducts?.products?.map((product, idx) => (
          <SwiperSlide
            className="select-none border "
            key={product.images[0] + idx}
          >
            <Link
              to={`/product-details/${
                product["product-id"] ? product["product-id"] : "unknown-id"
              }`}
            >
              {/* <Link to={`/product-details/${product?.title}`}> */}
              <div className="cursor-pointer active:scale-95 duration-500">
                <div>
                  <img
                    loading="lazy"
                    className="duration-300 shadow-sm select-none max-xsm:!h-[180px] max-sm:!h-[280px] sm:!h-[300px]"
                    src={product.images[0]}
                    alt={product.description}
                  />
                </div>
                <div className="mt-2.5 space-y-2.5">
                  <h3 className="text-base sm:text-lg md:text-xl font-medium px-2 truncate">
                    {product.title}
                  </h3>
                  <p className="px-2 space-x-2 max-sm:text-sm">
                    {product["discount-price"] && (
                      <span className="text-primary-color font-semibold">
                        TK {product["discount-price"]}
                      </span>
                    )}
                    {product["regular-price"] && (
                      <span
                        className={`font-semibold ${
                          product["discount-price"] &&
                          "scale-50 line-through text-gray-500"
                        }`}
                      >
                        TK {product["regular-price"]}
                      </span>
                    )}
                  </p>
                  <Button
                    radius="none"
                    startContent={<MdAdd className="font-bold text-xl " />}
                    className="w-full bg-primary-color text-white font-semibold"
                  >
                    <span className=" -ml-1.5">By Now</span>
                  </Button>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

ProductSlider.propTypes = {
  singleCategoryProducts: PropTypes.object,
};

export default ProductSlider;
