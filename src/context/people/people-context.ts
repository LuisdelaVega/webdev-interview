import { createContext } from "react";
import type { People } from "../../types";

type PeopleContextType = {
  people: People[];
};

export const PeopleContext = createContext<PeopleContextType>({
  people: [],
});
