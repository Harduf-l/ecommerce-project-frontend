import './App.css';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'

import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'


function App() {
  return (
    <div id="htmldiv">
      <div id="bodydiv">
          {/* <Header/> */}
          <Content/>
      </div>
      <div id="footerdiv">
          <Footer/>
      </div>
    </div>
  );
}

export default App;
