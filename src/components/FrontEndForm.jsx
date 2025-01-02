"use client"
// React Hook Form
import { useForm } from "react-hook-form"
// React
import { useState } from "react"
// Zod
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
// Shadcnui
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Textarea,
  FormLabel,
} from "./index"

const formSchema = z.object({
  name: z.string().min(1, {
    message: "name cannot be empty",
  }),
  email: z.string().email({
    message: "please use a valid email",
  }),
  phone: z
    .string({
      required_error: "phone is required",
      invalid_type_error: "phone must be a string",
    })
    .min(7, {
      message: "phone must be at least 7 characters.",
    })
    .max(14, {
      message: "phone must be at most 14 characters.",
    })
    .regex(/^\d+$/, {
      message: "phone number can only contain digits.",
    }),
  message: z.string(),
})

const FrontEndForm = ({ label = true, css }) => {
  const [loading, setLoading] = useState(false)
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })
  const handleSubmit = async (values) => {
    setLoading(true)
    const filteredValues = Object.entries(values).reduce(
      (acc, [key, value]) => {
        if (value !== "" && value !== false) {
          acc[key] = value
        }
        return acc
      },
      {}
    )

    console.log(filteredValues)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={`grid grid-cols-1 gap-5 ${css}`}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              {label && (
                <FormLabel>
                  Full Name <span className="text-primary">*</span>
                </FormLabel>
              )}
              <FormControl>
                <Input
                  className="!text-lg rounded-[9px] px-5 text-black font-normal py-7 mb-1 placeholder:text-text_color bg-text_color/10"
                  placeholder="Full Name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              {label && (
                <FormLabel>
                  Email <span className="text-primary">*</span>
                </FormLabel>
              )}
              <FormControl>
                <Input
                  className="!text-lg rounded-[9px] px-5 text-black font-normal py-7 mb-1 placeholder:text-text_color bg-text_color/10"
                  placeholder="Email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              {label && (
                <FormLabel>
                  Phone <span className="text-primary">*</span>
                </FormLabel>
              )}
              <FormControl>
                <Input
                  className="!text-lg rounded-[9px] px-5 text-black font-normal py-7 mb-1 placeholder:text-text_color bg-text_color/10"
                  placeholder="Phone"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              {label && <FormLabel>Message</FormLabel>}
              <FormControl>
                <Textarea
                  className="!text-lg rounded-[9px] px-5 text-black font-normal placeholder:text-text_color bg-text_color/10 resize-none"
                  placeholder="Message"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          type="submit"
          className="bg-secondary text-lg leading-tight font-semibold text-primary h-[60px] w-[160px] rounded-full mt-3"
          disabled={loading}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </Form>
  )
}

export default FrontEndForm
