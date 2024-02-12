'use client'
import { useEffect, useState } from 'react'
import { IoAddCircleOutline } from 'react-icons/io5'
import { IoIosRocket } from 'react-icons/io'
import { FiPenTool } from 'react-icons/fi'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip'
import appwriteService from '@/appwrite/config'
import { DropdownMenuDemo } from './avatarDropDown'

const Header = () => {
  const [selectedTool, setSelectedTool] = useState<string | null>('pen')
  const [user, setUser] = useState<any>(null)
  useEffect(() => {
    ;(async () => {
      const userData = await appwriteService.getCurrentUser()
      setUser(userData)
      console.log(userData)
    })()
  }, [])
  const handleToolClick = (tool: string) => {
    setSelectedTool(tool === selectedTool ? null : tool)
  }

  return (
    <>
      <div className="px-4 py-3 border-b border-gray-200 flex items-center  gap-[30rem] z-50 h-[4rem]">
        <Button
          variant="default"
          className="hover:bg-[#714eff] hover:text-white space-x-2"
        >
          <IoAddCircleOutline size={20} />
          <span>New Architecture</span>
        </Button>
        <div className="flex  rounded-md bg-[#f1f5f9] p-1 mr-auto">
          <Tooltip>
            <TooltipContent side="bottom">
              <p className="font-medium shadow-2xl border-[1px] border-gray-200 text-[#003ab7]">
                Design
              </p>
            </TooltipContent>
            <TooltipTrigger>
              <div
                className={`px-3 py-1 flex items-center rounded-md ${
                  selectedTool === 'pen' ? 'bg-white' : ''
                }`}
                onClick={() => handleToolClick('pen')}
              >
                <FiPenTool size={20} />
              </div>
            </TooltipTrigger>
          </Tooltip>
          <Tooltip>
            <TooltipContent>
              <p className="font-medium shadow-2xl border-[1px] border-gray-200 text-[#003ab7]">
                CI/CD
              </p>
            </TooltipContent>
            <TooltipTrigger>
              <div
                className={`px-3 py-1 flex items-center rounded-md ${
                  selectedTool === 'rocket' ? 'bg-white' : ''
                }`}
                onClick={() => handleToolClick('rocket')}
              >
                <IoIosRocket size={20} />
              </div>
            </TooltipTrigger>
          </Tooltip>
        </div>

        <DropdownMenuDemo user={user} />
      </div>
    </>
  )
}

export default Header
