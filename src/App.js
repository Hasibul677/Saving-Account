import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Members from "./components/Members/Members";
import Saving from "./components/Saving/Saving";


function App() {
  return (
    <Routes>
      <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <Hero/>
            </>
          }
        />
      <Route
          exact
          path="/members"
          element={
            <>
              <Header />
              <Members/>
            </>
          }
        />
      <Route
          exact
          path="/saving"
          element={
            <>
              <Header />
              <Saving/>
            </>
          }
        />
    </Routes>
  );
}

export default App;
