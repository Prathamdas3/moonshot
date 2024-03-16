export default function Verification() {
  return (
    <main className="form-height flex flex-col items-center justify-center">
      <div className="flex h-[453px] w-[576px] flex-col items-center gap-8  rounded-[20px] border border-[#C1C1C1] px-[60px] ">
        <h2 className="mt-10 text-center text-[32px] font-semibold  leading-[38.73px]">
          Verify your email
        </h2>

        <p className="mb-[14px] text-center indent-1 text-base font-normal leading-[19.36px]">
          Enter the 8 digit code you have received on
          <span className="font-medium">swa***@gmail.com</span>
        </p>

        <div className="mb-8 flex flex-col">
          <label
            htmlFor=""
            className="mb-[7px] text-base font-normal leading-[19.36px]"
          >
            Code
          </label>
          <div className="flex gap-3">
            <input className="h-12 w-[46px] rounded-md border border-[#C1C1C1]" />
            <input className="h-12 w-[46px] rounded-md border border-[#C1C1C1]" />
            <input className="h-12 w-[46px] rounded-md border border-[#C1C1C1]" />
            <input className="h-12 w-[46px] rounded-md border border-[#C1C1C1]" />
            <input className="h-12 w-[46px] rounded-md border border-[#C1C1C1]" />
            <input className="h-12 w-[46px] rounded-md border border-[#C1C1C1]" />
            <input className="h-12 w-[46px] rounded-md border border-[#C1C1C1]" />
            <input className="h-12 w-[46px] rounded-md border border-[#C1C1C1]" />
          </div>
        </div>

        <button className=" h-[56px] w-[456px] rounded-md border bg-black text-base font-medium leading-[19.36px] tracking-[0.07rem] text-white">
          VERIFY
        </button>
      </div>
    </main>
  );
}
