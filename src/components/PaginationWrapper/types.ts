import type { ReactNode } from "react";

export type PaginationWrapperProps = {
  children: ReactNode;
  totalItems: number;
  currentPage: number;
  isLoading: boolean;
  isSearchMode: boolean;
  windowHeight: number;
  setCurrentPage: (value: number) => void;
};
