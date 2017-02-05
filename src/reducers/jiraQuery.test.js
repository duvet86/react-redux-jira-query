import * as actions from '../actions/index';
import jiraQuery from './jiraQuery';

Date.now = jest.genMockFunction().mockReturnValue(0);

describe('app reducer', () => {
    it('should handle initial state', () => {
        expect(
            jiraQuery(undefined, {})
        ).toEqual({
            isFetching: false,
            data: {}
        });
    });

    it('should handle REQUEST_LOGIN', () => {
        expect(
            jiraQuery({}, {
                type: actions.REQUEST_LOGIN
            })
        ).toEqual({
            isFetching: true
        });
    });

    it('should handle LOGIN_SUCCESS', () => {
        expect(
            jiraQuery({}, {
                type: actions.LOGIN_SUCCESS,
                data: { key: 'val' },
                receivedAt: Date.now()
            })
        ).toEqual({
            isFetching: false,
            data: { key: 'val' },
            lastUpdated: Date.now()
        });
    });
});