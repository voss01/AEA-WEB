"use client";

import { useEffect, useRef } from "react";

import DinoScript from "./DinoScript.js";
import Resources from "./Resources.js";

import "./Dino.css";

const ChromeDinoComponent = () => {
  const startDivRef = useRef(null);
  const endDivRef = useRef(null);

  useEffect(() => {
    // Append DinoScript dynamically
    const dinoScriptContainer = document.createElement("script");
    dinoScriptContainer.appendChild(document.createTextNode(DinoScript));
    //if (startDivRef.current.lastChild)
    if (
      startDivRef.current.lastChild.nodeType != startDivRef.current.TEXT_NODE
    ) {
      startDivRef.current.appendChild(dinoScriptContainer);
      startDivRef.current.appendChild(document.createTextNode(""));
    }

    // Append Runner script dynamically
    const runnerScriptContainer = document.createElement("script");
    runnerScriptContainer.appendChild(
      document.createTextNode(`new Runner('.interstitial-wrapper');`)
    );
    endDivRef.current.appendChild(runnerScriptContainer);
  }, []);

  return (
    <div ref={startDivRef}>
      {/* Inline styles */}
      <div id="main-frame-error" className="interstitial-wrapper">
        <Resources />
        <div ref={endDivRef} />
      </div>
    </div>
  );
};

export default ChromeDinoComponent;
