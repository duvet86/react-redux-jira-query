import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockResponse = (status, response) => {
  return new window.Response(response, {
    status: status,
    headers: {
      'Content-type': 'application/json'
    }
  });
};

Date.now = jest.genMockFunction().mockReturnValue(0);

window.fetch = jest.fn().mockImplementation(() => Promise.resolve(mockResponse(
  200, '{ "key": "val" }')));

describe('login actions', () => {
  it('fetch login', () => {

    const store = mockStore();
    const expectedActions = [
      { type: actions.REQUEST_LOGIN },
      {
        type: actions.LOGIN_SUCCESS,
        receivedAt: Date.now(),
        data: { key: "val" }
      }
    ];

    store.dispatch(actions.fetchLogin())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
      .catch();
  });
});