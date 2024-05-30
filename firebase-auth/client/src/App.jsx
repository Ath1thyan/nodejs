// import './App.css'
import Login from './Login';
import SignupForm from './SignupForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
      {/* <SignupForm /> */}
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<SignupForm />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
