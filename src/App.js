import './App.css';
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'

function App() {
  return (
    <div id="htmldiv">
      <div id="bodydiv">
          <Header/>
          <Content/>
      </div>
      <div id="footerdiv">
          <Footer/>
      </div>
    </div>
  );
}

export default App;
