import {Route , Switch , Redirect} from 'react-router-dom';
import Nav from './Components/Navbars';
import Footer from './Components/Footer';
import Main from './Pages/Main/Main_banner/Main';
import About from './Pages/About/About_banner/About';
import Otbel from './Pages/Otbelivatel/Otbel';
import Contact from './Pages/Contact/Contact';
import Article from './Pages/Articles/Articles';
import RightClear from './Pages/Articles/RightClear/rightClear';
import Deepclear from './Pages/Articles/Deepclear/Deepclear';
import Prostyn from './Pages/Articles/Prostyn/Prostyn';
import High from './Pages/Articles/High/high';
import Method from './Pages/Articles/Method/Method';
import Lifehack from './Pages/Articles/Lifehack/lifehack';
import Aknur from './Pages/Aknur Poroshok/Aknur';
import Toilet from './Pages/Toilet/Toilet';
import Ainur from './Pages/Ainur Poroshok/Ainur'

function App() {
  return (
      <>
        <Nav />
        <Switch >
            <Route path='/' exact component={Main}/>
            <Route path='/about' component={About}/>
            <Route path='/cleaner' component={Otbel}/> 
            <Route path='/contact' component={Contact}/>
            <Route path='/article' component={Article}/>  
            <Route path='/right-clear' component={RightClear} /> 
            <Route path='/deepclear' component={Deepclear}/>
            <Route path='/prostyn' component={Prostyn}/>
            <Route path='/high-clear' component={High}/>
            <Route path='/method'  component={Method}/>
            <Route path='/lifehack' component={Lifehack} />
            <Route path='/aknur-product' component={Aknur}/>
            <Route path='/soap-product' component={Toilet}/>
            <Route path='/ainur-product' component={Ainur}/>
            <Redirect to='/' />
        </Switch>
        <Footer />
      </>
  )
}

export default App;
