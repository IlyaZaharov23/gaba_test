import { useState, useEffect } from "react";
import type { SingleUser } from "../types/user";
import type { ApiResponse } from "../api/types";
import { API_ENDPOINTS } from "../api";
import axios from "axios";
import { USERS_LIMIT } from "../shared/limit";

export const useGetUsers = (searchQuery: string) => {
  const [users, setUsers] = useState<SingleUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [isSearchMode, setIsSearchMode] = useState<boolean>(false);

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
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setIsSearchMode(false);
    }
  };

  const getSearchUsers = async (query: string) => {
    try {
      setIsLoading(true);
      setIsSearchMode(true);
      const res = await axios.get<ApiResponse>(
        API_ENDPOINTS.GET_SEARCH_USERS(query),
      );
      setUsers(res.data.users);
      setTotalItems(0);
      setCurrentPage(1);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      void getSearchUsers(searchQuery);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (!searchQuery) {
      void getUsers(currentPage);
    }
  }, [currentPage, searchQuery]);

  return {
    users,
    isLoading,
    currentPage,
    totalItems,
    setCurrentPage,
    isSearchMode,
  };
};
