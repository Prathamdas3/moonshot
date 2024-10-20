import handler from "@/server";
import Dashboard from '@/components/Dashboard'

export default async function Home() {
    const data = await handler()


    if (!data) {
        <main className="p-6 space-y-6 bg-background flex min-h-screen justify-center items-center">
            Error
        </main>
    }

    return (
        <main className="p-6 space-y-6 bg-background flex min-h-screen justify-center items-center flex-col">
            <h1 className="text-3xl font-bold">Analytics Dashboard</h1>

            <Dashboard data={data}/>
        </main>
    );
};