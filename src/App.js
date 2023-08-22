import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "store";
import { Provider } from "react-redux";
import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import Careers from "containers/pages/Careers";
import Blog from "containers/pages/Blog";
import Contact from "containers/pages/Contact";
import Services from "containers/pages/Services";
import About from "containers/pages/About";
import Cases from "containers/pages/Cases";


function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
          {/* Error Display */}
          <Route path="*" element={<Error404/>} />
           {/* Home Display */}
           <Route path="/" element={<Home/>} />
           <Route path="/casos" element={<Cases/>} />
           <Route path="/servicios" element={<Services/>} />
           <Route path="/nosotros" element={<About/>} />
           <Route path="/carreras" element={<Careers/>} />
           <Route path="/blog" element={<Blog/>} />
           <Route path="/contactanos" element={<Contact/>} />


      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
 