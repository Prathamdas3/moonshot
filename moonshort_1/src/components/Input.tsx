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
