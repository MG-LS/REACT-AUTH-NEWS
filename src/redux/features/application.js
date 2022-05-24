export const initialState = {
  signingUp: false,
  signingIn: false,
  error: null,
  token: localStorage.getItem("token"),
  user: localStorage.getItem('user')
};

export const application = (state = initialState, action) => {
  switch (action.type) {
    case "application/signup/pending":
      return {
        ...state,
        signingUp: true,
        error: null,
      };
    case "application/signup/fulfilled":
      return {
        ...state,
        signingUp: false,
      };
    case "application/signup/rejected":
      return {
        ...state,
        signingUp: false,
        error: action.error,
      };
    case "application/signin/pending":
      return {
        ...state,
        signingIn: true,
        error: null,
      };
    case "application/signin/fulfilled":
      return {
        ...state,
        signingIn: false,
        token: action.payload,
      };
    case "application/signin/rejected":
      return {
        ...state,
        signingIn: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const createUser = (login, password) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "application/signup/pending" });
      const response = await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
      const json = await response.json();
      dispatch({ type: "application/signup/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "application/signup/rejected", error: e.toString() });
    }
  };
};

export const auth = (login, password) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "application/signin/pending" });
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
      const json = await response.json();
      dispatch({ type: "application/signin/fulfilled", payload: json });
      localStorage.setItem("token", json.token);
      localStorage.setItem("user", json.id);
    } catch (e) {
      dispatch({ type: "application/signin/rejected", error: e.toString() });
    }
  };
};
