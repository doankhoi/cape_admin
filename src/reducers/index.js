import { combineReducers } from 'redux';
import knowlegde_base from './knowlegde_base';
import listings from './listings';

const appReducers = combineReducers({
    knowlegde_base,
    listings
})

export default appReducers;

