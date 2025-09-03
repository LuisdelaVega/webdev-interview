import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { FiltersProvider } from "./context/filters/filters-provider.tsx";
import { PeopleProvider } from "./context/people/people-provider.tsx";
import { Layout } from "./layout";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <FiltersProvider>
          <Layout>
            <PeopleProvider>
              <App />
            </PeopleProvider>
          </Layout>
        </FiltersProvider>
      </MantineProvider>
    </QueryClientProvider>
  </StrictMode>
);
