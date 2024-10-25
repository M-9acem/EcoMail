import React from 'react';
import { createRoot } from 'react-dom/client';

import "primereact/resources/themes/saga-green/theme.css";  // or another theme you prefer
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";


import Popup from './Popup';
import './index.css';

const container = document.getElementById('app-container');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Popup />);
