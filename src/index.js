import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { TicketListProvider } from './contexts/TicketListContext';
import { TicketProvider } from './contexts/TicketContext';
import App from './components/App/App';
import './index.css';
import 'normalize.css';

require('dotenv').config()

ReactDOM.render(
    <BrowserRouter>
        <TicketListProvider>
            <TicketProvider>
                <App/>
            </TicketProvider>
        </TicketListProvider>
    </BrowserRouter>, document.getElementById('root'));