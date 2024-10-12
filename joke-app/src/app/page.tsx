'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useQuery } from '@tanstack/react-query'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'

import { Card } from '@/components/ui/card'

const formSchema = z.object({
  message: z.string().min(2, 'minimal character for the message should be 2'),
})

export type formSchemaType = z.infer<typeof formSchema>

export default function Home() {
  const {} = useQuery({
    queryKey: ['joke'],
    queryFn: async () => {
      const res = await fetch('')
      const data = await res.json()
    },
  })

  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: { message: '' },
  })

  const onSubmit = async (formData: formSchemaType) => {
    try {
      form.reset()
    } catch (error: unknown) {
      console.error(error)
    }
  }

  return (
    <main className="min-h-screen flex flex-col gap-4 items-center justify-center ">
      <h2 className="text-4xl font-semibold leading-tight">
        On what topic do you want to hear a joke today!
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex gap-4  justify-between "
        >
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your choice"
                    className="p-5 w-[500px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="p-5">
            Submit
          </Button>
        </form>
      </Form>
      <Card></Card>
    </main>
  )
}
