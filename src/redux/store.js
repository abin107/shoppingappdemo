import {
    createStore,
    applyMiddleware,
    compose }            from 'redux';
import thunk             from 'redux-thunk';
import { createLogger }  from 'redux-logger';
import rootReducer       from './reducers/index';

/* Add different options to logger for advanced logging */
const logger = createLogger({
    collapsed: true
});

const middlewares = [];

middlewares.push (thunk);

/* Logger should be at last in middlewares to record all events */
if (process.env.NODE_ENV !== `production`) {
    middlewares.push (logger);
}

const configureStore = (initialState) => {

    initialState = JSON.parse(window.localStorage.getItem('state')) || initialState;
    
    const store = createStore (
                        rootReducer,
                        initialState,
                        compose (applyMiddleware(...middlewares))
                    );
                    
    store.subscribe (() => {
        const state = store.getState();
        const persist = {
            cart: state.cart,
            total: state.total
        };
        window.localStorage.setItem('state', JSON.stringify(persist));
    });

    return store;
                    
};

export default configureStore;
