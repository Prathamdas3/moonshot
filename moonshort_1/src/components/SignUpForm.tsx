import Input from "./Input";
export default function SignUpForm() {
  return (
    <div className="flex h-[691px] w-[576px] flex-col items-center gap-8  rounded-[20px] border border-[#C1C1C1] px-[60px]">
      <h2 className=" mt-10 text-[32px] font-semibold leading-[38.73px]">
        Create your account
      </h2>
      <Input label="Name" type="text" />
      <Input label="Email" type="text" />
      <Input label="Password" type="password" />
      <button className="mb-4 mt-2 h-[56px] w-[456px] rounded-md border bg-black text-base font-medium leading-[19.36px] tracking-[0.07rem] text-white">
        CREATE ACCOUNT
      </button>
      <p className=" text-base font-normal leading-[19.36px] text-[#333333]">
        Have an Account?
        <span className="p-1 text-black">LOGIN</span>
      </p>
    </div>
  );
}
