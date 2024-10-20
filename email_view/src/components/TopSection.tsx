import { useState } from "react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";
import { usePage,useFilter } from "@/lib/store";

export default function TopBar() {
    const [page, setPage] = useState<string>("1")
    const [filter, setFilter] = useState('Unread')
    const filters = ['Unread', 'Read', 'Favorites']
    const changeFilter=useFilter((state)=>state.changeFilter)
    const changePage = usePage(state => state.changePage)
    changePage(page)

    const handleFilters=(f:string)=>{
        changeFilter(f as "Unread"|"Read"|"Favorites")
        setFilter(f)
    }

    return (<section className="py-2 h-16 flex items-center justify-between">
        <div className='flex items-center gap-4 justify-start w-1/2'>
            <h2 className="text-lg font-medium ">Filter By:</h2>
            <div className="flex space-x-2 items-center">
                {filters.map((f: string) => (
                    <button
                        key={f}
                        className={`  px-3   ${filter === f ? 'bg-[#E1E4EA] text-[#636363] rounded-3xl border border-[#CFD2DC]' : 'text-black'
                            }`}
                        onClick={() => handleFilters(f)}
                    >
                        {f}
                    </button>
                ))}
            </div>
        </div>
        <Pagination className='flex items-center justify-end w-1/2'>
            <PaginationContent>
                <PaginationItem >
                    <PaginationPrevious className={`${page === '1' && 'hidden'}`} onClick={() => setPage(prev => (Number(prev) - 1).toString())} />
                </PaginationItem>
                <PaginationItem onClick={() => setPage("1")} >
                    <PaginationLink isActive={page === "1"}>1</PaginationLink>
                </PaginationItem>
                <PaginationItem onClick={() => setPage("2")}>
                    <PaginationLink isActive={page === "2"}>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext className={`${page === '2' && 'hidden'}`} onClick={() => setPage((prev) => (Number(prev) + 1).toString())} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    </section>)
}