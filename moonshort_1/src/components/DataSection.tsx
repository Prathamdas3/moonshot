"use client";
import { returnType } from "@/utils/api";
import { useState } from "react";
import axios from "axios";

type updateType = {
  check: boolean;
  id: number;
};
export default function DataSection({
  data,
}: {
  data: returnType[] | undefined;
}) {
  const [updateCheck, setUpDateCheck] = useState<undefined | updateType>(
    undefined,
  );

  if (updateCheck !== undefined) {
    const res = axios.patch(
      `http://localhost:3000/api/v1/items/${updateCheck.id}`,
      { check: updateCheck.check },
    );
  }

  return (
    <section className="mb-[34px] flex flex-col items-start space-y-[23px]">
      {data?.map(({ name, check, id }) => (
        <div className="flex items-center gap-3" key={id}>
          <input
            type="checkbox"
            id={name}
            name={name}
            checked={check}
            className={` h-6 w-6 rounded-[4px] border-2 border-black ${check ? "bg-black" : "bg-[#CCCCCC]"}`}
            onChange={() => setUpDateCheck({ check: !check, id })}
          />
          <label
            htmlFor={name}
            className="text-base font-normal leading-[26px]"
          >
            {name}
          </label>
        </div>
      ))}
    </section>
  );
}
