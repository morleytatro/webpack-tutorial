import { createRoot } from 'react-dom/client';

import App from './App';
import './styles.scss';

const root = createRoot(document.querySelector('#app'));

root.render(<App />);