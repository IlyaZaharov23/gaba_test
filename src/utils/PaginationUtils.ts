export class PaginationUtils {
  static getVisiblePages = (
    totalItems: number,
    currentPage: number,
    itemsPerPage: number,
  ): number[] => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (totalPages <= 10) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    let startPage: number;

    if (currentPage <= 6) {
      startPage = 1;
    } else if (currentPage >= totalPages - 4) {
      startPage = totalPages - 9;
    } else {
      startPage = currentPage - 5;
    }

    const visiblePages = Array.from({ length: 10 }, (_, i) => startPage + i);

    return visiblePages;
  };
}
