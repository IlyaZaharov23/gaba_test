import { useMemo } from "react";
import { PaginationUtils } from "../../utils/PaginationUtils";
import { Box, Button, CircularProgress } from "@mui/material";
import { ChevronLeftOutlined, ChevronRightOutlined } from "@mui/icons-material";
import type { PaginationWrapperProps } from "./types";
import { USERS_LIMIT } from "../UsersList";
import { styles } from "./styles";

export const PaginationWrapper = ({
  children,
  totalItems,
  currentPage,
  isLoading,
  isSearchMode,
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
    <Box sx={styles.paginationWrapper}>
      <Box>
        {isLoading ? (
          <Box>
            <CircularProgress />
          </Box>
        ) : (
          children
        )}
      </Box>
      {!isSearchMode && totalItems > 0 && (
        <Box sx={styles.pagesWrapper}>
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
      )}
    </Box>
  );
};
