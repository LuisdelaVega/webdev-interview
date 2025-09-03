import { useQuery } from "@tanstack/react-query";
import { useCallback, useContext } from "react";
import { applyFilters } from "../../utils/applyFilters";
import { FiltersContext } from "../filters/filters-context";
import { PeopleContext } from "./people-context";
import type { People } from "../../types";

export const PeopleProvider = ({ children }: { children: React.ReactNode }) => {
  const { data } = useQuery<People[]>({
    queryKey: ["people"],
    queryFn: () =>
      fetch("http://localhost:3000/people").then((res) => res.json()),
  });

  const { selectedFilters, allFilters } = useContext(FiltersContext);

  const applyFiltersToData = useCallback(() => {
    return applyFilters(data ?? [], selectedFilters, allFilters);
  }, [data, selectedFilters, allFilters]);

  return (
    <PeopleContext.Provider
      value={{
        people: applyFiltersToData() ?? [],
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
};
