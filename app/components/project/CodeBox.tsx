import { useState } from 'react';
import CodeEditor from '../codeEditor';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const CodeBox = () => {
  const [language, setLanguage] = useState('yaml');
  const [formattedCode, setFormattedCode] = useState<string>('');
  const { height } = useWindowDimensions();

  return (
    <>
      <CodeEditor
        data={formattedCode}
        language={language}
        onChange={() => {
          return;
        }}
        disabled={true}
        lineWrapping={false}
        height={height - 64}
      />
    </>
  );
};

export default CodeBox;
