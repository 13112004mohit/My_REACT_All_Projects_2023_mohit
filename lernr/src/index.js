import React from "react";
import ReactDOM from "react-dom";
import "./index.css" 
import { BrowserRouter } from "react-router-dom";
import MainContext from "./Context/UseContext_Hook_Main_2nd";


// import RfffClock from './0_Rfff/clock'
// import RffDarkTheme from './0_Rfff/darkTheme'
// import RffForm from './0_Rfff/form'
// import App from './App';
// import Vdo7to12thapa from './Learn_topic_wise/Thapa_video_7_to_12'
// import JsxAttribut from "./Learn_topic_wise/jsx_Attributes";
// import Whishe from "./reactrojects/projectHello.js";
// import Calculator from './1_.import&_Export/calc';
// import CardNetflexMovei from './reactrojects/Card_Netflex_Movei'
// import Ch1hook from './Hook/Ch1hook'
// import Ch2project from './Hook/ch2project'
// import Ch3DigClock from './Hook/Ch3DigClock'
// import Ch4events from './Hook/Ch4events'
// import Ch5forms from './Hook/Ch5forms'
// import Ch5forms2 from './Hook/Ch5forms2'
// import Ch5formshortcode from './Hook/Ch5formshortcode'
// import Ch5formshortcode2 from './Hook/Ch5formshortcode2'
// import Ch5formvvvshort from './Hook/Ch5formvvvshort'
// import Todoapp from './todolist/todo'
// import Accordino from './AccordionApp/Accordino'
// import NoteApp from './NoteApp/main'

/////////////////////////

// import ContextApi from './Context/ComApp'
// import ContexthookP from './Context/UseContext_Consumer_2nd'
// import ContexthookC from './Context/UseContext_Consumer_moreShort2nd'
// import UseEffect from './useEffectHook/main'
//  import ChangeTitle from './useEffectHook/ChangeTitle'
//  import CovideLIVE from './ApiUse/CovideLIVE'
// import Pokemon from './ApiUse/Pkemon'


/////////////////////
// import Routing from './React_router_dom/Mainn'
// import Livesearch from './LiveSearchfilter/Mainsearch'
// import LiveWeather from './LiveWeather/MainWeather'
  // import ShortCircuitinreact from './ShortCircuit/ShortCircuitinreact'
  // import ScrollAnimation from './ScrollAnimation/ScrollAnimation'
// import UseReducer from './Use_ReducerHOOK/Reducer'
// import Uncontrolledform from './useRef__UnControlled_form/Uncontrolledform'
import UseLayoutEffect from './useLayoutEffect_Hook/layout_hook'


  //  <></>  <--- this is Fragement we can write this things from this other way <ReactFragement><ReactFragement/>
  //  {}  <-- this is Expression of React 
  //  ``  <-- this is Template Literals using backticks
ReactDOM.render(
  <BrowserRouter>  
  <MainContext>
     {/* <RfffClock/>
     <RffDarkTheme/>
     <RffForm/> */}
      {/* <App /> */}
       {/* <Vdo7to12thapa/> */}
      {/* <JsxAttribut/> */}
      {/* <Whishe/> */}
      {/* <Calculator/> */}
      {/* <CardNetflexMovei/> */}
      {/* <Ch1hook/> */}
       {/* < Ch2project/>   */}
       {/* <Ch3DigClock />   */}
        {/* <Ch4events/> */}
        {/* <Ch5forms/> */}
        {/* <Ch5forms2/> */}
        {/* <Ch5formshortcode/> */}
        {/* <Ch5formshortcode2/> */}
        {/* <Ch5formvvvshort/> */}
        {/* <Todoapp/> */}
        {/* <Accordino/> */}
        {/* <NoteApp/> */}
        {/* ///////////////////////////////// */}

        {/* <ContextApi/> */}
        {/* <ContexthookP/> */}
        {/* <ContexthookC/> */}
        {/* <UseEffect/> */}
        {/* <ChangeTitle/> */}
        {/* <CovideLIVE/> */}
        {/* <Pokemon/> */}




        {/* ////////////////////////Routing React  */}
        {/* <Routing/> */}
        {/* <Livesearch/> */}
        {/* <LiveWeather/> */}
        {/* <ShortCircuitinreact/> */}
        {/* <ScrollAnimation/> */}
        {/* <UseReducer/> */}
        {/* <Uncontrolledform/> */}
        <UseLayoutEffect/>
    </MainContext>
  </BrowserRouter>,
  document.getElementById("root")
);
