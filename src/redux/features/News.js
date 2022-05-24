const initialState = {
  items: [],
  error: null,
  load: true,
};

export const news = (state = initialState, action) => {
  switch (action.type) {
    case "news/fetch/fulfilled":
      return {
        ...state,
        items: action.payload,
        load: false,
      };
    case "news/fetch/rejected":
      return {
        ...state,
        error: action.error,
        load: false,
        items: [],
      };
    case "news/fetch/pending":
      return {
        ...state,
        load: true,
      };

    default:
      return state;
  }
};

export const loadNews = () => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      dispatch({ type: "news/fetch/pending" });
      const res = await fetch("http://localhost:4000/news", {
        headers: {
          Authorization: `Bearer ${state.application.token}`,
        },
      });
      const json = await res.json();
      console.log(json);

      if (json.error) {
        dispatch({
          type: "news/fetch/rejected",
          error: "При запросе на сервер произошла ошибка",
        });
      }

      dispatch({ type: "news/fetch/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "news/fetch/rejected", error: e.toString() });
    }
  };
};
