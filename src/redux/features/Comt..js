const initialState = {
  comments: [],
  error: null,
  load: true,
};

export const commState = (state = initialState, action) => {
  switch (action.type) {
    case "comt/fetch/fulfilled": {
      return {
        ...state,
        comments: action.payload,
        load: false,
      };
    }
    case "comt/fetch/rejected":
      return {
        ...state,
        error: action.error,
        load: false,
      };
    case "comt/fetch/pending":
      return {
        ...state,
        load: true,
      };
    case "comt/fetch/add/fulfilled": 
      return {
        ...state,
        comments:[...state.comments, action.payload],
        load: false, 
      };
    
    case "comt/fetch/add/rejected":
      return {
        ...state,
        error: action.error,
        load: false,
      };
    case "comt/fetch/add/pending":
      return {
        ...state,
        load: true,
      };
      case "comt/fetch/delete/fulfilled": {
        return {
          ...state,
          comments: state.comments.filter((item) => item._id !== action.payload),
          load: false,
        };
      }
      case "comt/fetch/delete/rejected": {
        return {
          ...state,
          error: action.error,
          load: false,
        };
      }
      case "comt/fetch/delete/pending": {
        return {
          ...state,
          load: true,
        };
      }
    default:
      return state;
  }
};

export const loadComt = () => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      dispatch({ type: "comt/fetch/pending" });
      const res = await fetch(`http://localhost:4000/comment`);
      const json = await res.json();
      console.log(json);

      dispatch({ type: "comt/fetch/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "comt/fetch/rejected", error: e.toString() });
    }
  };
};

export const postNewsComt = (id, comt, user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "comt/fetch/add/pending" });
      const post = await fetch("http://localhost:4000/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: comt, news: id, user: user }),
      });
      const data = await post.json();
      console.log(data);
      dispatch({ type: "comt/fetch/add/fulfilled", payload: data });
    } catch (e) {
      dispatch({ type: "comt/fetch/add/rejected", error: e.toString() });
    }
  };
};

export const deleteComt = (id) => {
    return async (dispatch) => {
      try {
        dispatch({ type: "comt/fetch/delete/pending" });
        const delete_fetch = await fetch(`http://localhost:4000/comment/${id}`, {
          method: "DELETE",
        });
        dispatch({ type: "comt/fetch/delete/fulfilled", payload: id });
      } catch (e) {
        dispatch({ type: "comt/fetch/delete/rejected", error: e.toString() });
      }
    };
  };