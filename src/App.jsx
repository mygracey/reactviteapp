import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import Services from "./Services"
import Contact from "./Contact"
// import Search from "./Search"
// import Cards from "./Cards"
// import Books from "./Books"
import Footer from "./Footer"
import ErrorPage from "./ErrorPage"
import Javascriptone from "./Javascriptone"
import LoginForm from "./LoginForm"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App(){

  return(
    <div className="app">
<Router>
   <Navbar />
  <Routes>

     
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />}>

          {/* <Route path="/serviceone" element={<Search/>}/>
          <Route path="/servicetwo" element={< Cards/>} />
          <Route path="/servicethree" element={<Books />} /> */}
      </Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="/jsone" element={<Javascriptone/>} />
      <Route path="/login" element={<LoginForm/>} />
      <Route path="*" element={<ErrorPage/>} />

    </Routes>
    <Footer />
</Router>
    </div>
  )

}
export default App