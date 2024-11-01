import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Switch } from "react-router-dom";
import { checkAdBlock } from "adblock-checker";

import './App.css';
import Home from './components/Home.js';
import ReleaseNotes from './components/ReleaseNotes.js';
import PrivacyPolicy from './components/PrivacyPolicy.js';
import NoAccess from './components/NoAccess.js';


function App() {

  const [hasAdBlock, setHasAdBlock] = useState(null);


  useEffect(() => {
    // window.AOS.init();
    runCheck();
  }, []);

  const runCheck = async () => {
    const adBlockDetected = await checkAdBlock();
    setHasAdBlock(adBlockDetected);
    console.log('AdBlockChecker : ', adBlockDetected);
  };


  // if (hasAdBlock === true) {
  //   return (<NoAccess/>)
  // }


  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/release-notes" element={<ReleaseNotes />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </HashRouter>
  );


}

export default App;
