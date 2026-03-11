import { SEARCH_INPUT_HEIGHT, USERS_PAGE_GAP } from "../pages/Users/constants";
import { USER_ITEM_HEIGHT } from "../components/UserItem/styles";
import { USERS_LIST_GAP } from "../components/UsersList/constants";
import {
  PAGINATION_HEIGHT,
  PAGINATION_PADDING_Y,
} from "../components/PaginationWrapper/constants";

export class PaginationUtils {
  static getVisiblePages = (
    totalItems: number,
    currentPage: number,
    windowHeight: number,
  ): number[] => {
    const totalPages = Math.ceil(totalItems / this.getUsersLimit(windowHeight));

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
  static getUsersLimit(windowHeight: number) {
    // Получаем высоту контейнера списка
    // const container = document.querySelector(".users-list");
    // const containerHeight = container.clientHeight;

    const listHeight =
      windowHeight -
      SEARCH_INPUT_HEIGHT -
      USERS_PAGE_GAP -
      PAGINATION_HEIGHT -
      PAGINATION_PADDING_Y * 2 -
      32;
    // Высота одного элемента
    // const itemHeight = 80; // пикселей

    // Gap между элементами
    // const gapSize = 16; // пикселей

    // Точная формула: containerHeight = n * itemHeight + (n-1) * gap
    // n * itemHeight + n * gap - gap = containerHeight
    // n * (itemHeight + gap) = containerHeight + gap
    // n = (containerHeight + gap) / (itemHeight + gap)

    const exactCount =
      (listHeight + USERS_LIST_GAP) / (USER_ITEM_HEIGHT + USERS_LIST_GAP);

    // Проверяем, помещается ли целое количество
    if (Number.isInteger(exactCount)) {
      return exactCount;
    }

    // Если не целое - берем floor, так как больше не поместится
    const itemsCount = Math.floor(exactCount);

    // Проверяем, точно ли поместятся все элементы
    const totalHeightWithItems =
      itemsCount * USER_ITEM_HEIGHT + (itemsCount - 1) * USERS_LIST_GAP;

    console.log({
      listHeight,
      totalHeightWithItems,
      remainingSpace: listHeight - totalHeightWithItems,
      itemsCount,
    });

    return itemsCount;
  }
}
