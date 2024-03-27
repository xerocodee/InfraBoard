import { IconInterface } from '@/assets/iconInterface'
import React from 'react'

function Trace({ className}: IconInterface){
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
        {".cls-1{fill:none;}.cls-2{fill:#4285f4;}.cls-3{fill:#669df6;}"}
      </style>
    </defs>
    <title>{"Icon_24px_Trace_Color"}</title>
    <g data-name="Product Icons">
      <g data-name="colored-32/traces">
        <rect className="cls-1" width={24} height={24} />
        <g>
          <polygon
            id="Fill-1"
            className="cls-2"
            points="12 14 22 14 22 10 12 10 12 14"
          />
        </g>
        <g data-name="Shape">
          <polygon
            id="Fill-1-2"
            data-name="Fill-1"
            className="cls-2"
            points="12 22 22 22 22 18 12 18 12 22"
          />
        </g>
        <g data-name="Shape">
          <polygon
            id="Fill-1-3"
            data-name="Fill-1"
            className="cls-3"
            points="8 22 12 22 12 18 8 18 8 22"
          />
        </g>
      </g>
      <rect className="cls-3" x={2} y={2} width={6} height={4} />
      <rect className="cls-3" x={2} y={10} width={10} height={4} />
    </g>
  </svg>
    )
}

export default React.memo(Trace)