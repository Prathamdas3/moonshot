import { Checkbox } from "@/components/Input";
// import VerificationForm from "@/components/Verification";

export default function Home() {
  return (
    <main className="form-height flex flex-col items-center justify-center">
      <div className="flex h-[658px] w-[576px] flex-col   gap-8  rounded-[20px] border border-[#C1C1C1] px-[60px] ">
        <h2 className="-mb-[9px] mt-10 text-center text-[32px] font-semibold leading-[38.73px]">
          Please mark your interests!
        </h2>

        <p className="mb-[5px]  text-center text-base font-normal leading-[19.36px]">
          We will keep you notified.
        </p>

        <h4 className="-mb-[5px] text-start text-xl font-medium leading-[26px]">
          My saved interests!
        </h4>
        <div className="mb-[34px] flex flex-col items-start space-y-[23px]">
          <Checkbox label="Shoes" />
          <Checkbox label="Shoes" />
          <Checkbox label="Shoes" />
          <Checkbox label="Shoes" />
          <Checkbox label="Shoes" />
          <Checkbox label="Shoes" />
        </div>
        <div className="landing-[26px] text-xl font-medium">pagination</div>
      </div>
    </main>
  );
}
