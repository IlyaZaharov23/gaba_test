import type { ReactNode } from "react";

export type PaginationWrapperProps = {
  children: ReactNode;
  totalItems: number;
  currentPage: number;
  isLoading: boolean;
  isSearchMode: boolean;
  setIsLoading: (value: boolean) => void;
  setCurrentPage: (value: number) => void;
};
