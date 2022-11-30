import React, {FC} from 'react';
import './App.css'; 
// import SignIn from './pages/sign-in';
import Dashboard from './pages/dashboard';
// import Logs from './pages/dashboard';


const App:FC = () =>{
  return (
    <>
      {/* <SignIn/> */}
      {Dashboard}
      {/* {Logs}  */}
    </>
  );
}


// export default App;
export default Dashboard;
// export default Logs
