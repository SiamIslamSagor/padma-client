const Footer = () => {
  return (
    <div>
      <div className="bg-primary-color text-white">
        <div className="container mx-auto py-20 flex  justify-center gap-2 lg:gap-8  flex-wrap px-5">
          <div className="space-y-5 flex-1 max-sm:min-w-[320px] max-w-[425px]">
            <h3 className="text-2xl sm:text-3xl text-white font-semibold">
              PADMA
            </h3>
            <p className="text-base sm:text-lg font-medium">
              PADMA Ecommerce is on powerful ecommerce solution for small
              business owner who want to sell product online.
            </p>
          </div>
          <div className="space-y-5 flex-1 max-sm:min-w-[320px] max-w-[425px]">
            <h3 className="text-2xl sm:text-3xl text-white font-semibold">
              COMPANY
            </h3>
            <div className="text-base sm:text-lg font-medium">
              <li>About us</li>
              <li>Contact us</li>
              <li>Return Policy</li>
            </div>
          </div>
          <div className="space-y-5 flex-1 max-sm:min-w-[320px] max-w-[425px]">
            <h3 className="text-2xl sm:text-3xl text-white font-semibold">
              CUSTOMER SERVICE
            </h3>
            <div className="text-base sm:text-lg font-medium">
              <li>My Whishlist</li>
              <li>Track My Order</li>
              <li>Payment Methods</li>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-5 py-8">
        <div>
          <p className="text-lg sm:text-xl font-medium text-center">
            &copy; Copyright {new Date().getFullYear()} PADMA Ecommerce. Made
            with 💖 by{" "}
            <a
              target="_blank"
              className="hover:underline"
              href={"https://bytebangladesh.com/"}
            >
              Byte
            </a>{" "}
            Bangladesh.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
