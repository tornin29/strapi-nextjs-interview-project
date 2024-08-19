import React from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const Button = ({ className, type = 'button', children, ...props }: Props) => {
  return (
    <button
      // className=mt-4 mx-auto bg bg-gray-700 text-white hover:text-gray-700 hover:bg-white border border-gray-700 px-3 py-2 duration-150'
      className={twMerge(
        'bg-gray-700 text-white hover:text-gray-700 hover:bg-white border border-gray-700 px-3 py-2 duration-150',
        className
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}