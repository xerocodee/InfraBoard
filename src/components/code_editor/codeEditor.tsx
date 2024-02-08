// CodeEditor.tsx
import { DroppedItem } from '@/types/types'
import React from 'react'
import MonacoEditor from 'react-monaco-editor'
import { Button, Select, Tabs, Tooltip } from '@mantine/core'
import { FaFileDownload } from 'react-icons/fa'
import { FaDownload } from 'react-icons/fa'
interface CodeEditorProps {
  droppedItems: DroppedItem[]
}

const CodeEditor: React.FC<CodeEditorProps> = ({ droppedItems }) => {
  // Extract relevant data from droppedItems and format it as needed
  const code = droppedItems
    .map(
      (item) =>
        `// Position: x=${item.position.x}, y=${item.position.y}\n` +
        `// SubTab Title: ${item.subTab.title}\n` +
        `// SubTab Icon: ${item.subTab.icon}\n` +
        `// SubList: ${JSON.stringify(item.subTab.subList)}\n\n`,
    )
    .join('')

  return (
    <div className="absolute top-[4rem] right-0 w-[25%] border-zinc-200 border-[1px] bg-white">
      <div className="my-2 space-y-1">
        <Tabs defaultValue="gallery">
          <Tabs.List>
            <Tabs.Tab value="gallery" className="uppercase w-full">
              TerraForm Code
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
        <div className="grid grid-cols-2">
          <Select
            className="mx-2 w-fit"
            defaultValue={'main.tf'}
            checkIconPosition="right"
            placeholder="Pick value"
            data={['main.tf']}
          />
          <Button.Group>
            <Tooltip
              withArrow
              label={'Download Selected File'}
              transitionProps={{
                transition: 'fade',
                duration: 200,
              }}
              className="font-medium shadow-2xl border-[1px] border-gray-200 text-[#003ab7]"
              position="bottom"
              arrowSize={6}
              color="#fff"
            >
              <Button className="text-zinc-500 w-fit border-zinc-200">
                <FaFileDownload />
              </Button>
            </Tooltip>
            <Tooltip
              withArrow
              label={'Download All Files'}
              transitionProps={{
                transition: 'fade',
                duration: 200,
              }}
              className="font-medium shadow-2xl border-[1px] border-gray-200 text-[#003ab7]"
              position="bottom"
              arrowSize={6}
              color="#fff"
            >
              <Button className="text-zinc-500 w-fit border-zinc-200">
                <FaDownload />
              </Button>
            </Tooltip>
          </Button.Group>
        </div>
      </div>
      <MonacoEditor
        width="100%"
        height="calc(100vh - 10rem)"
        language="javascript"
        theme="vs-dark"
        value={code}
      />
    </div>
  )
}

export default CodeEditor
