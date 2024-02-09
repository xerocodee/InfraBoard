// import MonacoEditor from 'react-monaco-editor'
import dynamic from 'next/dynamic'
const MonacoEditor = dynamic(() => import('react-monaco-editor'), {
  ssr: false,
})
import { DroppedItem } from '@/types/types'
import React from 'react'
import { FaFileDownload } from 'react-icons/fa'
import { FaDownload } from 'react-icons/fa'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TooltipContent, TooltipTrigger, Tooltip } from '../ui/tooltip'
import {
  SelectContent,
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

interface CodeEditorProps {
  droppedItems: DroppedItem[]
}

const CodeEditor: React.FC<CodeEditorProps> = ({ droppedItems }) => {
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
      <div className="mb-2 space-y-1">
        <Tabs defaultValue="gallery" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="gallery" className="uppercase w-full">
              TerraForm Code
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="grid grid-cols-2 gap-2 px-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Select defaultValue={'aws'}>
                <SelectTrigger className="w-full focus-visible:ring-1">
                  <SelectValue placeholder="Select the service provider" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aws">main.tf</SelectItem>
                </SelectContent>
              </Select>
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-medium shadow-2xl border-[1px] border-gray-200 text-[#003ab7]">
                Select a tf file
              </p>
            </TooltipContent>
          </Tooltip>
          <div className="space-x-2">
            <Tooltip>
              <TooltipTrigger className="p-3">
                <div className="text-zinc-600 w-fit border-zinc-200 bg-zinc-100 hover:bg-white hover:text-black">
                  <FaFileDownload />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-medium shadow-2xl border-[1px] border-gray-200 text-[#003ab7]">
                  Download Selected File
                </p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger className="p-3">
                <div className="text-zinc-600 w-fit border-zinc-200 bg-zinc-100 hover:bg-white hover:text-black">
                  <FaDownload />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-medium shadow-2xl border-[1px] border-gray-200 text-[#003ab7]">
                  Download All Files
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
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
