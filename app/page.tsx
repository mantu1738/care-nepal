import Image from "next/image";
import { redirect } from "next/navigation";


import { getPatient, getUser } from "@/lib/actions/patient.actions";
import { PatientForm } from "@/components/forms/PatientForm.component";
import Link from "next/link";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  const patient = await getPatient(userId);

  if (patient) redirect(`/patients/${userId}/new-appointment`);

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

          <PatientForm  />

          <div className="text-14-regular mt-20 flex justify-center">
             <p className="justify-items-center text-dark-600 xl:text-left">© 2024 NepalCarePulse. All Rights Reserved.</p>
             <Link href="/?admin=true" className="text-green-500">
             Admin
             </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/doctor.jpg"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
};

export default Register;