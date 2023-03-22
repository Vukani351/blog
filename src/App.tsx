// import { Home } from "@mui/icons-material"
import { Routes, Route, BrowserRouter, useParams } from "react-router-dom"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Articles from "./Pages/Articles"
import Article from "./Pages/Article"

function App() {
  let { articleId } = useParams();
  console.log(articleId);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path={`/article/:${articleId}`} element={ <Article articleId={parseInt(articleId as string)} /> } />
        <Route path="articles" element={ <Articles/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
    </div>
  )
}

export default App