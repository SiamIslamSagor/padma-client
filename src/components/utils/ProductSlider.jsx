import PropTypes from "prop-types";
import { Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "@nextui-org/react";

const ProductSlider = ({ singleCategoryProducts }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  console.log(singleCategoryProducts);
  return (
    <div>
      <h3 className="text-lg my-2 lg:my-5 md:text-xl font-semibold lg:text-2xl">
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
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {singleCategoryProducts?.products?.map((product, idx) => (
          <SwiperSlide className="select-none " key={product.images[0] + idx}>
            <div>
              <div>
                <img
                  className="duration-300 select-none max-xsm:!h-[180px] max-sm:!h-[280px] sm:!h-[300px]"
                  //   src={product.images[0]}
                  src="https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=612x612&w=is&k=20&c=nsTKLa7PIT5yT1YiPIucW5bT7AUxwno1X0ePG-3r_vY="
                  alt={product.description}
                />
              </div>
              <div className="px-2">
                <h3 className="text-xl font-medium">
                  {product.title.split("").length > 20
                    ? product.title.slice(0, 20) + "..."
                    : product.title}
                </h3>
                {/* <h3 className="text-xl font-medium">{product.title}</h3> */}
                <h3>{product["regular-price"]}</h3>
                <Button>By Now</Button>
              </div>
            </div>
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
