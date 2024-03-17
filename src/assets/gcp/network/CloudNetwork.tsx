import { IconInterface } from '@/assets/iconInterface'
import React from 'react'

function CloudNetwork({ className }: IconInterface) {
  return (
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
            '.cls-1{fill:#669df6;fill-rule:evenodd;}.cls-2{fill:#4285f4;}.cls-3{fill:#aecbfa;}'
          }
        </style>
      </defs>
      <title>{'Icon_24px_Network_Color'}</title>
      <g data-name="Product Icons">
        <g>
          <polygon
            className="cls-1"
            points="4.94 13.7 11.53 20.22 12.62 19.07 6.3 12.93 4.94 13.7"
          />
          <polygon
            className="cls-1"
            points="12.57 4.06 11.48 5.22 17.69 11.44 19.47 11.06 12.57 4.06"
          />
          <rect className="cls-2" x={11.38} y={5.13} width={1.25} height={5} />
          <rect className="cls-2" x={11.38} y={14.5} width={1.25} height={5} />
          <circle id="Oval" className="cls-3" cx={12} cy={4.5} r={1.88} />
          <circle className="cls-3" cx={12} cy={19.5} r={1.88} />
          <polygon
            className="cls-1"
            points="2.66 11.38 17.73 11.38 21.37 13.25 6.3 13.25 2.66 11.38"
          />
          <circle className="cls-3" cx={4.5} cy={12.31} r={2.5} />
          <circle className="cls-3" cx={19.5} cy={12.31} r={2.5} />
        </g>
      </g>
    </svg>
  )
}

export default React.memo(CloudNetwork)
