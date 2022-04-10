import GlobalStyle from "./Global.style";
import StyledNavbar from "./Components/Navbar/Navbar.style";
import StyledHome from "./Pages/Home/Home.style";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StyledFooter from "./Components/Footer/Footer.style";
import StyledCast from "./Pages/Cast/Cast.style";
import StyledDetails from "./Pages/Details/Details.style";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <StyledNavbar className="navbar" />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<StyledHome className="home-page" />}
          ></Route>
          <Route
            path="/:category/:id"
            element={<StyledDetails className="detail-page" />}
          ></Route>
          <Route
            path="/:category/cast/:id"
            element={<StyledCast className="cast-page" />}
          ></Route>
        </Routes>
      </BrowserRouter>
      <StyledFooter className="footer" />
    </div>
  );
}

export default App;
