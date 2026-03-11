import type { SingleUser } from "../../types/user";

export type UsersListProps = {
  users: SingleUser[];
  isLoading: boolean;
  currentPage: number;
  totalItems: number;
  isSearchMode: boolean;
  windowHeight: number;
  setCurrentPage: (value: number) => void;
};
