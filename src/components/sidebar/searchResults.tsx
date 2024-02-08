import { Tooltip } from '@mantine/core'
import React from 'react'
import { IoCalculatorOutline } from 'react-icons/io5'

const SearchResults = ({
  openSearchResults,
  searchResults,
  activeSubList,
}: any) => {
  return (
    <div className={`w-full min-h-full ${!openSearchResults && 'hidden'} `}>
      {searchResults.map((item: any) => (
        <div key={item?.category}>
          <p className=" text-gray-800 font-medium flex items-center gap-5 py-5 text-md">
            <IoCalculatorOutline className="text-lg" />
            {item?.category}
          </p>
          <hr className=" bg-black w-full" />
          <div>
            <p className="text-md text-gray-600 py-1">
              {activeSubList?.specialHeading}
            </p>
            <ul className="space-y-2 ml-5">
              {item?.subTabs?.map((item: any, index: number) => (
                <li key={index}>
                  <Tooltip
                    withArrow
                    label={item.title}
                    transitionProps={{
                      transition: 'fade',
                      duration: 200,
                    }}
                    className="font-medium shadow-2xl border-[1px] border-gray-200 text-[#003ab7]"
                    position="right"
                    arrowSize={6}
                    color="#fff"
                  >
                    <div className="flex items-center gap-2 ">
                      <div>
                        <IoCalculatorOutline className="text-2xl" />
                      </div>
                      <div className="overflow-hidden">
                        <p className="font-medium truncate  ">{item.title}</p>
                        <p className="truncate text-xs ">{item.desc}</p>
                      </div>
                    </div>
                  </Tooltip>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SearchResults
