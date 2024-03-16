"use client";
import Link from "next/link";


export default function Login() {
  return (
    <main className="form-height flex flex-col items-center justify-center">
      <form className="flex h-[614px] w-[576px] flex-col items-center gap-8  rounded-[20px] border border-[#C1C1C1] px-[60px] ">
        <h2 className="mt-10 text-[32px] font-semibold leading-[38.73px] ">
          Login
        </h2>

        <h3 className="-mb-[20px] mt-1 text-2xl font-normal leading-[29.05px]">
          Welcome back to ECOMMERCE
        </h3>
        <p className="text-center text-base font-normal leading-[19.36px]">
          The next gen business marketplace
        </p>
        <div className=""><label
        className=" mb-[7px] text-base font-normal leading-[19.36px]"
        htmlFor="email"
      >
  Email
      </label>
      <input
        placeholder="Enter"
        className="h-[48px] w-[456px] rounded-md border border-[#C1C1C1] p-4"
        id="email"
        type="text"
        
      /></div>
        <div className=""><label
        className=" mb-[7px] text-base font-normal leading-[19.36px]"
        htmlFor="password"
      >
        Password
      </label>
      <input
        placeholder="Enter"
        className="h-[48px] w-[456px] rounded-md border border-[#C1C1C1] p-4"
        id="password"
        type="text"
      /></div>
       
        <button className="-mb-[3px] mt-2 h-[56px] w-[456px] rounded-md border bg-black text-base font-medium leading-[19.36px] tracking-[0.07rem] text-white">
          LOGIN
        </button>

        <hr className="-mb-[1px] w-[456px] bg-[#C1C1C1] p-[1px]" />
        <p className="text-base font-normal leading-[19.36px] text-[#333333]">
          Don’t have an Account?
          <Link className="p-1 text-black" href="/user/signup">
            SIGN UP
          </Link>
        </p>
      </form>
    </main>
  );
}
