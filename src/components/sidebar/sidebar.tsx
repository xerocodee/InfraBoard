'use client'
import {
  IoCubeOutline,
  IoCubeSharp,
  IoSearch,
  IoCalculatorOutline,
} from 'react-icons/io5'
import { GrFormPreviousLink } from 'react-icons/gr'
import {
  SegmentedControl,
  Select,
  Accordion,
  Input,
  Tooltip,
  CloseButton,
} from '@mantine/core'
import { leftSideBarData } from '@/store/leftSideBarData'
import { useState } from 'react'
import { useDrag } from 'react-dnd'
import SubTab from './sidebarDrag'

interface SubTabInterface {
  id: string
  title: string
  icon?: any
  subList: any[]
}

export default function SideBar() {
  const [selectedProvider, setSelectedProvider] = useState<string | null>('aws')
  const [searchValue, setSearchValue] = useState('')
  const handleProviderChange = (value: string | null) => {
    setSelectedProvider(value)
  }
  const [openSearchResults, setOpenSearchResults] = useState(false)
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [open, setOpen] = useState(false)
  const [activeSubList, setActiveSubList] = useState<any>()
  const openSubMenu = (subList: any) => {
    setOpen(true)
    setActiveSubList(subList)
  }
  const searchSubTabs = (searchTerm: any) => {
    setOpenSearchResults(true)
    if (searchTerm === '') setOpenSearchResults(false)
    setSearchValue(searchTerm)
    const filteredSubTabsArray: any = []
    selectedProvider &&
      leftSideBarData[selectedProvider].tabs.forEach((tab: any) => {
        const filteredSubTabs = tab.subTabs.filter((subTab: any) =>
          subTab.title.toLowerCase().includes(searchTerm.toLowerCase()),
        )
        if (filteredSubTabs.length > 0) {
          filteredSubTabsArray.push({
            category: tab.title,
            subTabs: filteredSubTabs,
          })
        }
      })
    setSearchResults(filteredSubTabsArray)
  }

  const [{ isDragging }, drag] = useDrag({
    type: 'SUBTAB', // Define a type for the drag operation
    item: {
      subTab: activeSubList, // Pass the subtab information as the item being dragged
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  return (
    <>
      <div className="md:flex md:w-1/5 md:flex-col md:fixed md:inset-y-0 mt-[62px] z-[49]">
        <div className="flex justify-between flex-col sm:flex-row md:flex-col md:flex-grow md:pt-2 p-3  bg-white border-[1px] border-slate-200 overflow-y-auto">
          <div className=" flex-1 flex flex-col items-center sm:flex-row md:flex-col justify-end w-full">
            <nav className="flex md:flex-1 flex-col sm:flex-row md:flex-col items-center md:space-y-2 w-full">
              <div className="grid grid-cols-3 w-full gap-2">
                <Tooltip
                  withArrow
                  label={'Select a cloud provider'}
                  transitionProps={{
                    transition: 'fade',
                    duration: 200,
                  }}
                  className="font-medium shadow-2xl border-[1px] border-gray-200 text-[#003ab7]"
                  position="bottom"
                  arrowSize={6}
                  color="#fff"
                >
                  <Select
                    placeholder="Pick one"
                    data={[
                      { value: 'aws', label: 'AWS' },
                      {
                        value: 'gcp',
                        label: 'GCP',
                      },
                    ]}
                    checkIconPosition="right"
                    defaultValue={'aws'}
                    onChange={(value: any) => handleProviderChange(value)}
                  />
                </Tooltip>
                <Tooltip
                  withArrow
                  label={"Select a version for cloud provider's resources"}
                  transitionProps={{
                    transition: 'fade',
                    duration: 200,
                  }}
                  className="font-medium shadow-2xl border-[1px] border-gray-200 text-[#003ab7]"
                  position="bottom"
                  arrowSize={6}
                  color="#fff"
                >
                  <Select
                    checkIconPosition="right"
                    placeholder="Pick one"
                    defaultValue={
                      selectedProvider
                        ? leftSideBarData[selectedProvider].versions[0].version
                        : ''
                    }
                    data={
                      selectedProvider
                        ? leftSideBarData[selectedProvider].versions.map(
                            (item: any) => ({
                              value: item.version,
                              label: item.version,
                            }),
                          )
                        : []
                    }
                  />
                </Tooltip>
                <SegmentedControl
                  data={[
                    {
                      label: (
                        <Tooltip
                          withArrow
                          label={'Resource'}
                          transitionProps={{
                            transition: 'fade',
                            duration: 200,
                          }}
                          className="font-medium shadow-2xl border-[1px] border-gray-200 text-[#003ab7]"
                          position="bottom"
                          arrowSize={6}
                          color="#fff"
                        >
                          <div>
                            {' '}
                            <IoCubeOutline className="text-lg" />
                          </div>
                        </Tooltip>
                      ),
                      value: 'react',
                    },
                    {
                      label: (
                        <Tooltip
                          withArrow
                          label={'Data'}
                          transitionProps={{
                            transition: 'fade',
                            duration: 200,
                          }}
                          className="font-medium shadow-2xl border-[1px] border-gray-200 text-[#003ab7]"
                          position="bottom"
                          arrowSize={6}
                          color="#fff"
                        >
                          <div>
                            {' '}
                            <IoCubeSharp className="text-lg" />
                          </div>
                        </Tooltip>
                      ),
                      value: 'ng',
                    },
                  ]}
                />
              </div>
              <Input
                placeholder="Search"
                className="w-full"
                value={searchValue}
                onChange={(event: any) => searchSubTabs(event.target.value)}
                leftSection={<IoSearch />}
                rightSectionPointerEvents="all"
                rightSection={
                  <CloseButton
                    className="cursor-pointer"
                    aria-label="Clear input"
                    onClick={() => {
                      searchSubTabs('')
                    }}
                    style={{ display: searchValue ? undefined : 'none' }}
                  />
                }
              />
              <hr className=" bg-black w-full" />

              <Accordion defaultValue="customization" className="w-full ">
                {selectedProvider &&
                  leftSideBarData[selectedProvider].tabs.map(
                    ({ title: parentTitle, icon: Icon, subTabs }: any) => (
                      <Accordion.Item
                        value={parentTitle}
                        key={parentTitle}
                        className={`${(open || openSearchResults) && 'hidden'}`}
                      >
                        <Accordion.Control>
                          <span className="flex  items-center font-semibold gap-2">
                            <Icon />
                            {parentTitle}
                          </span>{' '}
                        </Accordion.Control>
                        <Accordion.Panel>
                          <div className="grid grid-cols-3 gap-2 place-content-center py-4 ">
                            {subTabs.map(
                              ({
                                title,
                                icon: Icon,
                                subList,
                              }: SubTabInterface) => (
                                <Tooltip
                                  key={title}
                                  label={title}
                                  withArrow
                                  transitionProps={{
                                    transition: 'fade',
                                    duration: 200,
                                  }}
                                  className="font-medium shadow-2xl border-[1px] border-gray-200 text-[#003ab7]"
                                  position="right"
                                  arrowSize={6}
                                  color="#fff"
                                >
                                  <div
                                    className="w-full flex flex-col justify-center gap-1  items-center h-20 border-2 rounded-md p-1 hover:border-[1px] hover:border-blue-600 hover:bg-blue-50"
                                    onClick={() =>
                                      openSubMenu({
                                        parentIcon: Icon,
                                        parentTitle: parentTitle,
                                        subTitle: title,
                                        subList: subList,
                                      })
                                    }
                                  >
                                    {Icon ? (
                                      <Icon className="" />
                                    ) : (
                                      <IoCalculatorOutline className="text-5xl mx-auto p-1" />
                                    )}
                                    <p className="truncate text-xs w-4/5   text-center">
                                      {title}
                                    </p>
                                  </div>
                                </Tooltip>
                              ),
                            )}
                          </div>
                        </Accordion.Panel>
                      </Accordion.Item>
                    ),
                  )}

                {/* Subtabs options */}

                <div
                  className={`w-full min-h-full ${
                    (!open || openSearchResults) && 'hidden'
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
                      {activeSubList?.subList?.map(
                        (item: any, index: number) => (
                          <SubTab key={item.title} title={item.title} />
                        ),
                      )}
                    </ul>
                  </div>
                </div>

                {/* Search Results */}

                <div
                  className={`w-full min-h-full ${
                    !openSearchResults && 'hidden'
                  } `}
                >
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
                                    <p className="font-medium truncate  ">
                                      {item.title}
                                    </p>
                                    <p className="truncate text-xs ">
                                      {item.desc}
                                    </p>
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
              </Accordion>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
