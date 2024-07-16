import AppointmentFormComponent from '@/components/forms/AppointmentForm.component';
import { getPatient } from '@/lib/actions/patient.actions';
import Image from 'next/image';
import React from 'react'

async function NewAppointment({params:{userId}}:SearchParamProps) {
    const patient = await getPatient(userId);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <AppointmentFormComponent type='create' userId={userId}  patientId={patient?.$id}/>

          <p className="copyright py-12">© 2024 Nepal Care Pulse</p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  )
}

export default NewAppointment;