import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Pages/Home/Home";
import { SearchWithPages } from "./components/Pages/Search/Search";
import { DiscoverWithPages } from "./components/Tabs/Discover/Discover";
import { LatestWithPages } from "./components/Tabs/Latest/Latest";
import { TopRatedWithPages } from "./components/Tabs/TopRated/TopRated";
import { UpcomingWithPages } from "./components/Tabs/Upcoming/Upcoming";
import { Footer } from "./components/Footer/Footer";
import { MainStyled } from "./styles/pageComponents";
import { Details } from "./components/Pages/Details/Details";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainStyled>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Navigate to="/Latest" replace />} />
            <Route path="Latest" element={<LatestWithPages />} />
            <Route path="TopRated" element={<TopRatedWithPages />} />
            <Route path="Upcoming" element={<UpcomingWithPages />} />
            <Route path="Discover" element={<DiscoverWithPages />} />
          </Route>
          <Route path="Search" element={<SearchWithPages />} />
          <Route path="Details" element={<Details />} />
        </Routes>
      </MainStyled>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
