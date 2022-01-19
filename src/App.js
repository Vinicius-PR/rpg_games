import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import PerfectWorld from './pages/PerfectWorld';
import GuildWar2 from './pages/GuildWar2';
import WorldOfWarcraft from './pages/WorldOfWarcraft';
import ElderScrollOnline from './pages/ElderScrollOnline';
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/Theme";
import { LanguageProvider } from "./context/Language";
import ScrollToTop from "./context/ScrollToTop";


function App() {
  return (
    <LanguageProvider>
    <ScrollToTop/>
    <ThemeProvider>
      <Header/>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/perfect-world" element={<PerfectWorld />} />
          <Route path="/guild-war-2" element={<GuildWar2 />} />
          <Route path="/world-of-warcraft" element={<WorldOfWarcraft />} />
          <Route path="/elder-scroll-online" element={<ElderScrollOnline />} />
        </Routes>
      </Layout>
      </ThemeProvider>
      </LanguageProvider>
  );
}

export default App;
