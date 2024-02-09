// Import necessary packages
import React from 'react'
import { useDrag } from 'react-dnd'
import { IoCalculatorOutline } from 'react-icons/io5'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

interface SubTabInterface {
  id?: string
  title?: string
  icon?: any
  subList?: any[]
}

const SubTab: React.FC<SubTabInterface> = ({ title, icon: Icon, subList }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'SUBTAB',
    item: {
      subTab: {
        title,
        icon: Icon,
        subList,
      },
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
    >
      <Tooltip>
        <TooltipContent>
          <p className="font-medium shadow-2xl border-[1px] border-gray-200 text-[#003ab7]">
            {title}
          </p>
        </TooltipContent>
        <TooltipTrigger>
          <div className="w-full flex flex-col justify-center gap-1 items-center  h-20 border-2 rounded-md p-1 hover:border-[1px] hover:border-blue-600 hover:bg-blue-50">
            {Icon ? (
              <Icon className="" />
            ) : (
              <IoCalculatorOutline className="text-5xl mx-auto p-1" />
            )}
            <p className="truncate text-xs w-4/5 text-center">{title}</p>
          </div>
        </TooltipTrigger>
      </Tooltip>
    </div>
  )
}
export default SubTab
