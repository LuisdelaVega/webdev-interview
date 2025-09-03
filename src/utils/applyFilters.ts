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
import type { Filters } from "../context/filters/types";
import type { People } from "../context/people/types";

export function applyFilters(
  people: People[],
  selectedFilters: Filters,
  allFilters: Filters
) {
  return people?.filter((person) => {
    return true;
  });
}
