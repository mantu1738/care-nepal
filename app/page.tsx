import PatientFormComponent from "@/components/forms/PatientForm.component";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      {/**TODO: OTP Verification */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image 
            src="/assets/icons/logo-full.svg"
            alt="logo"
            width={1000}
            height={1000}
            className="mb-12 h-10 w-fit"
          />
          <PatientFormComponent />

          <div className="text-14-regular mt-20 flex justify-center">
             <p className="justify-items-center text-dark-600 xl:text-left">© 2024 NepalCarePulse. All Rights Reserved.</p>
             <Link href="/?admin=true" className="text-green-500">
             Admin
             </Link>
          </div>
        </div>
      </section>
      <Image 
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        className="side-img max-w-[50%]"
        alt="side-image"
      />
    </div>
  );
}
