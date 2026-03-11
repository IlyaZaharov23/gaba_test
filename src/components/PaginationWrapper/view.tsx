import { useMemo } from "react";
import { PaginationUtils } from "../../utils/PaginationUtils";
import { Box, Button, CircularProgress, IconButton } from "@mui/material";
import { ChevronLeftOutlined, ChevronRightOutlined } from "@mui/icons-material";
import type { PaginationWrapperProps } from "./types";
import { USERS_LIMIT } from "../../shared/limit";
import { styles } from "./styles";

export const PaginationWrapper = ({
  children,
  totalItems,
  currentPage,
  isLoading,
  isSearchMode,
  setCurrentPage,
}: PaginationWrapperProps) => {
  const visiblePages = useMemo(
    () => PaginationUtils.getVisiblePages(totalItems, currentPage, USERS_LIMIT),
    [currentPage, totalItems],
  );

  const handleChangePage = (value: number) => {
    if (value === currentPage) return;
    setCurrentPage(value);
  };

  const handleForward = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleBack = () => {
    setCurrentPage(currentPage - 1);
  };
  return (
    <Box sx={styles.paginationWrapper}>
      <Box>
        {isLoading ? (
          <Box sx={styles.progressWrapper(isSearchMode)}>
            <CircularProgress />
          </Box>
        ) : (
          children
        )}
      </Box>
      {!isSearchMode && totalItems > 0 && (
        <Box sx={styles.pagesWrapper}>
          <IconButton onClick={handleBack}>
            <ChevronLeftOutlined />
          </IconButton>
          {visiblePages.map((page, index) => (
            <Button
              key={`users-${page}-${index}`}
              onClick={() => handleChangePage(page)}
              disableRipple
              sx={styles.paginationButton(currentPage === page)}
            >
              {page}
            </Button>
          ))}
          <IconButton onClick={handleForward}>
            <ChevronRightOutlined />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};
