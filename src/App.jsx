import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { DiscoverWithPages } from "./components/Tabs/Discover/Discover";
import { LatestWithPages } from "./components/Tabs/Latest/Latest";
import { TopRatedWithPages } from "./components/Tabs/TopRated/TopRated";
import { UpcomingWithPages } from "./components/Tabs/Upcoming/Upcoming";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Navigate to="/Latest" />} />
          <Route path="Latest" element={<LatestWithPages />} />
          <Route path="TopRated" element={<TopRatedWithPages />} />
          <Route path="Upcoming" element={<UpcomingWithPages />} />
          <Route path="Discover" element={<DiscoverWithPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
