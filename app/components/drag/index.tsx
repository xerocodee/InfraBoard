'use client';

import React, { useState } from 'react';
import { PiDotsSixVerticalBold } from 'react-icons/pi';
import { IoMdReturnLeft } from 'react-icons/io';
import { FaRegHand } from 'react-icons/fa6';
import { TfiLocationArrow } from 'react-icons/tfi';
import { MdGridOn } from 'react-icons/md';
import { RiZoomInLine, RiZoomOutLine } from 'react-icons/ri';
import { HiOutlineViewfinderCircle } from 'react-icons/hi2';
import { LuRedo, LuUndo, LuKeyboard } from 'react-icons/lu';
import {} from 'react-icons/lu';
import { FiGitBranch, FiClock, FiFileText } from 'react-icons/fi';
import { Tooltip } from '@mantine/core';
import Draggable from 'react-draggable';

const icons = [
  // {
  //   icon: <IoMdReturnLeft />,
  //   tooltip: 'Return to initial position',
  // },
  {
    icon: <FaRegHand />,
    tooltip: 'Switch to move mode',
  },
  {
    icon: <TfiLocationArrow />,
    tooltip: 'Switch to select mode',
  },
  {
    icon: <MdGridOn />,
    tooltip: 'Change the grid into dots',
  },
  {
    icon: <RiZoomInLine />,
    tooltip: 'Zoom in (+)',
  },
  {
    icon: <HiOutlineViewfinderCircle />,
    tooltip: 'Fit content in the view',
  },
  {
    icon: <RiZoomOutLine />,
    tooltip: 'Zoom out (-)',
  },
  {
    icon: <LuRedo />,
    tooltip: 'Undo (CTRL + Z)',
  },
  {
    icon: <LuUndo />,
    tooltip: 'Redo (CTRL + shift + Z)',
  },
  {
    icon: <FiGitBranch />,
    tooltip: 'Create new Version',
  },
  {
    icon: <FiClock />,
    tooltip: 'Show versions',
  },
  {
    icon: <FiFileText />,
    tooltip: 'Readme',
  },
  {
    icon: <LuKeyboard />,
    tooltip: 'Shortcuts',
  },
];

const Drag = () => {
   const [position, setPosition] = useState({ x: 0, y: 0 });
   const [isDragged, setIsDragged] = useState(false);

   const handleDrag = (data:any) => {
     setPosition({ x: data.x, y: data.y });
     setIsDragged(true);
   };

   const handleReturnToInitial = () => {
     setPosition({ x: 0, y: 0 });
     setIsDragged(false);
   };

  return (
    <Draggable
      handle=".drag-handle "
      position={position}
      onDrag={handleDrag}
    >
      <div className="flex  w-[50%] z-20">
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
              <Tooltip
                label="Return to initial position"
                withArrow
                position="bottom"
                arrowSize={8}
                c="violet"
                color="white"
                style={{
                  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                  fontSize: '1rem',
                  fontWeight: 'bolder',
                }}
              >
                <div className="m-1 p-2 text-gray-800 cursor-pointer hover:bg-violet-200 hover:text-violet-600 rounded-sm">
                  <IoMdReturnLeft />
                </div>
              </Tooltip>
            </div>
          )}
          {icons.map((icon, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-green "
            >
              <Tooltip
                label={icon.tooltip}
                withArrow
                position="bottom"
                arrowSize={8}
                c="violet"
                color="white"
                style={{
                  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                  fontSize: '1rem',
                  fontWeight: 'bolder',
                }}
              >
                <div className="m-1 p-2 text-gray-800 cursor-pointer hover:bg-violet-200 hover:text-violet-600 rounded-sm">
                  {icon.icon}
                </div>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
    </Draggable>
  );
};

export default Drag;
