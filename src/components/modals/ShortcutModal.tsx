import { shortcutsData1, shortcutsData2 } from '@/store/leftSideBarData'
import { LuKeyboard } from 'react-icons/lu'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import {
  TooltipTrigger,
  Tooltip,
  TooltipContent,
} from '@/components/ui/tooltip'

const ShortcutsModal = () => {
  return (
    <Dialog>
      <DialogContent className="w-4/5">
        <div className="flex justify-around w-full">
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
                      )
                    })}
                  </div>
                </div>
              )
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
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </DialogContent>

      <DialogTrigger>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="m-1 p-2 text-gray-800 cursor-pointer hover:bg-violet-200 hover:text-violet-600 rounded-sm flex item-center">
              <LuKeyboard />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-medium shadow-2xl border-[1px] border-gray-200 text-[#003ab7]">
              Shortcuts
            </p>
          </TooltipContent>
        </Tooltip>
      </DialogTrigger>
    </Dialog>
  )
}

export default ShortcutsModal
