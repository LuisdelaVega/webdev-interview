/**
 * Some context about the data:
 *
 * Regions:
 * - There are only 2 regions: North and Crownlands.
 *
 * Settlements/Seats:
 * - Each settlement is located in a region.
 * - Only the settlements that are located in the Crownlands region have a seatId.
 *
 * Houses/Families:
 * - The people that live in the North have a settlementId and a houseId.
 * - The people that live in the Crownlands have a seatId and a familyId.
 */
import type { Filters, People } from "../types";

export function applyFilters(
  people: People[],
  selectedFilters: Filters,
  allFilters: Filters
) {
  console.log("Selected Filters:", selectedFilters);
  console.log("All Filters:", allFilters);

  return people?.filter(() => {
    return true;
  });
}
