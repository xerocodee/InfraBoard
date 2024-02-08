import React from 'react'
import { GrFormPreviousLink } from 'react-icons/gr'
import { IoCalculatorOutline } from 'react-icons/io5'
import SubTab from './draggableTabsList'

const SubTabs = ({ open, setOpen, openSearchResults, activeSubList }: any) => {
  return (
    <div
      className={`w-full min-h-full ${(!open || openSearchResults) && 'hidden'
        }`}
    >
      <p className="text-lg text-gray-800 font-medium py-2 bg-gray-50 my-2 flex items-center gap-1">
        <GrFormPreviousLink
          className="text-2xl"
          onClick={() => setOpen(false)}
        />{' '}
        {activeSubList?.parentTitle}
      </p>
      <p className=" text-gray-800 font-medium flex items-center gap-5 py-5 text-md">
        <IoCalculatorOutline className="text-lg" />
        {activeSubList?.subTitle}
      </p>
      <hr className=" bg-black w-full" />
      <div>
        <p className="text-md text-gray-600 py-1">
          {activeSubList?.specialHeading}
        </p>
        <ul className="space-y-2 ml-5">
          {activeSubList?.subList?.map((item: any, index: number) => (
            <SubTab
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SubTabs
