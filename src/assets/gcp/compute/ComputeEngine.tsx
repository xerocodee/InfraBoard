import { IconInterface } from '@/assets/iconInterface'
import React from 'react'

function ComputeEngine({ className }: IconInterface) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      className={className}
    >
      <title>Icon_24px_ComputeEngine_Color</title>
      <g data-name="Product Icons">
        <rect className=" fill-[#aecbfa]" x="9" y="9" width="6" height="6" />
        <rect className="fill-[#669df6]" x="11" y="2" width="2" height="4" />
        <rect className="fill-[#669df6]" x="7" y="2" width="2" height="4" />
        <rect className="fill-[#669df6]" x="15" y="2" width="2" height="4" />
        <rect className="fill-[#4285f4]" x="11" y="18" width="2" height="4" />
        <rect className="fill-[#4285f4]" x="7" y="18" width="2" height="4" />
        <rect className="fill-[#4285f4]" x="15" y="18" width="2" height="4" />
        <rect
          className="fill-[#4285f4]"
          x="19"
          y="10"
          width="2"
          height="4"
          transform="translate(8 32) rotate(-90)"
        />
        <rect
          className="fill-[#4285f4]"
          x="19"
          y="14"
          width="2"
          height="4"
          transform="translate(4 36) rotate(-90)"
        />
        <rect
          className="fill-[#4285f4]"
          x="19"
          y="6"
          width="2"
          height="4"
          transform="translate(12 28) rotate(-90)"
        />
        <rect
          className="fill-[#669df6]"
          x="3"
          y="10"
          width="2"
          height="4"
          transform="translate(-8 16) rotate(-90)"
        />
        <rect
          className="fill-[#669df6]"
          x="3"
          y="14"
          width="2"
          height="4"
          transform="translate(-12 20) rotate(-90)"
        />
        <rect
          className="fill-[#669df6]"
          x="3"
          y="6"
          width="2"
          height="4"
          transform="translate(-4 12) rotate(-90)"
        />
        <path className="fill-[#aecbfa]" d="M5,5V19H19V5ZM17,17H7V7H17Z" />
        <polygon className="fill-[#669df6]" points="9 15 15 15 12 12 9 15" />
        <polygon className="fill-[#4285f4]" points="12 12 15 15 15 9 12 12" />
      </g>
    </svg>
  )
}

export default React.memo(ComputeEngine)