import { Button, Checkbox } from "@nextui-org/react";
import { cn } from "../../utils/cn";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const AuthPage = () => {
  const { page } = useParams();
  const [isSignInOrSignUpPage, setIsSignInOrSignUpPage] = useState(page);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };
  return (
    <div className="min-h-screen flex mt-20 justify-center">
      <div className="max-w-xl h-min w-full shadow-2xl max-sm:mx-5">
        <div className=" w-full flex">
          <Button
            onClick={() => setIsSignInOrSignUpPage("sign-in")}
            className={cn(
              "bg-white text-base tracking-widest uppercase rounded-none w-full py-8 font-medium",
              isSignInOrSignUpPage === "sign-in"
                ? "shadow-[0px_4px_0px_0px_#0A6EBD] bg-primary-color text-white"
                : "shadow-[0px_4px_0px_0px_#E1E1E1]"
            )}
          >
            SIGN IN
          </Button>
          <Button
            onClick={() => setIsSignInOrSignUpPage("sign-up")}
            className={cn(
              "bg-white text-base tracking-widest uppercase rounded-none w-full py-8 font-medium",
              isSignInOrSignUpPage === "sign-up"
                ? "shadow-[0px_4px_0px_0px_#0A6EBD] bg-primary-color text-white"
                : "shadow-[0px_4px_0px_0px_#E1E1E1]"
            )}
          >
            SIGN UP
          </Button>
        </div>
        <div>
          <div className="px-5 py-10 xsm:p-8 sm:p-16 border border-t-0">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="max-xsm:space-y-2 max-sm:space-y-4 sm:space-y-6 duration-300">
                <div className="w-full flex flex-col">
                  <label className="label">
                    <span className="text-base font-medium leading-3">
                      Your email address *
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="type your email here..."
                    autoFocus={true}
                    {...register("name", {
                      required: "Name is required *",
                    })}
                    aria-invalid={errors.name ? "true" : "false"}
                    className="border focus:ring-1 focus:ring-primary-color mt-2 h-14 px-2 text-base lg:text-base duration-300 w-full align-middle outline-transparent  focus:outline-none active:ring-0 active:outline-none"
                  />
                </div>

                <div className="w-full flex flex-col">
                  <label className="label">
                    <span className="text-base font-medium leading-3">
                      Password *
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="type your password here..."
                    {...register("number", {
                      required: true,
                      minLength: 11,
                      maxLength: 11,
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                    className="border focus:ring-1 focus:ring-primary-color mt-2 h-14 px-2 text-base lg:text-base duration-300 w-full align-middle outline-transparent focus:outline-none active:ring-0 active:outline-none"
                  />
                </div>
                <div className="w-full flex justify-between">
                  <Checkbox isRequired={true} radius="none" size="sm">
                    Remember me
                  </Checkbox>
                  <Link className="text-red-500 hover:underline" to={"/"}>
                    Forgot password?
                  </Link>
                </div>
                <div className="pt-2 max-w-56 mx-auto ">
                  <Button
                    type="submit"
                    className="bg-primary-color text-white text-base tracking-widest uppercase rounded-none w-full py-8 font-medium"
                  >
                    sign in
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

export default AuthPage;
