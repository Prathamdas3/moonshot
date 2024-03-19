"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type UserSchemaType, userSchema } from "@/utils/zodSchema";
import { useRouter } from "next/navigation";
import { type returnUser } from "@/app/api/users/signup/route";
import axios from "axios";
import { useState } from "react";

export default function SignUp() {
  const [passwordType, setPasswordType] = useState<boolean>(true);
  const router = useRouter();

  const form = useForm<UserSchemaType>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: UserSchemaType) => {
    try {
      const res = await axios.post<returnUser>("/api/users/signup", data);
      form.reset();
      router.push(`/users/verification/${res.data.user}`);
    } catch (error: unknown) {
      console.error("Signup Failed", error);
    }
  };

  return (
    <main className="form-height flex flex-col items-center justify-center">
      <form
        className="flex h-[691px] w-[576px] flex-col items-center gap-8  rounded-[20px] border border-[#C1C1C1] px-[60px]"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <h2 className=" mt-10 text-[32px] font-semibold leading-[38.73px]">
          Create your account
        </h2>
        <div className="">
          <label
            className=" mb-[7px] text-base font-normal leading-[19.36px]"
            htmlFor="Name"
          >
            Name
          </label>
          <input
            placeholder="Enter"
            className="h-[48px] w-[456px] rounded-md border border-[#C1C1C1] p-4 outline-none"
            id="Name"
            type="text"
            {...form.register("name")}
          />
        </div>
        <div className="">
          <label
            className=" mb-[7px] text-base font-normal leading-[19.36px]"
            htmlFor="Email"
          >
            Email
          </label>
          <input
            placeholder="Enter"
            className="h-[48px] w-[456px] rounded-md border border-[#C1C1C1] p-4 outline-none"
            id="Email"
            type="text"
            {...form.register("email")}
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
              {...form.register("password")}
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
          disabled={form.formState.isSubmitting}
          className="mb-4 mt-2 h-[56px] w-[456px] rounded-md border bg-black text-base font-medium leading-[19.36px] tracking-[0.07rem] text-white"
        >
          CREATE ACCOUNT
        </button>
        <p className=" text-base font-normal leading-[19.36px] text-[#333333]">
          Have an Account?
          <Link className="p-1 text-black" href="/users/login">
            LOGIN
          </Link>
        </p>
      </form>
    </main>
  );
}
