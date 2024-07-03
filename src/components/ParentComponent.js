import React, { useState } from "react";

function ParentComponent() {
  const [sharedState, setSharedState] = useState("");

  const handleStateChange = (event) => {
    setSharedState(event.target.value);
  };

  return (
    <div className="border border-black p-4 m-4">
      <ChildComponentA
        sharedState={sharedState}
        handleStateChange={handleStateChange}
      />
      <ChildComponentB sharedState={sharedState} />
    </div>
  );
}

function ChildComponentA({ sharedState, handleStateChange }) {
  return (
    <div className="border border-black p-4 m-4">
      <input type="text" value={sharedState} onChange={handleStateChange} />
    </div>
  );
}

function ChildComponentB({ sharedState }) {
  return (
    <div className="border border-black p-4 m-4">
      <p>Shared state: {sharedState}</p>
    </div>
  );
}

export default ParentComponent;
