import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          <Route index element={<LatestWithPages />}></Route>
          <Route path="TopRated" element={<TopRatedWithPages />}></Route>
          <Route path="Upcoming" element={<UpcomingWithPages />}></Route>
          <Route path="Discover" element={<DiscoverWithPages />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
