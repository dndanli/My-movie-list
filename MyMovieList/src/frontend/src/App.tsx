import GlobalStyle from "./Global.style";
import StyledNavbar from "./Components/Navbar/Navbar.style";
import StyledHome from "./Pages/Home.style";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <StyledNavbar className="navbar" />
      <StyledHome className="home-page" />
    </div>
  );
}

export default App;
