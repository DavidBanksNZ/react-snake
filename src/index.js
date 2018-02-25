import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './index.css';
import {store} from './state/store';
import Game from './components/Game/Game';

ReactDOM.render(
	<Provider store={store}>
		<Game />
	</Provider>,
	document.getElementById('root')
);
