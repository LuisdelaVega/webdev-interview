import type { Dispatch, SetStateAction } from "react";

export type Region = {
  id: number;
  name: string;
};

export type SettlementsSeats = {
  id: number;
  name: string;
  regionName: string;
  seatId: number | null;
};

export type HousesFamilies = {
  id: number;
  name: string;
  regionName: string;
  settlementId: number | null;
};

export type Filters = {
  regions: Region[];
  settlements_seats: SettlementsSeats[];
  houses_families: HousesFamilies[];
};

export type FiltersContextType = {
  allFilters: Filters;
  selectedFilters: Filters;
  setSelectedFilters: Dispatch<SetStateAction<Filters>>;
};
