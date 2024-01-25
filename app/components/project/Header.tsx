import { useState } from 'react';
import { Avatar, Button, Tooltip } from '@mantine/core';
import { IoAddCircleOutline, IoHelpBuoyOutline } from 'react-icons/io5';
import { RiGraduationCapFill, RiArrowDropDownLine } from 'react-icons/ri';
import { IoIosRocket } from 'react-icons/io';
import { FiPenTool } from 'react-icons/fi';

const Header = () => {
  const [selectedTool, setSelectedTool] = useState<string | null>('pen');

  const handleToolClick = (tool: string) => {
    setSelectedTool(tool === selectedTool ? null : tool);
  };

  return (
    <>
      <div className="px-4 py-3 border-b border-gray-200 flex items-center gap-[30rem] z-50">
        <Button
          leftSection={<IoAddCircleOutline size={20} />}
          color="#714eff"
          variant="light"
          className="hover:bg-[#714eff] hover:text-white"
        >
          New Architecture
        </Button>
        <div className="flex  rounded-md bg-[#f1f5f9] p-1">
          <Tooltip
            label="Design"
            withArrow
            position="bottom"
            arrowSize={8}
            c="violet"
            color={selectedTool === 'pen' ? 'white' : 'transparent'}
            style={{
              boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
              fontSize: '1rem',
              fontWeight: 'bolder',
            }}
          >
            <div
              className={`px-3 py-1 flex items-center rounded-md ${
                selectedTool === 'pen' ? 'bg-white' : ''
              }`}
              onClick={() => handleToolClick('pen')}
            >
              <FiPenTool size={20} />
            </div>
          </Tooltip>
          <Tooltip
            label="CI/CD"
            withArrow
            position="bottom"
            arrowSize={8}
            c="violet"
            color={selectedTool === 'rocket' ? 'white' : 'transparent'}
            style={{
              boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
              fontSize: '1rem',
              fontWeight: 'bold',
            }}
          >
            <div
              className={`px-3 py-1 flex items-center rounded-md ${
                selectedTool === 'rocket' ? 'bg-white' : ''
              }`}
              onClick={() => handleToolClick('rocket')}
            >
              <IoIosRocket size={20} />
            </div>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default Header;
