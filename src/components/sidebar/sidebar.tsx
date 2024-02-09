'use client'
import {
  IoCubeOutline,
  IoCubeSharp,
  IoCalculatorOutline,
} from 'react-icons/io5'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Input } from '@/components/ui/input'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { leftSideBarData } from '@/store/leftSideBarData'
import { useState } from 'react'
import { useDrag } from 'react-dnd'
import SubTabs from './subTabs'
import SearchResults from './searchResults'

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
    type: 'SUBTAB',
    item: {
      subTab: activeSubList,
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
                <Tooltip>
                  <Select
                    defaultValue={'aws'}
                    onValueChange={(value: any) => handleProviderChange(value)}
                  >
                    <TooltipTrigger asChild>
                      <SelectTrigger className="w-full focus-visible:ring-1">
                        <SelectValue placeholder="Select the service provider" />
                      </SelectTrigger>
                    </TooltipTrigger>
                    <SelectContent>
                      <SelectItem value="aws">AWS</SelectItem>
                      <SelectItem value="gcp">GCP</SelectItem>
                    </SelectContent>
                  </Select>
                  <TooltipContent>
                    <p className="font-medium shadow-2xl border-[1px] border-gray-200 text-[#003ab7]">
                      Select a cloud provider
                    </p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipContent side="bottom">
                    <p className="font-medium shadow-2xl border-[1px] border-gray-200 text-[#003ab7]">
                      Select a version for cloud provider&apos;s resources
                    </p>
                  </TooltipContent>
                  <Select
                    defaultValue={
                      selectedProvider
                        ? leftSideBarData[selectedProvider].versions[0].version
                        : ''
                    }
                  >
                    <TooltipTrigger asChild>
                      <SelectTrigger className="w-full focus-visible:ring-1">
                        <SelectValue placeholder="Select the version" />
                      </SelectTrigger>
                    </TooltipTrigger>

                    <SelectContent>
                      {selectedProvider &&
                        leftSideBarData[selectedProvider].versions.map(
                          (item: any) => (
                            <SelectItem value={item.version} key={item.version}>
                              {item.version}
                            </SelectItem>
                          ),
                        )}
                    </SelectContent>
                  </Select>
                </Tooltip>

                <ToggleGroup
                  type="single"
                  className="bg-gray-200 rounded-sm p-1"
                  defaultValue="a"
                >
                  <ToggleGroupItem value="a" className="h-fit w-fit p-1">
                    {' '}
                    <IoCubeOutline className="text-md" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="b" className="h-fit w-fit p-1">
                    {' '}
                    <IoCubeSharp className="text-md" />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <Input
                placeholder="Search"
                className="w-full focus-visible:ring-1  rounded-sm"
                value={searchValue}
                onChange={(event: any) => searchSubTabs(event.target.value)}
              />
              <hr className=" bg-black w-full" />
              <Accordion type="single" collapsible className="w-full ">
                {selectedProvider &&
                  leftSideBarData[selectedProvider].tabs.map(
                    ({
                      title: parentTitle,
                      icon: ParentIcon,
                      subTabs,
                    }: any) => {
                      return (
                        <AccordionItem
                          value={parentTitle}
                          key={parentTitle}
                          className={`${(open || openSearchResults) && 'hidden'}`}
                        >
                          <AccordionTrigger className="py-3">
                            <span className="flex  items-center font-semibold gap-2 ">
                              {ParentIcon && <ParentIcon />}
                              {parentTitle}
                            </span>{' '}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="grid grid-cols-3 gap-2 place-content-center py-4 ">
                              {subTabs.map(
                                ({
                                  title,
                                  icon: Icon,
                                  subList,
                                }: SubTabInterface) => {
                                  return (
                                    <Tooltip key={title}>
                                      <TooltipTrigger>
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
                                            <Icon className="rounded-md" />
                                          ) : (
                                            <IoCalculatorOutline className="text-5xl mx-auto p-1 rounded-md" />
                                          )}
                                          <p className="truncate text-xs w-4/5  text-center">
                                            {title}
                                          </p>
                                        </div>
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        {' '}
                                        <p className="font-medium shadow-2xl border-[1px] border-gray-200 text-[#003ab7]">
                                          {title}
                                        </p>
                                      </TooltipContent>
                                    </Tooltip>
                                  )
                                },
                              )}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      )
                    },
                  )}
                {/* Subtabs options */}
                <SubTabs
                  open={open}
                  setOpen={setOpen}
                  openSearchResults={openSearchResults}
                  activeSubList={activeSubList}
                />
                {/* Search Results */}
                <SearchResults
                  openSearchResults={openSearchResults}
                  searchResults={searchResults}
                  activeSubList={activeSubList}
                />
              </Accordion>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
