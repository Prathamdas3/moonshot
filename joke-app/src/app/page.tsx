import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-4 items-center justify-center ">
      <h2 className="text-4xl font-semibold leading-tight">
        On what topic do you want to hear a joke today!
      </h2>
      <section className="flex gap-4 items-center justify-between">
        <Input
          type="text"
          placeholder="Inter your choice"
          className="p-5 w-[500px]"
        />
        <Button>Enter</Button>
      </section>
      <section>
        <Card></Card>
      </section>
    </main>
  )
}
