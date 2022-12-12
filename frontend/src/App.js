import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Login from "./components/Login/Login";
import Members from "./components/Members/Members";
import Report from "./components/Report/Report";
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
      <Route
          exact
          path="/report"
          element={
            <>
              <Header />
              <Report/>
            </>
          }
        />
      <Route
          exact
          path="/login"
          element={
            <>
              <Header />
              <Login/>
            </>
          }
        />
    </Routes>
  );
}

export default App;
