import { Container, Grid } from "@material-ui/core";

import Profile from "./components/Profiles/Profile";
import Header from "./components/Header/Header";
import Portfolio from "./pages/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import Resume from "./pages/Resume/Resume";
import About from "./pages/About/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
function App() {
  return (
    <Container className={"top_60 "}>
      <Grid container spacing={7}>
        <Grid item lg={3} md={4} sm={12} xs={12}>
          <section className="container_shadow">
            <Profile />
          </section>
        </Grid>

        <Grid item xs>
          <Router>
            <Header />
            <div className="main-content">
              <Routes>
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/" element={<Resume />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          </Router>

          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
