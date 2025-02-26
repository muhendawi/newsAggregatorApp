import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import NewsFeedHome from "./pages/NewsFeedHome";
import TheGuardian from "./pages/TheGuardian";
import AppLayout from "./ui/AppLayout";
import NewsAPI from "./pages/NewsAPI";
import TheNewYorkTimes from "./pages/TheNewYorkTimes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="newsFeed" />} />
          <Route path="newsFeed" element={<NewsFeedHome />} />
          <Route path="/guardian" element={<TheGuardian />} />
          <Route path="/newsAPI" element={<NewsAPI />} />
          <Route path="/nyTimes" element={<TheNewYorkTimes />} />
        </Route>
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
