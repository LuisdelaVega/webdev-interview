import type { Dispatch, SetStateAction } from "react";
import { createContext } from "react";
import type { Filters } from "../../types";

type FiltersContextType = {
  allFilters: Filters;
  selectedFilters: Filters;
  setSelectedFilters: Dispatch<SetStateAction<Filters>>;
};

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
