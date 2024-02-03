import { IconInterface } from '@/assets/iconInterface'
import React from 'react'

function Lambda({ className }: IconInterface) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      className={className}
    >
      <defs>
        <linearGradient
          id="Arch_AWS-Lambda_32_svg__a"
          x1="0%"
          x2="100%"
          y1="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#C8511B"></stop>
          <stop offset="100%" stopColor="#F90"></stop>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#Arch_AWS-Lambda_32_svg__a)" d="M0 0h40v40H0z"></path>
        <path
          fill="#FFF"
          d="M14.386 33H8.27l6.763-14.426 3.064 6.44L14.387 33zm1.085-15.798a.49.49 0 00-.442-.282h-.002a.493.493 0 00-.441.285l-7.538 16.08a.507.507 0 00.028.482.49.49 0 00.415.233h7.206c.19 0 .363-.111.445-.286l3.944-8.489a.508.508 0 00-.002-.432l-3.613-7.591zM32.018 33h-5.882l-9.47-20.711a.491.491 0 00-.444-.289H12.37l.005-5h7.549l9.424 20.71c.08.177.256.29.446.29h2.224v5zm.49-6h-2.4L20.684 6.29a.492.492 0 00-.446-.29h-8.353a.496.496 0 00-.491.5l-.006 6a.51.51 0 00.144.354.488.488 0 00.347.146h4.032l9.468 20.711a.49.49 0 00.445.289h6.686a.495.495 0 00.491-.5v-6c0-.276-.219-.5-.491-.5z"
        ></path>
      </g>
    </svg>
  )
}

export default React.memo(Lambda)
