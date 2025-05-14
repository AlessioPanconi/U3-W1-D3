import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFoot from "./components/MyFoot";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import BookList from "./components/BookList";

import fantasyBooks from "./data/fantasy.json";

function App() {
  return (
    <>
      <MyNav homeLink="Home" aboutLink="About" browseLink="Browse" />
      {/*<Welcome />*/}

      {/*<AllTheBooks />*/}

      <BookList books={fantasyBooks} />

      <MyFoot />
    </>
  );
}

export default App;
