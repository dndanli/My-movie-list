import GlobalStyle from "./Global.style";
import StyledNavbar from "./Components/Navbar/Navbar.style";
import StyledHome from "./Pages/Home/Home.style";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StyledFooter from "./Components/Footer/Footer.style";
import StyledCast from "./Pages/Cast/Cast.style";
import StyledDetails from "./Pages/Details/Details.style";
import StyledDiscover from "./Pages/Discover/Discover.style";
import StyledPerson from "./Pages/Person/Person.style";
import StyledSignUp from "./Pages/SignUp/SignUp.style";


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <StyledNavbar className="navbar" />
        <Routes>
          <Route
            path="/"
            element={<StyledHome className="home-page" />}
          ></Route>
          <Route
            path="/discover"
            element={<StyledDiscover className="discover-page" />}
          ></Route>
          <Route
            path="/discover:query"
            element={<StyledDiscover className="discover-page" />}
          ></Route>
          <Route
            path="/discover/:page/:query"
            element={<StyledDiscover className="discover-page" />}
          ></Route>
          <Route
            path="detail/:mediaType/:id"
            element={<StyledDetails className="detail-page" />}
          ></Route>
          <Route
            path="/:category/cast/:mediaType/:id"
            element={<StyledCast className="cast-page" />}
          ></Route>
          <Route
            path="/person/:id"
            element={<StyledPerson className="person-page" />}
          ></Route>
          <Route
            path="/signup"
            element={<StyledSignUp className="signup-page" />}
          ></Route>
        </Routes>
      </BrowserRouter>

      <StyledFooter className="footer" />
    </div>
  );
}

export default App;
