import { useState } from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import App from './App';
import data from './Components/data';

import Description from './Components/description';


function Routerr() {
const[otherData,setOtherData]=useState(data);
console.log(data)
    return (  
      
    <Router>
<Routes>
<Route path='/' element={<App otherData={otherData} setOtherData={setOtherData} />}></Route>
<Route path='/description/:idd' element={<Description/>}></Route>

</Routes>
    </Router>
    );
}

export default Routerr;