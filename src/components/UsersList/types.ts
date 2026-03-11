import type { SingleUser } from "../../types/user";

export type UsersListProps = {
  users: SingleUser[];
  isLoading: boolean;
  currentPage: number;
  totalItems: number;
  setIsLoading: (value: boolean) => void;
  setCurrentPage: (value: number) => void;
};
