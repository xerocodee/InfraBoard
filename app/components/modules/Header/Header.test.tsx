import { createRoot } from 'react-dom/client';
import Header from './Header';

describe('Module Header', () => {
  it('should render component', () => {
    const root = createRoot(document.createElement('div'));
    root.render(<Header />);
  });
});
