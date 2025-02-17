import React from 'react'

export default function Section({ children }: { children: React.ReactNode }) {
    return (
        <div className='min-h-[100vh] w-full px-[1rem]'>
            {children}
        </div>
    )
}
