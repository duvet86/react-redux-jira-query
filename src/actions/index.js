import "whatwg-fetch";

export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

//const passwordBuff = Buffer.from('luca:toptuda86', 'base64');
let fetchConfig = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Basic bHVjYTp0b3B0dWRhODY="
  }
};
let jiraUrl = "http://local.miningis.com.au/jira/rest/api/2/issue/MA-2388";

if (process.env.NODE_ENV !== "production") {
  jiraUrl = "http://localhost:3001/api/all";
  fetchConfig = {
    headers: {
      "Content-Type": "application/json"
    }
  };
}

const loginRequest = () => ({
  type: REQUEST_LOGIN
});

const loginSuccess = json => ({
  type: LOGIN_SUCCESS,
  data: json,
  receivedAt: Date.now()
});

const loginFail = err => ({
  type: LOGIN_ERROR,
  errorMessage: err,
  receivedAt: Date.now()
});

export const fetchLogin = () => dispatch => {
  dispatch(loginRequest());
  return fetch(jiraUrl, fetchConfig)
    .then(res => res.json())
    .then(json => ({
      [new Date().getTime()]: json
    }))
    .then(json => dispatch(loginSuccess(json)))
    .catch(err => dispatch(loginFail(err)));
};
