import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Discover } from "./components/Tabs/Discover/Discover";
import { Latest } from "./components/Tabs/Latest/Latest";
import { TopRated } from "./components/Tabs/TopRated/TopRated";
import { Upcoming } from "./components/Tabs/Upcoming/Upcoming";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Latest />}></Route>
          <Route path="TopRated" element={<TopRated />}></Route>
          <Route path="Upcoming" element={<Upcoming />}></Route>
          <Route path="Discover" element={<Discover />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
