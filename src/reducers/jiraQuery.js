import * as actions from '../actions/index';

const jiraQuery = (state = {
    isFetching: false,
    data: {}
}, action) => {
    switch (action.type) {
        case actions.REQUEST_LOGIN:
            return {
                ...state,
                isFetching: true
            };
        case actions.LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data,
                lastUpdated: action.receivedAt
            };
        case actions.LOGIN_ERROR:
            return {
                ...state,
                isFetching: false,
                data: action.errorMessage,
                lastUpdated: action.receivedAt
            };
        default:
            return state;
    }
};

export default jiraQuery;