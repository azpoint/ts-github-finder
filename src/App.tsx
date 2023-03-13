// Dependencies
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GithubProvider } from "./context/github/githubContext";
import { AlertProvider } from "./context/alert/AlertContext";

//Components
import Navbar from "./components/layaout/Navbar";
import Footer from "./components/layaout/Footer";
import Alert from "./components/layaout/Alert";

//Componets --- Pages
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import User from "./pages/User";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar title="TS Github Finder" />

            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/not-found" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
                <Route path="/user/:login" element={<User/>} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
