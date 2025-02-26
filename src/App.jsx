import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import NewsFeedHome from "./pages/NewsFeedHome";
import TheGuardian from "./pages/TheGuardian";
import AppLayout from "./ui/AppLayout";
import NewsAPI from "./pages/NewsAPI";
import TheNewYorkTimes from "./pages/TheNewYorkTimes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalSTyles from "./styles/GlobalStyles";
import PageNotFound from "./pages/PageNotFound";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="newsFeed" />} />
            <Route path="newsFeed" element={<NewsFeedHome />} />
            <Route path="/guardian" element={<TheGuardian />} />
            <Route path="/newsAPI" element={<NewsAPI />} />
            <Route path="/nyTimes" element={<TheNewYorkTimes />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <GlobalSTyles />
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
}

export default App;
