import { FiFileText } from 'react-icons/fi'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import {
  TooltipTrigger,
  Tooltip,
  TooltipContent,
} from '@/components/ui/tooltip'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
const ReadmeModal = () => {
  return (
    <Dialog>
      <DialogContent className="w-4/5">
        <div className="flex justify-around flex-col gap-4">
          <div className="flex ">
            <p>
              The read me file of the current architecture. It will be pushed
              into your repo when you create a pull request.
            </p>
          </div>
          <Textarea />
          <div className="flex gap-4">
            <Button>SAVE</Button>
            <Button>CLOSE</Button>
          </div>
        </div>
      </DialogContent>

      <DialogTrigger>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="m-1 p-2 text-gray-800 cursor-pointer hover:bg-violet-200 hover:text-violet-600 rounded-sm flex item-center">
              <FiFileText />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-medium shadow-2xl border-[1px] border-gray-200 text-[#003ab7]">
              Readme
            </p>
          </TooltipContent>
        </Tooltip>
      </DialogTrigger>
    </Dialog>
  )
}

export default ReadmeModal
