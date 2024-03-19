"use client";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  ChevronsLeft,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Pagination({
  pages,
  next,
  previous,
}: {
  pages: number;
  next: boolean;
  previous: boolean;
}) {
  const arr: number[] = [];
  for (let i = 1; i <= pages; i++) {
    arr.push(i);
  }

  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "6";

  return (
    <section className="landing-[26px]  text-xl font-medium">
      <div className="flex items-center gap-1">
        <button
          disabled={!previous}
          onClick={() => router.push(`/items?page=${1}&per_page=${per_page}`)}
        >
          <ChevronsLeft color="#ACACAC" />
        </button>
        <button
          disabled={!previous}
          onClick={() =>
            router.push(`/items?page=${Number(page) - 1}&per_page=${per_page}`)
          }
        >
          <ChevronLeft color="#ACACAC" />
        </button>
        {arr.map((e: number) => (
          <p
            key={e}
            className={`${Number(page) === e ? "text-black" : "text-[#ACACAC] "} hover cursor-pointer `}
            onClick={() => router.push(`/items?page=${e}&per_page=${per_page}`)}
          >
            {e}
          </p>
        ))}

        <button
          disabled={!next}
          onClick={() =>
            router.push(`/items?page=${Number(page) + 1}&per_page=${per_page}`)
          }
        >
          <ChevronRight color="#ACACAC" />
        </button>
        <button
          disabled={!next}
          onClick={() =>
            router.push(`/items?page=${arr.length}&per_page=${per_page}`)
          }
        >
          <ChevronsRight color="#ACACAC" />
        </button>
      </div>
    </section>
  );
}
