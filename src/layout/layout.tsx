import {
  AppShell,
  Burger,
  Checkbox,
  Group,
  ScrollArea,
  Stack,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useContext } from "react";
import { FiltersContext } from "../context/filters/filters-context";
import type {
  HousesFamilies,
  Region,
  SettlementsSeats,
} from "../context/filters/types";

function FilterStack({ children }: { children: React.ReactNode }) {
  return (
    <Stack
      align="flex-start"
      w="100%"
      bd="1px solid rgba(0, 0, 0, 0.1)"
      bdrs="md"
      p="xs"
    >
      {children}
    </Stack>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  const {
    allFilters: { regions, settlements_seats, houses_families },
    selectedFilters,
    setSelectedFilters,
  } = useContext(FiltersContext);

  const handleFilterChange = (
    filterType: "regions" | "settlements_seats" | "houses_families",
    filter: Region | SettlementsSeats | HousesFamilies,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.currentTarget.checked) {
      setSelectedFilters({
        ...selectedFilters,
        [filterType]: [...selectedFilters[filterType], filter],
      });
    } else {
      setSelectedFilters({
        ...selectedFilters,
        [filterType]: selectedFilters[filterType].filter(
          (f) => f.id !== filter.id
        ),
      });
    }
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Title order={1} visibleFrom="sm">
            A Song of Ice and Fire DB
          </Title>
          <Title order={1} hiddenFrom="sm" fz="h3">
            A Song of Ice and Fire DB
          </Title>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md" styles={{ navbar: { overflow: "auto" } }}>
        <Stack w="100%">
          <FilterStack>
            <Title order={2}>Regions</Title>
            <ScrollArea mah={150} w="100%" type="auto">
              <Stack>
                {regions.map((region) => (
                  <Checkbox
                    key={region.id}
                    label={region.name}
                    w="100%"
                    onChange={(event) =>
                      handleFilterChange("regions", region, event)
                    }
                  />
                ))}
              </Stack>
            </ScrollArea>
          </FilterStack>
          <FilterStack>
            <Title order={2}>Settlements</Title>
            <ScrollArea mah={150} w="100%" type="auto">
              <Stack align="flex-start">
                {settlements_seats.map((settlement) => (
                  <Checkbox
                    key={settlement.id}
                    label={settlement.name}
                    w="100%"
                    onChange={(event) =>
                      handleFilterChange("settlements_seats", settlement, event)
                    }
                  />
                ))}
              </Stack>
            </ScrollArea>
          </FilterStack>
          <FilterStack>
            <Title order={2}>Houses</Title>
            <ScrollArea mah={150} w="100%" type="auto">
              <Stack align="flex-start">
                {houses_families.map((house) => (
                  <Checkbox
                    key={house.id}
                    label={house.name}
                    onChange={(event) =>
                      handleFilterChange("houses_families", house, event)
                    }
                  />
                ))}
              </Stack>
            </ScrollArea>
          </FilterStack>
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
