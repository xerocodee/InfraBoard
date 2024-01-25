import {
  IoCubeOutline,
  IoCubeSharp,
  IoSearch,
  IoCalculatorOutline,
} from 'react-icons/io5';
import {
  SegmentedControl,
  Select,
  Accordion,
  Input,
  Tooltip,
} from '@mantine/core';
import { leftSideBarData } from 'store/leftSideBarData';
import { useState } from 'react';

interface SubTabInterface {
  title: string;
  icon?: any;
}
export default function SideBar() {
  const [selectedProvider, setSelectedProvider] = useState<string | null>(
    'aws'
  );
  const handleProviderChange = (value: string | null) => {
    setSelectedProvider(value);
  };
  return (
    <>
      <div className="md:flex md:w-1/5 md:flex-col md:fixed md:inset-y-0 mt-[62px] z-[49]">
        <div className="flex justify-between flex-col sm:flex-row md:flex-col md:flex-grow md:pt-2 p-3  bg-white border-[1px] border-slate-200 overflow-y-auto">
          <div className=" flex-1 flex flex-col items-center sm:flex-row md:flex-col justify-end w-full">
            <nav className="flex md:flex-1 flex-col sm:flex-row md:flex-col items-center md:space-y-2 w-full">
              <div className="grid grid-cols-3 w-full gap-2">
                <Tooltip
                  withArrow
                  label={'Select a cloud provider'}
                  transitionProps={{
                    transition: 'fade',
                    duration: 200,
                  }}
                  className="font-medium shadow-2xl border-[1px] border-gray-200"
                  position="bottom"
                  arrowSize={6}
                  c="#003ab7"
                  color="#fff"
                >
                  <Select
                    placeholder="Pick one"
                    data={[
                      { value: 'aws', label: 'AWS' },
                      {
                        value: 'gcp',
                        label: 'GCP',
                      },
                    ]}
                    checkIconPosition="right"
                    defaultValue={'aws'}
                    onChange={(value) => handleProviderChange(value)}
                  />
                </Tooltip>
                <Tooltip
                  withArrow
                  label={"Select a version for cloud provider's resources"}
                  transitionProps={{
                    transition: 'fade',
                    duration: 200,
                  }}
                  className="font-medium shadow-2xl border-[1px] border-gray-200"
                  position="bottom"
                  arrowSize={6}
                  c="#003ab7"
                  color="#fff"
                >
                  <Select
                    checkIconPosition="right"
                    placeholder="Pick one"
                    defaultValue={
                      selectedProvider
                        ? leftSideBarData[selectedProvider].versions[0].version
                        : ''
                    }
                    data={
                      selectedProvider
                        ? leftSideBarData[selectedProvider].versions.map(
                            (item) => ({
                              value: item.version,
                              label: item.version,
                            })
                          )
                        : []
                    }
                  />
                </Tooltip>
                <SegmentedControl
                  data={[
                    {
                      label: (
                        <Tooltip
                          withArrow
                          label={'Resource'}
                          transitionProps={{
                            transition: 'fade',
                            duration: 200,
                          }}
                          className="font-medium shadow-2xl border-[1px] border-gray-200"
                          position="bottom"
                          arrowSize={6}
                          c="#003ab7"
                          color="#fff"
                        >
                          <div>
                            {' '}
                            <IoCubeOutline className="text-lg" />
                          </div>
                        </Tooltip>
                      ),
                      value: 'react',
                    },
                    {
                      label: (
                        <Tooltip
                          withArrow
                          label={'Data'}
                          transitionProps={{
                            transition: 'fade',
                            duration: 200,
                          }}
                          className="font-medium shadow-2xl border-[1px] border-gray-200"
                          position="bottom"
                          arrowSize={6}
                          c="#003ab7"
                          color="#fff"
                        >
                          <div>
                            {' '}
                            <IoCubeSharp className="text-lg" />
                          </div>
                        </Tooltip>
                      ),
                      value: 'ng',
                    },
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
                {selectedProvider &&
                  leftSideBarData[selectedProvider].tabs.map(
                    ({ title, icon: Icon, subTabs }) => (
                      <Accordion.Item value={title} key={title}>
                        <Accordion.Control>
                          <span className="flex  items-center font-semibold gap-2">
                            <Icon />
                            {title}
                          </span>{' '}
                        </Accordion.Control>
                        <Accordion.Panel>
                          <div className="grid grid-cols-3 gap-2 place-content-center py-4 ">
                            {subTabs.map(
                              ({ title, icon: Icon }: SubTabInterface) => (
                                <Tooltip
                                  key={title}
                                  label={title}
                                  withArrow
                                  transitionProps={{
                                    transition: 'fade',
                                    duration: 200,
                                  }}
                                  className="font-medium shadow-2xl border-[1px] border-gray-200"
                                  position="right"
                                  arrowSize={6}
                                  c="#003ab7"
                                  color="#fff"
                                >
                                  <div className="w-full flex flex-col justify-center gap-1  items-center h-20 border-2 rounded-md p-1 hover:border-[1px] hover:border-blue-600 hover:bg-blue-50">
                                    {Icon ? (
                                      <Icon className="" />
                                    ) : (
                                      <IoCalculatorOutline className="text-5xl mx-auto p-1" />
                                    )}
                                    <p className="truncate text-xs w-4/5   text-center">
                                      {title}
                                    </p>
                                  </div>
                                </Tooltip>
                              )
                            )}
                          </div>
                        </Accordion.Panel>
                      </Accordion.Item>
                    )
                  )}
              </Accordion>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
