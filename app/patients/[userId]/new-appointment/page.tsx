import {AppointmentForm} from "@/components/forms/AppointmentFoem";
import {PatientForm} from "@/components/forms/patientForm";
import { Button } from "@/components/ui/button";
import { getPatient } from "@/lib/actions/patient.action";
import Image from "next/image";
import Link from "next/link";

export default async  function NewAppointment({params: {userId}}: SearchParamProps) {
    const patient = await getPatient(userId);
    return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt='patient'
            className="mb-12 h-10 w-fit"
          />
            <AppointmentForm
            patientId={patient?.$id}
            userId={userId}
            type="create"
          />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className=" justify-items-endtext-dark-600 xl:text-left">
              © 2024 DocDirect
            </p>
          </div>
        </div>
      </section>
      <Image 
        src='/assets/images/appointment-img.png'
        height={1000}
        width={1000}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
}
 