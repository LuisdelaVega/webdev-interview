import { createContext } from "react";
import type { People } from "./types";

export const PeopleContext = createContext<{
  people: People[];
}>({
  people: [],
});
