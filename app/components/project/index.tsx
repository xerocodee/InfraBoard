'use client';
import { useState, useRef, useEffect } from 'react';
import { Dictionary, omit } from 'lodash';
import {
  ITemplateNode,
  INodeItem,
  IClientNodePosition,
  IGroupNode,
} from '../../types';
import eventBus from '../../events/eventBus';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { nodeLibraries } from '../../utils/data/libraries';
import {
  getClientNodeItem,
  flattenLibraries,
  ensure,
  getMatchingSetIndex,
  filterGroups,
  getGroupPosition,
} from '../../utils';
import { Canvas } from '../canvas';
import ModalConfirmDelete from '../modals/ConfirmDelete';
import CreateTemplateModal from '../modals/template/Create';
import ModalTemplateEdit from '../modals/template/Edit';
import { useTitle } from '../../hooks';
import CodeBox from './CodeBox';
import { useJsPlumb } from '../canvas/useJsPlumb';

import defaultCanvasPosition from '../../configs/defaults/canvasPosition';
import defaultNodes from '../../configs/defaults/nodes';
import defaultConnections from '../../configs/defaults/connections';
import { Button, Select, Tabs, Tooltip } from '@mantine/core';

import { FaFileDownload } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa6';

export default function Project() {
  const { height } = useWindowDimensions();
  const stateNodesRef = useRef<Dictionary<INodeItem>>();
  const stateSelectedNodesRef = useRef<Record<string, any>>();
  const stateConnectionsRef = useRef<[[string, string]] | []>();
  const [showModalCreateTemplate, setShowModalCreateTemplate] = useState(false);
  const [templateToEdit, setTemplateToEdit] = useState<ITemplateNode | null>(
    null
  );
  const [nodeToDelete, setNodeToDelete] = useState<INodeItem | null>(null);
  const [selectedNodes, setSelectedNodes] = useState<Record<string, any>>({});
  const [nodes, setNodes] = useState<Record<string, INodeItem>>({});
  const [connections, setConnections] = useState<[[string, string]] | []>([]);
  const [canvasPosition, setCanvasPosition] = useState<Record<string, number>>(
    {}
  );

  useTitle(['InfraBoard'].join('Workflow'));

  stateNodesRef.current = nodes;
  stateConnectionsRef.current = connections;
  stateSelectedNodesRef.current = selectedNodes;

  const updateGroupNodePositions = (group: IGroupNode) => {
    const offsets = { top: 0, left: 0 };

    if (group.data.group.nodeIds && stateNodesRef.current) {
      for (const nodeId of group.data.group.nodeIds) {
        const node = stateNodesRef.current[nodeId];
        node.position = getGroupPosition(offsets);

        console.log(node);
        setNodes({
          ...stateNodesRef.current,
          [nodeId]: node,
        });
        offsets.top += 80;
      }
    }
  };

  const onNodeUpdate = (positionData: IClientNodePosition) => {
    if (stateNodesRef.current) {
      const groups = filterGroups(stateNodesRef.current);

      for (const [, value] of Object.entries(groups)) {
        if (value.data.group.nodeIds.includes(positionData.key)) {
          updateGroupNodePositions(value);
          return;
        }
      }

      const node = {
        ...stateNodesRef.current[positionData.key],
        ...positionData,
      };

      setNodes({ ...stateNodesRef.current, [positionData.key]: node });
    }
  };

  const onGraphUpdate = (graphData: any) => {
    const data = { ...graphData };
    eventBus.dispatch('FETCH_CODE', {
      message: data,
    });
  };

  const onCanvasUpdate = (updatedCanvasPosition: any) => {
    setCanvasPosition({ ...canvasPosition, ...updatedCanvasPosition });
  };

  const onCanvasClick = () => {
    setSelectedNodes({});
  };

  const prepEndpoint = (values: any) => {
    const sections = flattenLibraries(nodeLibraries);
    const clientNodeItem = getClientNodeItem(
      values,
      ensure(sections.find((l) => l.type === values.type))
    );

    if (!values.position.left && !values.position.top) {
      clientNodeItem.position = {
        left: 60 - canvasPosition.left,
        top: 30 - canvasPosition.top,
      };
    }

    return clientNodeItem;
  };

  const onAddEndpoint = (values: any) => {
    if (stateNodesRef.current) {
      const clientNodeItem = prepEndpoint(values);

      setNodes({
        ...stateNodesRef.current,
        [clientNodeItem.key]: clientNodeItem,
      });

      if (clientNodeItem.type === 'TEMPLATE') {
        setShowModalCreateTemplate(false);
      }
    }
  };

  const onUpdateEndpoint = (nodeItem: ITemplateNode) => {
    if (stateNodesRef.current) {
      setNodes({ ...stateNodesRef.current, [nodeItem.key]: nodeItem });
    }
  };

  const onConnectionDetached = (data: any) => {
    if (
      !stateConnectionsRef.current ||
      stateConnectionsRef.current.length <= 0
    ) {
      return;
    }

    const _connections: [[string, string]] = [
      ...stateConnectionsRef.current,
    ] as any;
    const existingIndex = getMatchingSetIndex(_connections, data);

    if (existingIndex !== -1) {
      _connections.splice(existingIndex, 1);
      setConnections(_connections);
      stateConnectionsRef.current = _connections;
    }
  };

  const onConnectionAttached = (data: any) => {
    if (stateConnectionsRef.current && stateConnectionsRef.current.length > 0) {
      const _connections: [[string, string]] = [
        ...stateConnectionsRef.current,
      ] as any;
      const existingIndex = getMatchingSetIndex(_connections, data);
      if (existingIndex === -1) {
        _connections.push(data);
      }
      setConnections(_connections);
    } else {
      setConnections([data]);
    }
  };

  const onRemoveEndpoint = (node: INodeItem) => {
    if (stateNodesRef.current) {
      setNodes({ ...omit(stateNodesRef.current, node.key) });
      eventBus.dispatch('NODE_DELETED', { message: { node: node } });
    }
  };

  const onNodeSelect = (data: any) => {
    const { shiftKey } = data.event;

    if (
      stateSelectedNodesRef.current &&
      !data.message.id.includes('entrypoint') &&
      !data.message.id.includes('group')
    ) {
      let selectedNodesNew = {} as any;
      if (shiftKey) {
        selectedNodesNew = { ...stateSelectedNodesRef.current };
      }

      selectedNodesNew[data.message.id] = {};
      setSelectedNodes(selectedNodesNew);
    }
  };

  const onGroupMemberAdded = (message: any) => {
    if (stateNodesRef.current) {
      const { data } = message.message;
      const group = stateNodesRef.current[data.groupId];

      if (!group.data.group.nodeIds.includes(data.nodeId)) {
        group.data.group.nodeIds.push(data.nodeId);
      }

      updateGroupNodePositions(group);
      setNodes({
        ...stateNodesRef.current,
        [data.groupId]: group,
      });
    }
  };

  const onGroupMemberRemoved = (message: any) => {
    if (stateNodesRef.current) {
      const { data } = message.message;
      const group = stateNodesRef.current[data.groupId];

      group.data.group.nodeIds = group.data.group.nodeIds.filter(
        (x: any) => x !== data.nodeId
      );

      updateGroupNodePositions(group);
      setNodes({ ...stateNodesRef.current, [data.groupId]: group });
    }
  };

  const onNestedGroupAdded = () => {
    return;
  };

  const onNestedGroupRemoved = (message: any) => {
    if (stateNodesRef.current) {
      const { data } = message.message;
      const parentGroup = stateNodesRef.current[data.parent];

      parentGroup.data.group.nodeIds = parentGroup.data.group.nodeIds.filter(
        (x: any) => x !== data.child
      );

      setNodes({ ...stateNodesRef.current, [data.parent]: parentGroup });
    }
  };

  const onGroupRemoved = (message: any) => {
    if (stateNodesRef.current) {
      const { data } = message.message;
      const updated = { ...stateNodesRef.current };
      delete updated[data.groupId];
      setNodes(updated);
    }
  };

  const jsPlumb = useJsPlumb(
    nodes,
    connections,
    onGraphUpdate,
    onNodeUpdate,
    onConnectionAttached,
    onConnectionDetached
  );

  useEffect(() => {
    setNodes({
      ...stateNodesRef.current,
      ...(defaultNodes as any),
    });
  }, []);

  useEffect(() => {
    setConnections(defaultConnections as any);
    setCanvasPosition(defaultCanvasPosition as any);
  }, [defaultConnections]);

  useEffect(() => {
    eventBus.on('EVENT_ELEMENT_CLICK', (data: any) => {
      onNodeSelect(data.detail);
    });

    eventBus.on('EVENT_GROUP_MEMBER_ADDED', (data: any) => {
      onGroupMemberAdded(data.detail);
    });

    eventBus.on('EVENT_GROUP_MEMBER_REMOVED', (data: any) => {
      onGroupMemberRemoved(data.detail);
    });

    eventBus.on('EVENT_NESTED_GROUP_ADDED', () => {
      onNestedGroupAdded();
    });

    eventBus.on('EVENT_NESTED_GROUP_REMOVED', (data: any) => {
      onNestedGroupRemoved(data.detail);
    });

    eventBus.on('GROUP_REMOVED', (data: any) => {
      onGroupRemoved(data.detail);
    });

    return () => {
      eventBus.remove('GROUP_REMOVED', () => undefined);
      eventBus.remove('EVENT_ELEMENT_CLICK', () => undefined);
      eventBus.remove('EVENT_GROUP_MEMBER_ADDED', () => undefined);
      eventBus.remove('EVENT_GROUP_MEMBER_REMOVED', () => undefined);
      eventBus.remove('EVENT_NESTED_GROUP_ADDED', () => undefined);
      eventBus.remove('EVENT_NESTED_GROUP_REMOVED', () => undefined);
    };
  }, []);

  const selectData = [
    {
      value: 'main.tf',
      label: 'main.tf',
    },
    {
      value: 'output.tf',
      label: 'output.tf',
    },
    {
      value: 'locals.tf',
      label: 'locals.tf',
    },
  ];

  return (
    <div className="">
      {showModalCreateTemplate ? (
        <CreateTemplateModal
          onHide={() => setShowModalCreateTemplate(false)}
          onAddEndpoint={(values: any) => onAddEndpoint(values)}
        />
      ) : null}

      {templateToEdit ? (
        <ModalTemplateEdit
          node={templateToEdit}
          onHide={() => setTemplateToEdit(null)}
          onUpdateEndpoint={(values: any) => onUpdateEndpoint(values)}
        />
      ) : null}

      {nodeToDelete ? (
        <ModalConfirmDelete
          onHide={() => setNodeToDelete(null)}
          onConfirm={() => {
            onRemoveEndpoint(nodeToDelete);
            setNodeToDelete(null);
          }}
        />
      ) : null}

      {/* <div className="md:pl-16 flex flex-col flex-1"> */}
      <div className="flex flex-grow relative">
        <div
          className="w-full overflow-hidden  z-40"
          style={{ height: height - 64 }}
        >
          <div className="relative h-full">
            <Canvas
              jsPlumb={jsPlumb}
              nodes={nodes}
              canvasPosition={canvasPosition}
              onCanvasUpdate={(canvasData: any) => onCanvasUpdate(canvasData)}
              onCanvasClick={() => onCanvasClick()}
              setTemplateToEdit={(node: ITemplateNode) =>
                setTemplateToEdit(node)
              }
              setNodeToDelete={(node: ITemplateNode) => setNodeToDelete(node)}
              selectedNodes={selectedNodes}
            />
          </div>
        </div>
        <div className="group code-column w-1/2 md:w-1/3 absolute top-0 right-0 sm:relative z-40 md:z-30">
          <div className="flex flex-col bg-white">
            <Tabs defaultValue="first">
              <Tabs.List>
                <Tabs.Tab
                  value="first"
                  className="text-base  p-2 text-[#8b51ff]"
                >
                  TERRAFORM CODE
                </Tabs.Tab>
              </Tabs.List>
            </Tabs>
            <div className="flex gap-4 justify-start p-3 items-center">
              <Select data={selectData} placeholder="main.tf" />
              <div className="flex gap-2 bg-white ">
                <Tooltip
                  label="Download the selected file"
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
                  <Button variant="default">
                    <FaFileDownload />
                  </Button>
                </Tooltip>
                <Tooltip
                  label="Download all files"
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
                  <Button variant="default">
                    <FaDownload />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
          <CodeBox />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
