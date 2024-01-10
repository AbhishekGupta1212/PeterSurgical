import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home  from './Components/Home';
import ResNav from './Components/Navbar2';
import { Flex } from '@chakra-ui/react';
import Sidebar from './Components/SideNav';

function App() {
  const[cat,setCat]=useState('Category 1')
  return (
    <div className="App">
      
      <ResNav/>
      <Flex>
         <Home cat={cat}/>
         <Sidebar setCat={setCat}/>
      </Flex>
  
         </div>
  );
}

export default App;
