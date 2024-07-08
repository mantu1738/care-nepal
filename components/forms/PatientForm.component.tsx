"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";

export enum FormFieldTypes {
    INPUT='input',
    TEXTAREA='textarea',
    CHECKBOX='checkbox',
    RADIO='radio',
    SELECT='select',
    DATE='date',
    PHONE_INPUT='phoneInput',
    DATE_PICKER='datePicker',
    SKELETON='skeleton',
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const  PatientFormComponent = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
            <h1 className="header">Hi there </h1>
            <p className="text-dark-700">Schedule your appointment.</p>
        </section>
        <CustomFormField
            control={form.control}
            fieldType={FormFieldTypes.INPUT}
            name="name"
            label="Full Name"
            placeholder="Enter your full name"
            iconSrc="/assets/icons/user.svg"
            iconAlt="user"
        />
          <CustomFormField
            control={form.control}
            fieldType={FormFieldTypes.INPUT}
            name="email"
            label="Email"
            placeholder="Enter your email address"
            iconSrc="/assets/icons/email.svg"
            iconAlt="email"
        />
        <CustomFormField
            control={form.control}
            fieldType={FormFieldTypes.PHONE_INPUT}
            name="phone"
            label="Phone Number"
            placeholder="Enter your phone number"
        />
      <SubmitButton
        isLoading={true}
>
        Get Started
</SubmitButton>
    </form>
  </Form>
  )
};

export default PatientFormComponent;
