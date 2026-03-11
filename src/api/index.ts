const API_URL = "https://dummyjson.com/";

export const API_ENDPOINTS = {
  GET_PAGINATION_USERS: (limit: number, skip: number) =>
    `${API_URL}/users?limit=${limit}&skip=${skip}`,
  GET_SEARCH_USERS: (query: string) => `${API_URL}/users/search?q=${query}`,
};
