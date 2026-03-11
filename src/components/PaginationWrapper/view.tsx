import { useMemo } from "react";
import { PaginationUtils } from "../../utils/PaginationUtils";
import { Box, Button, CircularProgress } from "@mui/material";
import { ChevronLeftOutlined, ChevronRightOutlined } from "@mui/icons-material";
import type { PaginationWrapperProps } from "./types";
import { USERS_LIMIT } from "../UsersList";

export const PaginationWrapper = ({
  children,
  totalItems,
  currentPage,
  isLoading,
  setIsLoading,
  setCurrentPage,
}: PaginationWrapperProps) => {
  const visiblePages = useMemo(
    () => PaginationUtils.getVisiblePages(totalItems, currentPage, USERS_LIMIT),
    [currentPage, totalItems],
  );

  const handleChangePage = (value: number) => {
    if (value === currentPage) return;
    setIsLoading(true);
    setCurrentPage(value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Box>
        {isLoading ? (
          <Box>
            <CircularProgress />
          </Box>
        ) : (
          children
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem 0.5rem",
          width: "100%",
          gap: "0rem",
        }}
      >
        <ChevronLeftOutlined />
        {visiblePages.map((page, index) => (
          <Button
            key={`users-${page}-${index}`}
            onClick={() => handleChangePage(page)}
          >
            {page}
          </Button>
        ))}
        <ChevronRightOutlined />
      </Box>
    </Box>
  );
};
