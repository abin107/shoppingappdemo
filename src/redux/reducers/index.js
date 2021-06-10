/* Importing defaults provided by react and redux */
import { combineReducers } from 'redux';

/* Importing user defined functions */
import cart		from '../reducers/cart';
import landing   	from '../reducers/landing';
import total 	from '../reducers/total';
import filters 	from '../reducers/filter';
import sort 	from '../reducers/sort';


const rootReducer = combineReducers ({
	landing: landing,
	cart: cart,
	total: total,
	filters: filters,
	sort: sort
});

export default rootReducer;
