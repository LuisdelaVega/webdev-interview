import { createContext } from "react";
import type { FiltersContextType } from "./types";

export const FiltersContext = createContext<FiltersContextType>({
  allFilters: {
    regions: [],
    settlements_seats: [],
    houses_families: [],
  },
  selectedFilters: {
    regions: [],
    settlements_seats: [],
    houses_families: [],
  },
  setSelectedFilters: () => {},
});
