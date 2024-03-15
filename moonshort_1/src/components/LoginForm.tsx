import Input from "./Input";
export default function LoginForm() {
  return (
    <div className="flex h-[614px] w-[576px] flex-col items-center gap-8  rounded-[20px] border border-[#C1C1C1] px-[60px] ">
      <h2 className="mt-10 text-[32px] font-semibold leading-[38.73px] ">
        Login
      </h2>

      <h3 className="-mb-[20px] mt-1 text-2xl font-normal leading-[29.05px]">
        Welcome back to ECOMMERCE
      </h3>
      <p className="text-center text-base font-normal leading-[19.36px]">
        The next gen business marketplace
      </p>

      <Input label="Email" type="text" />
      <Input label="Password" type="password" />
      <button className="-mb-[3px] mt-2 h-[56px] w-[456px] rounded-md border bg-black text-base font-medium leading-[19.36px] tracking-[0.07rem] text-white">
        LOGIN
      </button>

      <hr className="-mb-[1px] w-[456px] bg-[#C1C1C1] p-[1px]" />
      <p className="text-base font-normal leading-[19.36px] text-[#333333]">
        Don’t have an Account?
        <span className="p-1 text-black">SIGN UP</span>
      </p>
    </div>
  );
}
