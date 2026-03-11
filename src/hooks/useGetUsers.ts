import { useState, useEffect } from "react";
import type { SingleUser, ApiResponse } from "../types/user";
import { API_ENDPOINTS } from "../api";
import { USERS_LIMIT } from "../components/UsersList";
import axios from "axios";

export const useGetUsers = (searchQuery: string) => {
  const [users, setUsers] = useState<SingleUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const getUsers = async (currentPage: number) => {
    try {
      setIsLoading(true);
      const res = await axios.get<ApiResponse>(
        API_ENDPOINTS.GET_PAGINATION_USERS(
          USERS_LIMIT,
          USERS_LIMIT * (currentPage - 1),
        ),
      );
      setTotalItems(res.data.total);
      setUsers(res.data.users);
      console.log(res.data.users);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getSearchUsers = async (query: string) => {
    try {
      setIsLoading(true);
      const res = await axios.get<ApiResponse>(
        API_ENDPOINTS.GET_SEARCH_USERS(query),
      );
      setUsers(res.data.users);
      setTotalItems(res.data.total);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!searchQuery) return;
    void getSearchUsers(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    void getUsers(currentPage);
  }, [currentPage]);

  return {
    users,
    isLoading,
    currentPage,
    totalItems,
    setCurrentPage,
    setIsLoading,
  };
};
