import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Tooltip, Textarea, Button } from '@mantine/core';
import { shortcutsData1 } from 'store/leftSideBarData';
import { shortcutsData2 } from 'store/leftSideBarData';
import { FiFileText } from 'react-icons/fi';

const ReadmeModal = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        size="70%"
        className="bg-[#212121]"
        title="README.md"
      >
        <div className="flex justify-around flex-col gap-4">
          <div className="flex ">
            <p>
              The read me file of the current architecture. It will be pushed
              into your repo when you create a pull request.
            </p>
          </div>
          <Textarea />
          <div className="flex gap-4">
            <Button color="#714eff">SAVE</Button>
            <Button color="black" variant="outline">
              CLOSE
            </Button>
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
            <FiFileText />
          </div>
        </Tooltip>
      </Group>
    </>
  );
};

export default ReadmeModal;
