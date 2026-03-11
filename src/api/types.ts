import type { SingleUser } from "../types/user";

export type ApiResponse = {
  users: SingleUser[];
  limit: number;
  skip: number;
  total: number;
};
