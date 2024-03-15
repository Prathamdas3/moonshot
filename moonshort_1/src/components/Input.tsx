type propType = {
  label: string;
  type: string;
  className?: string;
};
export default function Input({ label, type, className }: propType) {
  return (
    <div className={className}>
      <label
        className=" mb-[7px] text-base font-normal leading-[19.36px]"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        placeholder="Enter"
        className="h-[48px] w-[456px] rounded-md border border-[#C1C1C1] p-4"
        id={label}
        type={type}
        name={label}
      />
    </div>
  );
}

export function Checkbox({ label, check }: { label: string; check?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        id={label}
        name={label}
        checked={check}
        className={` h-6 w-6 rounded-[4px] border-2 border-black ${check ? "bg-black" : "bg-[#CCCCCC]"}`}
      />
      <label htmlFor={label} className="text-base font-normal leading-[26px]">
        {label}
      </label>
    </div>
  );
}
