import StatCard from '@/components/StatCard'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Admin = (props: Props) => {
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
                    count={5}
                    label="scheduled appointments"
                    icon='/assets/icons/appointments.svg'
                />
                 <StatCard
                    type='pending'
                    count={5}
                    label="Pending appointments"
                    icon='/assets/icons/Pending.svg'
                />
                <StatCard
                    type='cancelled'
                    count={5}
                    label="cancelled appointments"
                    icon='/assets/icons/cancelled.svg'
                />
            </section>
        </main>
    </div>
  )
}

export default Admin