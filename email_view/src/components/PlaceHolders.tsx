import { Skeleton } from "./ui/skeleton";

export function EmailListViewPlaceHolder(){
    const list=Array.from({length:10},(_:never,index:number)=>index);
    return <section className="flex flex-col gap-2">
        {list.map((value:number)=>(
            <Skeleton key={value} className="w-full rounded-xl h-10 p-10 bg-[#E1E4EA]"/>
        ))}
    </section>
}

export function EmailViewPlaceHolder(){
    return <section className="h-full w-full">
        <Skeleton className="h-full w-full rounded-lg" />
    </section>
}

export function MainPlaceHolder(){
    const list=Array.from({length:10},(_:never,index:number)=>index);
    return <section className="container ">
        {list.map((value:number)=>(
            <Skeleton key={value} className="w-full rounded-xl h-10"/>
        ))}
    </section>
}