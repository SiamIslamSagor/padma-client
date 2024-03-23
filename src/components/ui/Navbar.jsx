import Logo from "../utils/Logo";
import { LuSearch } from "react-icons/lu";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { cn } from "../../utils/cn";
import { Badge, Button } from "@nextui-org/react";

const Navbar = () => {
  return (
    <>
      <div className="z-[100] bg-primary-color min-h-10 fixed  w-full">
        <div className="container max-w-[1175px] mx-auto flex justify-between items-center max-xl:px-5 py-5 ">
          <div className=" mr-5 ">
            <Logo />
          </div>
          <div className="max-w-[600px] w-full mx-auto flex max-sm:hidden">
            <input
              placeholder="Search here..."
              className={cn("w-full p-2 z-[5] text-xl  focus:outline-none")}
            />
            <Button
              size="lg"
              className="rounded-none bg-[#245289] text-white text-2xl md:min-w-[140px] duration-300"
            >
              <LuSearch />
            </Button>
          </div>
          <div
            className={cn(
              "min-w-48 max-lg:hidden mx-auto flex  divide-x-1 text-white font-semibold text-base"
            )}
          >
            <div className="px-2 flex items-center justify-center ">
              <FaUser className="mx-2" /> Sign In
            </div>
            <div className="px-2 flex items-center justify-center">
              <p>Register</p>
            </div>
          </div>
          <div
            className={cn(
              "flex gap-2 sm:gap-3 lg:gap-5   justify-end  duration-700 max-lg:ml-10"
            )}
          >
            <div className="active:scale-95 bg-white rounded-[50%] p-2 sm:p-3 duration-100 cursor-pointer hover:text-primary-color">
              <FaHeart className="text-xl lg:text-xl  duration-100 " />
            </div>
            <Badge
              content="0"
              placement="top-left"
              shape="circle"
              className="bg-secondary-color border-none font-medium text-white"
            >
              <div className="active:scale-95 bg-white rounded-[50%] p-2 sm:p-3 duration-100 cursor-pointer hover:text-primary-color">
                <FaShoppingCart className="text-xl  lg:text-xl duration-100 " />
              </div>
            </Badge>
          </div>
        </div>
      </div>
      <div className="bg-transparent h-[84px] lg:h-[96px]"></div>

      <div className="sm:hidden container max-w-[1175px] mx-auto flex justify-between items-center max-xl:px-5 py-4 -mt-2 bg-blue-100 fixed z-50">
        <div className="max-w-[600px] w-full mx-auto flex">
          <input
            placeholder="Search here..."
            className={cn("w-full p-2 z-[5] text-xl  focus:outline-none")}
          />
          <Button
            size="lg"
            className="rounded-none bg-[#245289] text-white text-2xl md:min-w-[175px]"
          >
            <LuSearch />
          </Button>
        </div>
      </div>
      <div className="sm:hidden bg-transparent h-[70px]  border"></div>
    </>
  );
};

export default Navbar;
