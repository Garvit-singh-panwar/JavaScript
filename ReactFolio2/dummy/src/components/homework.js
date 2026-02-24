import React, { useState, useEffect } from 'react';

const WindowSizeDisplay = () => {
  // 1. Initialize state with the current window dimensions
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // 2. Define the handler function
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // 3. Add the event listener when the component mounts
    window.addEventListener('resize', handleResize);

    // 4. Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty array ensures this runs only on mount/unmount

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Window Dimensions</h2>
      <p><strong>Width:</strong> {windowSize.width}px</p>
      <p><strong>Height:</strong> {windowSize.height}px</p>
      <div style={{ marginTop: '10px', color: '#666' }}>
        Try dragging the edge of the window or opening Inspect Element!
      </div>
    </div>
  );
};

export default WindowSizeDisplay;

// 1. Initialization (The State)
// Action: const [windowSize, setWindowSize] = useState(...)

// Purpose: We create a "memory slot" in React to hold the width and height. We initialize it with the current size so the screen isn't empty on the first load.

// 2. The Setup (The Effect)
// Action: window.addEventListener('resize', handleResize)

// Purpose: We tell the browser: "Hey, every time the window changes shape, go run the handleResize function."

// Timing: This happens inside useEffect with [] so it only sets up the listener once.

// 3. The Update (The Handler)
// Action: setWindowSize({ width: window.innerWidth, ... })

// Purpose: When the user drags the window, the browser triggers the event. The function captures the new width and height and tells React to update the state.

// Result: React sees the state changed and "re-paints" the numbers on your screen.

// 4. The Cleanup (The Return)
// Action: return () => window.removeEventListener('resize', handleResize)

// Purpose: This is the "garbage collection." If the component is removed, we stop listening.

// Why? If we didn't do this, the browser would keep trying to update a component that doesn't exist anymore, leading to a "Memory Leak."

// Why use an object { width, height } instead of two separate states?
// Using an object is often cleaner because width and height usually change at the exact same time. It allows React to perform a single update instead of two separate ones.