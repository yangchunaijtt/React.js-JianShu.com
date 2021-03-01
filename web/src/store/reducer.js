import {combineReducers} from 'redux';
import { reducer as headerReducer} from '../components/headers/store';
import { reducer as HomeReducer}  from "../pages/home/store"
import { reducer as DetailReducer}  from "../pages/detail/store"

export default combineReducers({
    header: headerReducer,
    home:HomeReducer,
    detail:DetailReducer
})