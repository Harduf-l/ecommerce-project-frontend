import './App.css';
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'

function App() {
  return (
    <div>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
