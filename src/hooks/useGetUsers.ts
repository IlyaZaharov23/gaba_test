import { useState, useEffect, useCallback } from "react";
import type { SingleUser } from "../types/user";
import type { ApiResponse } from "../api/types";
import { API_ENDPOINTS } from "../api";
import axios from "axios";
import type { AlertOptions } from "./useActionsAlert/types";
import { PaginationUtils } from "../utils/PaginationUtils";

export const useGetUsers = (
  searchQuery: string,
  windowHeight: number,
  currentPage: number,
  setCurrentPage: (value: number) => void,
  showAlert: (options: AlertOptions) => void,
  alertOptions: AlertOptions,
) => {
  const [users, setUsers] = useState<SingleUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [isSearchMode, setIsSearchMode] = useState<boolean>(false);

  const getUsers = useCallback(
    async (currentPage: number) => {
      try {
        setIsLoading(true);
        const res = await axios.get<ApiResponse>(
          API_ENDPOINTS.GET_PAGINATION_USERS(
            PaginationUtils.getUsersLimit(windowHeight),
            PaginationUtils.getUsersLimit(windowHeight) * (currentPage - 1),
          ),
        );
        setTotalItems(res.data.total);
        setUsers(res.data.users);
        showAlert(alertOptions);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
        setIsSearchMode(false);
      }
    },
    [windowHeight],
  );

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
  }, [currentPage, searchQuery, getUsers]);

  return {
    users,
    isLoading,
    totalItems,
    isSearchMode,
  };
};
