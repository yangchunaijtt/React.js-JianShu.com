import { constants } from './index';
import { fromJS } from 'immutable';

import axios from 'axios';

export const SearchInputFocus = () => ({
    type: constants.SEARCH_FOCUS
});

export const SearchInputBlur = () => ({
    type: constants.SEARCH_BLUR
})

export const handleMouseEnter = () => ({
    type:constants.MOUSE_ENTER
})

export const handleMouseLeave = () => ({
    type:constants.MOUSE_LEAVE
})

export const searchInfo = (data) => ({
    type: constants.GET_SEARCH_INFO,
    data:fromJS(data)
});


export const getUserInfo = () => {
    return (dispatch) => {
        axios.get('/api/search-info.json').then(res => {
            res = res.data;
            if(res.success){
                dispatch(searchInfo(res.data)) 
            }
        })
    } 
}
     
export const handleChangeSearchInfo = (iconRef) => ({
    type:constants.CHANGE_SEARCH_INFO,
    Ref:iconRef
})