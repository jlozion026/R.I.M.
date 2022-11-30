import React, {FC} from 'react';
import './App.css'; 
// import SignIn from './pages/sign-in';
 import Dashboard from './pages/dashboard';


const App:FC = () =>{
  return (
    <>
      {/* <SignIn/> */}
      {Dashboard}
    </>
  );
}


// export default App;
export default Dashboard;
