import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { TicketListProvider } from './contexts/TicketListContext';
import { TicketProvider } from './contexts/TicketContext';
import App from './components/App/App';
import './index.css';
import 'normalize.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faTicketAlt, faChair } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faTicketAlt, faChair)

require('dotenv').config()

ReactDOM.render(
    <BrowserRouter>
        <TicketListProvider>
            <TicketProvider>
                <App/>
            </TicketProvider>
        </TicketListProvider>
    </BrowserRouter>, document.getElementById('root'));