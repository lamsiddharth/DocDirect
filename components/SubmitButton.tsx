import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

type Props = {}

interface ButtonProps  {
    isLoading: boolean,
    className?: string,
    children: React.ReactNode
}

const SubmitButton = ({isLoading, className, children}: ButtonProps) => {
  return (
    <Button type='submit' disabled={isLoading} className={ className ?? 'shad-primary-btn w-full'}>
        {isLoading ? (
            <div>
                <div className=' flex items-center gap-4'>
                    <Image 
                        src='/assets/icons/spinner/svg'
                        alt='loader'
                        width={24}
                        height={24}
                        className='animate-spin'
                    />
                    Loading...
                </div>
            </div>
        ): children}
    </Button>
  )
}

export default SubmitButton