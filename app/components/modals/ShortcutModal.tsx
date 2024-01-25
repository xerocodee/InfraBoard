import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button, Tooltip } from '@mantine/core';
import { shortcutsData1 } from 'store/leftSideBarData';
import { shortcutsData2 } from 'store/leftSideBarData';
import { LuKeyboard } from 'react-icons/lu';

const ShortcutsModal = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        size="70%"
        className="bg-[#212121]"
        title="Shortcuts"
      >
        <div className="flex justify-around ">
          <div>
            {shortcutsData1.map((item, index) => {
              return (
                <div key={index} className="flex flex-col gap-4 ">
                  <h3 className="text-[1.1rem] font-bold">{item.type}</h3>
                  <div>
                    {item.subType.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="flex justify-between items-center"
                        >
                          <h4>{item.shortcutType}</h4>
                          <p className="text-[#999999]">
                            {item.shortcutDescription}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            {shortcutsData2.map((item, index) => {
              return (
                <div key={index} className="flex flex-col gap-4 ">
                  <h3 className="text-[1.1rem] font-bold">{item.type}</h3>
                  <div>
                    {item.subType.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="flex justify-between items-center"
                        >
                          <h4>{item.shortcutType}</h4>
                          <p className="text-[#999999]">
                            {item.shortcutDescription}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Modal>

      <Group>
        <Tooltip
          label="Shortcuts"
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
            onClick={open}
          >
            <LuKeyboard />
          </div>
        </Tooltip>
      </Group>
    </>
  );
};

export default ShortcutsModal;
