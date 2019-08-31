import React from 'react';
import './App.css';
/* import page1 from './images/1.png';
import page2 from './images/2.png';
import page3 from './images/3.png';
import page4 from './images/4.png';
import page5 from './images/5.png'; */
import HomeSplash from './components/HomeSplash/HomeSplash'


function App() {
  return (
    <main className='App'>
      <HomeSplash />
      <div className='container'>
{/*         <img src={page1} alt='page1' />
        <img src={page2} alt='page2' />
        <img src={page3} alt='page3' />
        <img src={page4} alt='page4' />
        <img src={page5} alt='page5' /> */}
      </div>
    </main>
  );
}

export default App;
