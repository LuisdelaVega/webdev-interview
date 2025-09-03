export type People = {
  id: number;
  name: string;
  settlementId: number;
  houseId: number;
  seatId: number;
  familyId: number;
};

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