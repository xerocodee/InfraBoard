'use client'

import React, { useState } from 'react'
import { PiDotsSixVerticalBold } from 'react-icons/pi'
import { IoMdReturnLeft } from 'react-icons/io'
import { FaRegHand } from 'react-icons/fa6'
import { TfiLocationArrow } from 'react-icons/tfi'
import { MdGridOn } from 'react-icons/md'
import { RiZoomInLine, RiZoomOutLine } from 'react-icons/ri'
import { HiOutlineViewfinderCircle } from 'react-icons/hi2'
import { LuRedo, LuUndo } from 'react-icons/lu'
import Draggable from 'react-draggable'
import { BsPlusSquareDotted } from 'react-icons/bs'
import ShortcutsModal from '../modals/ShortcutModal'
import ReadmeModal from '../modals/ReadmeModal'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const Drag = ({
  setShowBackgroundImage,
  handleZoomIn,
  handleZoomOut,
  handleFitContent,
}: any) => {
  const [position, setPosition] = useState({ x: 450, y: 27 })
  const [isDragged, setIsDragged] = useState(false)
  const [currentMode, setCurrentMode] = useState('move')
  const [currentGridMode, setCurrentGridMode] = useState('grid')

  const handleDrag = (data: any) => {
    setPosition({ x: data.x, y: data.y })
    setIsDragged(true)
  }

  const handleReturnToInitial = () => {
    setPosition({ x: 450, y: 10 })
    setIsDragged(false)
  }

  const handleModeToggle = () => {
    setCurrentMode((prevMode) => (prevMode === 'move' ? 'select' : 'move'))
  }

  const handleModeToggleGrid = () => {
    setCurrentGridMode((prev) => (prev === 'grid' ? 'square' : 'grid'))
    setShowBackgroundImage((prev: any) => !prev)
  }

  const handleZoomInIcon = () => {
    if (handleZoomIn) {
      handleZoomIn()
    }
  }

  const handleZoomOutIcon = () => {
    if (handleZoomOut) {
      handleZoomOut()
    }
  }

  const handleFitContentIcon = () => {
    if (handleFitContent) {
      handleFitContent()
    }
  }

  return (
    <Draggable handle=".drag-handle " position={position} onDrag={handleDrag}>
      <div className="flex  w-[50%] z-[9999] absolute">
        <div className=" flex  border rounded-lg shadow-xl items-center bg-white z-20">
          <PiDotsSixVerticalBold
            className="drag-handle cursor-move"
            size={20}
          />
          {isDragged && (
            <div
              className="flex flex-col items-center justify-center bg-green"
              onClick={handleReturnToInitial}
            >
              <Tooltip>
                <TooltipContent side="bottom">
                  <p className="font-medium shadow-2xl border-[1px] border-gray-200 text-[#003ab7]">
                    Return to initial position
                  </p>
                </TooltipContent>
                <TooltipTrigger asChild>
                  <span className="m-1 p-2 block  text-gray-800 cursor-pointer hover:bg-violet-200 hover:text-violet-600 rounded-sm">
                    <IoMdReturnLeft />
                  </span>
                </TooltipTrigger>
              </Tooltip>
            </div>
          )}
          {currentMode === 'move' ? (
            <Tooltip>
              <TooltipContent>
                <p className="font-medium shadow-2xl border-[1px] border-gray-200 text-[#003ab7]">
                  Switch to move mode
                </p>
              </TooltipContent>
              <TooltipTrigger asChild>
                <span className="m-1 p-2 block text-gray-800 cursor-pointer hover:bg-violet-200 hover:text-violet-600 rounded-sm">
                  <FaRegHand onClick={handleModeToggle} />
                </span>
              </TooltipTrigger>
            </Tooltip>
          ) : (
            <Tooltip>
              <TooltipContent>
                <p className="font-medium shadow-2xl border-[1px] border-gray-200 text-[#003ab7]">
                  Switch to select mode
                </p>
              </TooltipContent>
              <TooltipTrigger asChild>
                <span className="m-1 p-2 block text-gray-800 cursor-pointer hover:bg-violet-200 hover:text-violet-600 rounded-sm">
                  <TfiLocationArrow onClick={handleModeToggle} />
                </span>
              </TooltipTrigger>
            </Tooltip>
          )}
          {currentGridMode === 'grid' ? (
            <Tooltip>
              <TooltipContent>
                <p className="font-medium shadow-2xl border-[1px] border-gray-200 text-[#003ab7]">
                  Change the grid into dots
                </p>
              </TooltipContent>
              <TooltipTrigger asChild>
                <span className="m-1 p-2 block text-gray-800 cursor-pointer hover:bg-violet-200 hover:text-violet-600 rounded-sm">
                  <MdGridOn onClick={handleModeToggleGrid} />
                </span>
              </TooltipTrigger>
            </Tooltip>
          ) : (
            <Tooltip>
              <TooltipContent>
                <p className="font-medium shadow-2xl border-[1px] border-gray-200 text-[#003ab7]">
                  Change the grid into squares
                </p>
              </TooltipContent>
              <TooltipTrigger asChild>
                <span className="m-1 p-2 block text-gray-800 cursor-pointer hover:bg-violet-200 hover:text-violet-600 rounded-sm">
                  <BsPlusSquareDotted onClick={handleModeToggleGrid} />
                </span>
              </TooltipTrigger>
            </Tooltip>
          )}
          <Tooltip>
            <TooltipContent>
              <p className="font-medium shadow-2xl border-[1px] border-gray-200 text-[#003ab7]">
                Zoom in (+)
              </p>
            </TooltipContent>
            <TooltipTrigger asChild>
              <span
                className="m-1 p-2 block text-gray-800 cursor-pointer hover:bg-violet-200 hover:text-violet-600 rounded-sm"
                onClick={handleZoomInIcon}
              >
                <RiZoomInLine />
              </span>
            </TooltipTrigger>
          </Tooltip>
          <Tooltip>
            <TooltipContent>
              <p className="font-medium shadow-2xl border-[1px] border-gray-200 text-[#003ab7]">
                Fit content in the view
              </p>
            </TooltipContent>
            <TooltipTrigger asChild>
              <span
                className="m-1 p-2 block text-gray-800 cursor-pointer hover:bg-violet-200 hover:text-violet-600 rounded-sm"
                onClick={handleFitContentIcon}
              >
                <HiOutlineViewfinderCircle />
              </span>
            </TooltipTrigger>
          </Tooltip>
          <Tooltip>
            <TooltipContent>
              <p className="font-medium shadow-2xl border-[1px] border-gray-200 text-[#003ab7]">
                Zoom out (-)
              </p>
            </TooltipContent>
            <TooltipTrigger asChild>
              <span
                className="m-1 p-2 block text-gray-800 cursor-pointer hover:bg-violet-200 hover:text-violet-600 rounded-sm"
                onClick={handleZoomOutIcon}
              >
                <RiZoomOutLine />
              </span>
            </TooltipTrigger>
          </Tooltip>
          <Tooltip>
            <TooltipContent>
              <p className="font-medium shadow-2xl border-[1px] border-gray-200 text-[#003ab7]">
                Undo (CTRL + Z)
              </p>
            </TooltipContent>
            <TooltipTrigger asChild>
              <span className="m-1 p-2 block text-gray-800 cursor-pointer hover:bg-violet-200 hover:text-violet-600 rounded-sm">
                <LuUndo />
              </span>
            </TooltipTrigger>
          </Tooltip>
          <Tooltip>
            <TooltipContent>
              <p className="font-medium shadow-2xl border-[1px] border-gray-200 text-[#003ab7]">
                Redo (CTRL + shift + Z)
              </p>
            </TooltipContent>
            <TooltipTrigger asChild>
              <span className="m-1 p-2 block text-gray-800 cursor-pointer hover:bg-violet-200 hover:text-violet-600 rounded-sm">
                <LuRedo />
              </span>
            </TooltipTrigger>
          </Tooltip>
          <ReadmeModal />
          <ShortcutsModal />
        </div>
      </div>
    </Draggable>
  )
}

export default Drag
