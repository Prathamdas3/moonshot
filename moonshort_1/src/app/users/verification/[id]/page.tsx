"use client";
import { useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

type tokenType = Record<string, string>;
export default function Verification() {
  const [token, setToken] = useState<tokenType>({
    key1: "",
    key2: "",
    key3: "",
    key4: "",
    key5: "",
    key6: "",
    key7: "",
    key8: "",
  });

  const tokenValue = Object.keys(token)
    .map((key: string) => "" + token[key])
    .join("");

  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const submit = async () => {
    try {
      await axios.post(`/api/users/verifyemail/${id}`, {
        token: tokenValue,
      });
      await axios.post(`/api/items`, { id: Number(id) });
      router.push("/items");
    } catch (error: unknown) {
      console.error(error);
    }
  };
  return (
    <main className="form-height flex flex-col items-center justify-center">
      <div className="flex h-[453px] w-[576px] flex-col items-center gap-8  rounded-[20px] border border-[#C1C1C1] px-[60px] ">
        <h2 className="mt-10 text-center text-[32px] font-semibold  leading-[38.73px]">
          Verify your email
        </h2>

        <p className="mb-[14px] text-center indent-1 text-base font-normal leading-[19.36px]">
          Enter the 8 digit code you have received on
          <span className="font-medium"> swa***@gmail.com</span>
        </p>

        <div className="mb-8 flex flex-col">
          <label
            htmlFor=""
            className="mb-[7px] text-base font-normal leading-[19.36px]"
          >
            Code
          </label>
          <div className="flex gap-3">
            <input
              className="h-12 w-[46px] rounded-md border border-[#C1C1C1] p-4"
              onChange={(e) => setToken({ ...token, key1: e.target.value })}
            />
            <input
              className="h-12 w-[46px] rounded-md border border-[#C1C1C1] p-4"
              onChange={(e) => setToken({ ...token, key2: e.target.value })}
            />
            <input
              className="h-12 w-[46px] rounded-md border border-[#C1C1C1] p-4"
              onChange={(e) => setToken({ ...token, key3: e.target.value })}
            />
            <input
              className="h-12 w-[46px] rounded-md border border-[#C1C1C1] p-4"
              onChange={(e) => setToken({ ...token, key4: e.target.value })}
            />
            <input
              className="h-12 w-[46px] rounded-md border border-[#C1C1C1] p-4"
              onChange={(e) => setToken({ ...token, key5: e.target.value })}
            />
            <input
              className="h-12 w-[46px] rounded-md border border-[#C1C1C1] p-4"
              onChange={(e) => setToken({ ...token, key6: e.target.value })}
            />
            <input
              className="h-12 w-[46px] rounded-md border border-[#C1C1C1] p-4"
              onChange={(e) => setToken({ ...token, key7: e.target.value })}
            />
            <input
              className="h-12 w-[46px] rounded-md border border-[#C1C1C1] p-4"
              onChange={(e) => setToken({ ...token, key8: e.target.value })}
            />
          </div>
        </div>

        <button
          className=" h-[56px] w-[456px] rounded-md border bg-black text-base font-medium leading-[19.36px] tracking-[0.07rem] text-white"
          onClick={submit}
        >
          VERIFY
        </button>
      </div>
    </main>
  );
}
