import React, {useState} from 'react'
import HomePage from './pages/HomePage'
import DemoPage from './pages/DemoPage'

/*page switcher, useState adds state variables to funct compon*/

const App = ()  =>{
    const[showDemo, setShowDemo] = useState(false);

    return showDemo 
    ? <DemoPage onBack={() => setShowDemo(false)} />
    : <HomePage onStartDemo={() => setShowDemo(true)} />; 
};

export default App;