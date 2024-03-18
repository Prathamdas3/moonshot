import DataSection from "@/components/DataSection";

import Pagination from "@/components/Pagination";
import axios from "axios";

export type returnType = {
  id: number;
  name: string;
  check: boolean;
  userId: number;
};

export default async function Items({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const getItems = async () => {
    try {
      const { data } = await axios.get<returnType[]>(
        "http://localhost:3000/api/items",
      );
      return data;
    } catch (error: unknown) {
      console.error(error);
    }
  };

  const data = await getItems();
  const page = searchParams.page ?? "1";
  const per_page = searchParams.per_page ?? "6";

  const page_count =
    data !== undefined ? Math.ceil(data?.length / Number(per_page)) : 1;

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const entries = data?.slice(start, end);

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
        <DataSection data={entries} />
        <Pagination
          pages={page_count}
          next={end < (data?.length ?? 0)}
          previous={start > 0}
        />
      </div>
    </main>
  );
}
