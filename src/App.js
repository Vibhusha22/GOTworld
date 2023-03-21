import './styles/App.css';
import {Routes, Route} from 'react-router-dom';
import BookDetails from './components/Details';
import BookList from './components/Bookslayout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path = "/" element = {<BookList/>}/>
      <Route path = "/books/:id" element = {<BookDetails/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
