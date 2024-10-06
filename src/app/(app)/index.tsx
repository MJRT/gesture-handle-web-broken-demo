import React, { useState } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { runOnJS } from 'react-native-reanimated';

import LucideIcons from '@/components/lucide-icons'; // assuming you are using this package

export function Grip() {
  const [strokeWidth, setStrokeWidth] = useState(2);

  const hoverGesture = Gesture.Hover()
    .onStart(() => {
      runOnJS(setStrokeWidth)(6);
    })
    .onEnd(() => {
      runOnJS(setStrokeWidth)(2);
    });

  return (
    <GestureDetector gesture={hoverGesture}>
      {/* it will broken when switch to another tab */}
      <LucideIcons name="Dot" strokeWidth={strokeWidth} />
      {/* it's ok */}
      {/* <View style={{width: 200, height: 200, backgroundColor: 'red'}} ><Text>{`${strokeWidth}`}</Text></View> */}
    </GestureDetector>
  );
}

const App: React.FC = () => {
  return <Grip />;
};

export default App;
