import {
  IoCubeOutline,
  IoCubeSharp,
  IoSearch,
  IoCalculatorOutline,
} from 'react-icons/io5';
import {
  SegmentedControl,
  TextInput,
  Select,
  Accordion,
  Divider,
  Input,
} from '@mantine/core';
import { BsDashSquareDotted } from 'react-icons/bs';

export default function SideBar() {
  return (
    <>
      <div className="md:flex md:w-1/5 md:flex-col md:fixed md:inset-y-0 mt-[62px] z-[49]">
        <div className="flex justify-between flex-col sm:flex-row md:flex-col md:flex-grow md:pt-1 p-3  bg-white border-[1px] border-slate-200 overflow-y-auto">
          <div className=" flex-1 flex flex-col items-center sm:flex-row md:flex-col justify-end w-full">
            <nav className="flex md:flex-1 flex-col sm:flex-row md:flex-col items-center md:space-y-2 w-full">
              <div className="grid grid-cols-3 w-full gap-2">
                <Select
                  placeholder="Pick one"
                  data={[
                    { value: 'react', label: 'React' },
                    { value: 'ng', label: 'Angular' },
                    { value: 'svelte', label: 'Svelte' },
                    { value: 'vue', label: 'Vue' },
                  ]}
                />
                <Select
                  placeholder="Pick one"
                  data={[
                    { value: 'react', label: 'React' },
                    { value: 'ng', label: 'Angular' },
                    { value: 'svelte', label: 'Svelte' },
                    { value: 'vue', label: 'Vue' },
                  ]}
                />
                <SegmentedControl
                  data={[
                    {
                      label: <IoCubeOutline className="text-lg" />,
                      value: 'react',
                    },
                    { label: <IoCubeSharp className="text-lg" />, value: 'ng' },
                  ]}
                />
              </div>
              <Input
                placeholder="Search"
                className="w-full"
                leftSection={<IoSearch />}
              />
              <hr className=" bg-black w-full" />

              <Accordion defaultValue="customization" className="w-full">
                <Accordion.Item value="customization" className="px-0">
                  <Accordion.Control className="px-0">
                    <span className="flex  items-center font-semibold gap-2">
                      {' '}
                      <BsDashSquareDotted />
                      Areas
                    </span>
                  </Accordion.Control>
                  <Accordion.Panel>
                    Colors, fonts, shadows and many other parts are customizable
                    to fit your design needs
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="flexibility">
                  <Accordion.Control>
                    <span className="flex  items-center font-semibold gap-2">
                      <IoCalculatorOutline />
                      Compute
                    </span>{' '}
                  </Accordion.Control>
                  <Accordion.Panel>
                    Configure components appearance and behavior with vast
                    amount of settings or overwrite any part of component styles
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="f">
                  <Accordion.Control>
                    <span className="flex  items-center font-semibold gap-2">
                      <IoCalculatorOutline />
                      Network
                    </span>{' '}
                  </Accordion.Control>
                  <Accordion.Panel>
                    Configure components appearance and behavior with vast
                    amount of settings or overwrite any part of component styles
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="s">
                  <Accordion.Control>
                    <span className="flex  items-center font-semibold gap-2">
                      <IoCalculatorOutline />
                      Storage
                    </span>{' '}
                  </Accordion.Control>
                  <Accordion.Panel>
                    <div className="grid grid-cols-3 gap-2 place-content-center">
                      <div className="w-full h-20 border-2 rounded p-1 hover:border-[1px] hover:border-blue-600 hover:bg-blue-50">
                        <IoCalculatorOutline className="text-5xl mx-auto p-1" />
                        <p className="truncate text-xs   text-center">
                          Cloud Run
                        </p>
                      </div>
                      <div className="w-full h-20 border-2 rounded p-1 hover:border-[1px] hover:border-blue-600 hover:bg-blue-50">
                        <IoCalculatorOutline className="text-5xl mx-auto p-1" />
                        <p className="truncate text-xs   text-center">
                          Cloud Run
                        </p>
                      </div>
                      <div className="w-full h-20 border-2 rounded p-1 hover:border-[1px] hover:border-blue-600 hover:bg-blue-50">
                        <IoCalculatorOutline className="text-5xl mx-auto p-1" />
                        <p className="truncate text-xs   text-center">
                          Cloud Run
                        </p>
                      </div>
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
