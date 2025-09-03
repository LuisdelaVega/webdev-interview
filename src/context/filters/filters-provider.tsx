import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FiltersContext } from "./filters-context";
import type { Filters } from "./types";

export const FiltersProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data } = useQuery<Filters>({
    queryKey: ["filters"],
    queryFn: () =>
      fetch("http://localhost:3000/filters").then((res) => res.json()),
  });

  const [selectedFilters, setSelectedFilters] = useState<Filters>({
    regions: [],
    settlements_seats: [],
    houses_families: [],
  });

  return (
    <FiltersContext.Provider
      value={{
        allFilters: data ?? {
          regions: [],
          settlements_seats: [],
          houses_families: [],
        },
        selectedFilters,
        setSelectedFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
