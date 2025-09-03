import { Container, List, Text, Title } from "@mantine/core";
import { useContext } from "react";
import { PeopleContext } from "./context/people/people-context";

type People = {
  id: number;
  name: string;
  settlementId: number;
  houseId: number;
  seatId: number;
  familyId: number;
};

function App() {
  const { people } = useContext(PeopleContext);

  return (
    <Container p="md" fluid>
      <Title order={2} pb="sm">
        The People of Westeros
      </Title>
      {people.length > 0 && (
        <List type="ordered">
          {people?.map((person: People) => (
            <List.Item key={person.id} fz="lg">
              {person.name}
            </List.Item>
          ))}
        </List>
      )}
      {people.length === 0 && (
        <Text fz="xl" fw={500}>
          No people found
        </Text>
      )}
    </Container>
  );
}

export default App;
