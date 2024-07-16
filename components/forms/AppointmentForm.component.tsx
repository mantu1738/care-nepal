"use client";
import React from 'react'
import { useForm } from 'react-hook-form'
import CustomFormField, { FormFieldType } from '../CustomFormField'
import Image from 'next/image'
import SubmitButton from '../SubmitButton'
import { Doctors } from '@/constants'
import { SelectItem } from '../ui/select'
import { z } from 'zod';
import { CreateAppointmentSchema, UserFormValidation } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '../ui/form';
import "react-datepicker/dist/react-datepicker.css";

function AppointmentFormComponent({
    userId,
    patientId,
    type
}:
{userId:string,
    patientId:string,
    type:"create"|"cancel" | "schedule" 
}
) {

    // states
    const [isLoading, setIsLoading] = React.useState(false);

    const form = useForm<z.infer<typeof CreateAppointmentSchema>>({
        resolver: zodResolver(CreateAppointmentSchema),
        defaultValues: {
            primaryPhysician:''
        },
      });

      const onSubmit = async (values: z.infer<typeof CreateAppointmentSchema>) => {
        console.log(values);
      }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
        <section className="mb-12 space-y-4">
          <h1 className="header">New Appointment
         
        </h1>
          <p className="text-dark-700">Request a new appointment in 10 seconds.</p>
        </section>


        {type !=="cancel" && (
            <>
           <CustomFormField
            fieldType={FormFieldType.SELECT}
            control={form.control}
            name="primaryPhysician"
            label="Primary care physician"
            placeholder="Select a physician"
          >
            {Doctors.map((doctor, i) => (
              <SelectItem key={doctor.name + i} value={doctor.name}>
                <div className="flex cursor-pointer items-center gap-2">
                  <Image
                    src={doctor.image}
                    width={32}
                    height={32}
                    alt="doctor"
                    className="rounded-full border border-dark-500"
                  />
                  <p>{doctor.name}</p>
                </div>
              </SelectItem>
            ))}
          </CustomFormField>
          <CustomFormField 
            fieldType={FormFieldType.DATE_PICKER}
            control={form.control}
            name='schedule'
            placeholder='Expected date of appointment'
            showTimeSelect
            dateFormat='MM/dd/yyyy - h:mm aa'
          />
            <div
              className={`flex flex-col gap-6  ${type === "create" && "xl:flex-row"}`}
            >
              <CustomFormField
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name="reason"
                label="Appointment reason"
                placeholder="Annual montly check-up"
                disabled={type === "schedule"}
              />

              <CustomFormField
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name="note"
                label="Comments/notes"
                placeholder="Prefer afternoon appointments, if possible"
                disabled={type === "schedule"}
              />
            </div>
            </>
        )}
 {type === "cancel" && (
          <CustomFormField
            fieldType={FormFieldType.TEXTAREA}
            control={form.control}
            name="cancellationReason"
            label="Reason for cancellation"
            placeholder="Urgent meeting came up"
          />
        )}

        <SubmitButton
          isLoading={isLoading}
          className={`${type === "cancel" ? "shad-danger-btn" : "shad-primary-btn"} w-full`}
        >
          Get
        </SubmitButton>

      </form>
    </Form>
  )
}

export default AppointmentFormComponent