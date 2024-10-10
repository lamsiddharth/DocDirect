import { DataTable } from '@/components/table/DataTable'
import StatCard from '@/components/StatCard'
import { getRecentAppointmentList } from '@/lib/actions/appointment.actions'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Payment, columns } from "@/components/table/columns"

type Props = {}
async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
      {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
      },
      // ...
    ]
  }

const Admin = async (props: Props) => {
    const appointments = await getRecentAppointmentList()
    const data = await getData()

  return (
    <div className='mx-auto flex max-w-7xl flex-col space-y-14'>
        <header className='admin-header'>
            <Link href='/' className='cursor-pointer'>
                <Image
                    src="/assets/icons/logo-full.svg"
                    height={32}
                    width={162}
                    alt='logo'
                    className='h-8 w-fit'
                />
            </Link>
            <p className='text-16-semibold'>Admin Dashboard</p>
        </header>
        <main className='admin-mian'>
            <section className='w-full space-y-4 '>
                <h1 className='header'>
                    Welcome👋
                </h1>
                <p className='text-dark-700 pb-5'> Manage your appointments</p>
            </section>
            <section className='admin-stat'>
                <StatCard
                    type='appointments'
                    count={appointments.scheduledCount}
                    label="scheduled appointments"
                    icon='/assets/icons/appointments.svg'
                />
                 <StatCard
                    type='pending'
                    count={appointments.pendingCount}
                    label="Pending appointments"
                    icon='/assets/icons/Pending.svg'
                />
                <StatCard
                    type='cancelled'
                    count={appointments.cancelledCount}
                    label="cancelled appointments"
                    icon='/assets/icons/cancelled.svg'
                />
            </section>
            <DataTable columns={columns} data={appointments.documents}/>
        </main>
    </div>
  )
}

export default Admin