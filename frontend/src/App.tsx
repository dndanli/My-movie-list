import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyle, Wrapper } from "./Global.style";
import StyledNavbar from "./Components/Navbar/Navbar.style";
import StyledHome from "./Pages/Home/Home.style";
import StyledCast from "./Pages/Cast/Cast.style";
import StyledDetails from "./Pages/Details/Details.style";
import StyledDiscover from "./Pages/Discover/Discover.style";
import StyledPerson from "./Pages/Person/Person.style";
import StyledSignUp from "./Pages/SignUp/SignUp.style";
import StyledLogin from "./Pages/Login/Login.style";
import StyledSidebar from "./Components/Sidebar/Sidebar.style";
import StyledContentBar from "./Components/ContentBar/ContentBar.style";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <GlobalStyle />
        <BrowserRouter>
          <StyledSidebar className="sidebar" />
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
            <Route
              path="/login"
              element={<StyledLogin className="login-page" />}
            ></Route>
          </Routes>
          <StyledContentBar className="content-bar" />
        </BrowserRouter>
      </Wrapper>
    </div>
  );
}

export default App;
