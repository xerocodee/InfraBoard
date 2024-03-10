'use client'
import React, { useState } from 'react'
import Drag from '../drag'
import { useDrop } from 'react-dnd'
import { DroppedItem } from '@/types/types'
import { ResizableBox } from 'react-resizable'
import '@/styles/resizable.css'
import Draggable from 'react-draggable'
import { IoCalculatorOutline } from 'react-icons/io5'
interface CanvasProps {
  onItemDrop: (newItem: DroppedItem) => void
  droppedItems: DroppedItem[]
}
const Canvas: React.FC<CanvasProps> = ({ onItemDrop, droppedItems }) => {
  const [_scale, _setScale] = useState(1)
  const [_left, _setLeft] = useState(0)
  const [_top, _setTop] = useState(0)
  const [_initX, _setInitX] = useState(0)
  const [_initY, _setInitY] = useState(0)
  const [showBackgroundImage, setShowBackgroundImage] = useState(true)
  const [backgroundSizeX, setBackgroundSizeX] = useState('16px')
  const [backgroundSizeY, setBackgroundSizeY] = useState('16px')

  const handleZoomIn = () => {
    const newBackgroundSizeX = parseInt(backgroundSizeX) + 2 + 'px'
    const newBackgroundSizeY = parseInt(backgroundSizeY) + 2 + 'px'

    setBackgroundSizeX(newBackgroundSizeX)
    setBackgroundSizeY(newBackgroundSizeY)

    setShowBackgroundImage((prev: any) => ({
      ...prev,
      backgroundSize: `${newBackgroundSizeX} ${newBackgroundSizeY}`,
    }))
  }

  const handleZoomOut = () => {
    const newBackgroundSizeX = parseInt(backgroundSizeX) - 2 + 'px'
    const newBackgroundSizeY = parseInt(backgroundSizeY) - 2 + 'px'

    setBackgroundSizeX(newBackgroundSizeX)
    setBackgroundSizeY(newBackgroundSizeY)

    setShowBackgroundImage((prev: any) => ({
      ...prev,
      backgroundSize: `${newBackgroundSizeX} ${newBackgroundSizeY}`,
    }))
  }

  const handleFitContent = () => {
    setBackgroundSizeX('16px')
    setBackgroundSizeY('16px')

    setShowBackgroundImage((prev: any) => ({
      ...prev,
      backgroundSize: '16px 16px',
    }))
  }

  const [, drop] = useDrop({
    accept: 'SUBTAB',
    drop: (item: any, monitor: any) => {
      if (!monitor) {
        return
      }

      const clientOffset = monitor.getClientOffset()
      if (!clientOffset) {
        return
      }

      const newItem: DroppedItem = {
        subTab: (item as any).subTab,
        position: {
          x: clientOffset.x,
          y: clientOffset.y,
        },
      }

      // Call the callback to update the common state
      onItemDrop(newItem)
    },
  })

  return (
    <div>
      <div
        ref={drop}
        className="h-[calc(100vh-4rem)] w-[100vw] -z-1"
        style={{
          backgroundImage: ' radial-gradient(#b9b9b9 1px, transparent 0)',
          backgroundSize: '20px 20px',
        }}
      >
        <Drag
          setShowBackgroundImage={setShowBackgroundImage}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          handleFitContent={handleFitContent}
        />
        {droppedItems.map((droppedItem, index) => {
          console.log(droppedItem.subTab.icon)
          const Icon = droppedItem.subTab.icon
          return (
            <Draggable
              key={index}
              defaultPosition={{
                x: droppedItem.position.x,
                y: droppedItem.position.y,
              }}
              onStop={(e, data) => {
                // Handle dragging logic if needed
              }}
            >
              <ResizableBox
                width={70}
                height={70}
                minConstraints={[50, 50]}
                maxConstraints={[150, 150]}
                onResize={(e, data) => {
                  // Handle resizing logic if needed
                }}
                lockAspectRatio={true}
                style={{
                  position: 'absolute',
                  border: '1px solid #ccc',
                  padding: '10px',
                  borderRadius: '5px',
                  backgroundColor: '#fff',
                  boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
                }}
              >
                <div className="flex w-full justify-center items-center">
                  <IoCalculatorOutline className="w-full h-full" />
                </div>
                {/* Render the subList items */}
              </ResizableBox>
            </Draggable>
          )
        })}
      </div>
    </div>
  )
}

export default Canvas
