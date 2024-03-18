"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginSchema, type LoginSchemaType } from "@/utils/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import axios from "axios";
import { type returnType } from "@/app/items/page";

export default function Login() {
  const [passwordType, setPasswordType] = useState<boolean>(true);
  const router = useRouter();
  const {
    handleSubmit,
    reset,
    register,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginSchemaType) => {
    try {
      await axios.post<returnType>("/api/users/login", data);

      reset();
      router.push("/users/verification");
    } catch (error: unknown) {
      console.error("Signup Failed", error);
    }
  };

  return (
    <main className="form-height flex flex-col items-center justify-center">
      <form
        className="flex h-[614px] w-[576px] flex-col items-center gap-8  rounded-[20px] border border-[#C1C1C1] px-[60px] "
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="mt-10 text-[32px] font-semibold leading-[38.73px] ">
          Login
        </h2>

        <h3 className="-mb-[20px] mt-1 text-2xl font-normal leading-[29.05px]">
          Welcome back to ECOMMERCE
        </h3>
        <p className="text-center text-base font-normal leading-[19.36px]">
          The next gen business marketplace
        </p>
        <div className="">
          <label
            className=" mb-[7px] text-base font-normal leading-[19.36px]"
            htmlFor="email"
          >
            Email
          </label>
          <input
            placeholder="Enter"
            className="h-[48px] w-[456px] rounded-md border border-[#C1C1C1] p-4 outline-none"
            id="email"
            type="text"
            {...register("email")}
          />
        </div>
        <div className="">
          <label
            className=" mb-[7px] text-base font-normal leading-[19.36px]"
            htmlFor="password"
          >
            Password
          </label>
          <div className="flex h-[48px] w-[456px] items-center justify-between rounded-md border border-[#C1C1C1] p-4 outline-black">
            <input
              placeholder="Enter"
              className="flex-auto outline-none"
              id="password"
              type={passwordType ? "password" : "text"}
              {...register("password")}
            />
            <button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                setPasswordType(!passwordType);
              }}
              className="inline "
            >
              {passwordType ? "show" : "hide"}
            </button>
          </div>
        </div>

        <button
          disabled={isSubmitting}
          className="-mb-[3px] mt-2 h-[56px] w-[456px] rounded-md border bg-black text-base font-medium leading-[19.36px] tracking-[0.07rem] text-white"
        >
          LOGIN
        </button>

        <hr className="-mb-[1px] w-[456px] bg-[#C1C1C1] p-[1px]" />
        <p className="text-base font-normal leading-[19.36px] text-[#333333]">
          Don’t have an Account?
          <Link className="p-1 text-black" href="/users/signup">
            SIGN UP
          </Link>
        </p>
      </form>
    </main>
  );
}
