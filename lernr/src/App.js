// import logo from './logo.svg';
import './App.css';
import Navbar from './2_.props_&_defaultPorps_&_setState.js/Navbar';
import TextForm from './2_.props_&_defaultPorps_&_setState.js/TextForm';


function App() {
  return (
  <>
 {/* yha pr defaultprops call hoga kuki hmm title and aboutText ko mention nhi kiye khti */}
 <Navbar/> 

 {/*yha pr hmm title navbar ka props ka use krke lihe hai */}
 <Navbar
   title="HeadingYOURchoice"
   aboutText="AboutYOURchoice"
  />  


 <div className="container">
 <TextForm heading="Enter the text to analyze" /> 
 </div>


 <h1>App bar there</h1>

  </>
  );
}

export default App;
