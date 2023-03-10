export const GET_SEARCH_RESULT = "GET_SEARCH_RESULT";

export const getSearchResultActionAsync = (data) => {
  return {
    type: GET_SEARCH_RESULT,
    payload: data,
    // data.filter(
    //   (el) =>
    //     el.name.toLowerCase().includes(search.toLowerCase()) ||
    //     el.surname.toLowerCase().includes(search.toLowerCase())
    // ),
  };
};
