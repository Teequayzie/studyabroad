import React, { useEffect } from 'react';
import { BodyComponent, HeaderComponent, FooterComponent } from '../src/components/index';

function App() {

  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <BodyComponent></BodyComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
