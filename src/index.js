import React                from 'react';
import ReactDOM             from 'react-dom';
import { Provider }         from 'react-redux';
import { StylesProvider }   from '@material-ui/core/styles';
import configureStore       from './redux/store';
import App                  from './components/App';
import './index.scss';

const store = configureStore ();

ReactDOM.render(
	<Provider store={store}>
		<StylesProvider injectFirst>
			<App/>
		</StylesProvider>
	</Provider>, 
	document.getElementById('root')
);
