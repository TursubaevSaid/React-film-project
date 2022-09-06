import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./client/component/navbar";
import HomePage from "./client/Pages/HomePage";
import MoviePage from "./client/Pages/MoviePage";
import SingleMoviePage from "./client/Pages/SingleMoviePage";
import Footer from "./client/component/Footer";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/movie" element={<MoviePage />} />
          <Route path="/movie/:id/*" element={<SingleMoviePage />} />
        </Routes>

        <Footer />
      </>
    );
  }
}

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route exact path="/" element={<HomePage />} />
//         <Route path="/movie" element={<MoviePage />} />
//         <Route path="/singlePage" element={<SingleMoviePage />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
