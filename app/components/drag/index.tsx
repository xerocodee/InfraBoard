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
import { FiFileText } from 'react-icons/fi';
import { Tooltip } from '@mantine/core';
import Draggable from 'react-draggable';
import { BsPlusSquareDotted } from 'react-icons/bs';
import ShortcutsModal from 'components/modals/ShortcutModal';
import ReadmeModal from 'components/modals/ReadmeModal';

const Drag = ({
  setShowBackgroundImage,
  handleZoomIn,
  handleZoomOut,
  handleFitContent,
}) => {
  const [position, setPosition] = useState({ x: 450, y: 10 });
  const [isDragged, setIsDragged] = useState(false);
  const [currentMode, setCurrentMode] = useState('move');
  const [currentGridMode, setCurrentGridMode] = useState('grid');

  const handleDrag = (data: any) => {
    setPosition({ x: data.x, y: data.y });
    setIsDragged(true);
  };

  const handleReturnToInitial = () => {
    setPosition({ x: 450, y: 10 });
    setIsDragged(false);
  };

  const handleModeToggle = () => {
    setCurrentMode((prevMode) => (prevMode === 'move' ? 'select' : 'move'));
  };

  const handleModeToggleGrid = () => {
    setCurrentGridMode((prev) => (prev === 'grid' ? 'square' : 'grid'));
    setShowBackgroundImage((prev) => !prev);
  };

  const handleZoomInIcon = () => {
    if (handleZoomIn) {
      handleZoomIn();
    }
  };

  const handleZoomOutIcon = () => {
    if (handleZoomOut) {
      handleZoomOut();
    }
  };

  const handleFitContentIcon = () => {
    if (handleFitContent) {
      handleFitContent();
    }
  };

  return (
    <Draggable handle=".drag-handle " position={position} onDrag={handleDrag}>
      <div className="flex  w-[50%] z-[9999]">
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
          {currentMode === 'move' ? (
            <Tooltip
              label="Switch to move mode"
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
                <FaRegHand onClick={handleModeToggle} />
              </div>
            </Tooltip>
          ) : (
            <Tooltip
              label="Switch to select mode"
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
                <TfiLocationArrow onClick={handleModeToggle} />
              </div>
            </Tooltip>
          )}
          {currentGridMode === 'grid' ? (
            <Tooltip
              label="Change the grid into dots"
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
                <MdGridOn onClick={handleModeToggleGrid} />
              </div>
            </Tooltip>
          ) : (
            <Tooltip
              label="Change the grid into squares"
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
                <BsPlusSquareDotted onClick={handleModeToggleGrid} />
              </div>
            </Tooltip>
          )}
          <Tooltip
            label="Zoom in (+)"
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
            <div
              className="m-1 p-2 text-gray-800 cursor-pointer hover:bg-violet-200 hover:text-violet-600 rounded-sm"
              onClick={handleZoomInIcon}
            >
              <RiZoomInLine />
            </div>
          </Tooltip>
          <Tooltip
            label="Fit content in the view"
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
            <div
              className="m-1 p-2 text-gray-800 cursor-pointer hover:bg-violet-200 hover:text-violet-600 rounded-sm"
              onClick={handleFitContentIcon}
            >
              <HiOutlineViewfinderCircle />
            </div>
          </Tooltip>
          <Tooltip
            label="Zoom out (-)"
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
            <div
              className="m-1 p-2 text-gray-800 cursor-pointer hover:bg-violet-200 hover:text-violet-600 rounded-sm"
              onClick={handleZoomOutIcon}
            >
              <RiZoomOutLine />
            </div>
          </Tooltip>
          <Tooltip
            label="Undo (CTRL + Z)"
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
              <LuUndo />
            </div>
          </Tooltip>
          <Tooltip
            label="Redo (CTRL + shift + Z)"
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
              <LuRedo />
            </div>
          </Tooltip>
          <ReadmeModal />
          <ShortcutsModal />
        </div>
      </div>
    </Draggable>
  );
};

export default Drag;
