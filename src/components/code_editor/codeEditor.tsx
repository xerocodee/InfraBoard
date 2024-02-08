// CodeEditor.tsx
import { DroppedItem } from '@/types/types';
import React from 'react';
import MonacoEditor from 'react-monaco-editor';

interface CodeEditorProps {
    droppedItems: DroppedItem[];
}

const CodeEditor: React.FC<CodeEditorProps> = ({ droppedItems }) => {
    // Extract relevant data from droppedItems and format it as needed
    const code = droppedItems
        .map(
            (item) =>
                `// Position: x=${item.position.x}, y=${item.position.y}\n` +
                `// SubTab Title: ${item.subTab.title}\n` +
                `// SubTab Icon: ${item.subTab.icon}\n` +
                `// SubList: ${JSON.stringify(item.subTab.subList)}\n\n`
        )
        .join('');

    return (
        <div className='absolute top-[4rem] right-0'>
            <MonacoEditor
                width="400"
                height="calc(100vh - 4rem)"
                language="javascript"
                theme="vs-dark"
                value={code}
            />
        </div>
    );
};

export default CodeEditor;
