import { IconInterface } from '@/assets/iconInterface'
import React from 'react'

function CloudDNS({ className }: IconInterface){
    return(
        <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    className={className}
  >
    <defs>
      <style>
        {
          ".cls-1{fill:#4285f4;}.cls-2{fill:#669df6;}.cls-3{fill:#aecbfa;}.cls-4{fill:#fff;}"
        }
      </style>
    </defs>
    <title>{"Icon_24px_DNS_Color"}</title>
    <g data-name="Product Icons">
      <g data-name="colored-32/dns">
        <g>
          <polygon
            id="Fill-1"
            className="cls-1"
            points="13 18 11 18 11 8 13 8 13 18"
          />
          <polygon
            id="Fill-2"
            className="cls-2"
            points="2 21 22 21 22 19 2 19 2 21"
          />
          <polygon
            id="Fill-3"
            className="cls-3"
            points="10 22 14 22 14 18 10 18 10 22"
          />
        </g>
      </g>
      <rect className="cls-3" x={2} y={2} width={20} height={6} />
      <rect className="cls-2" x={12} y={2} width={10} height={6} />
      <rect className="cls-4" x={4} y={4} width={2} height={2} />
      <rect className="cls-3" x={2} y={10} width={20} height={6} />
      <rect className="cls-2" x={12} y={10} width={10} height={6} />
      <rect className="cls-4" x={4} y={12} width={2} height={2} />
    </g>
  </svg>
    )
}

export default React.memo(CloudDNS)