import type { ReactNode } from "react";

export type PaginationWrapperProps = {
  children: ReactNode;
  totalItems: number;
  currentPage: number;
  isLoading: boolean;
  isSearchMode: boolean;
  setCurrentPage: (value: number) => void;
};
