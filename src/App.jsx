import React, { useState } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Containers/HomePage';
import Questions from './Containers/Quiz';
import { Container } from '@material-ui/core';


function App() {
  const [showHome, setShowHome] = useState(true);
  const [showQuestions, setShowQuestions] = useState(false);
  const [category, setCategory] = useState('');

  return (

    <div className='App'>

      { showHome && (
        <Home 
          setShowHome = {setShowHome}
          setShowQuestions ={setShowQuestions}
          setCategory = {setCategory}
          category = {category}
        />
      )
      }

      {showQuestions && (
          <Questions 
            categoryId = {category}
          />
      )
      }
      


      {/* <Routes>

        <Route path='/' element={<Home /> } />
        <Route path="Questions" element={<Questions />}/>
      </Routes> */}

    </div>

    // <Container maxWidth="sm">
    //   <h1>todo ok...</h1>
    //   {/* <Home />
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="Questions" element={<Questions />}>
    //       </Route>
    //     </Routes>
    //   </BrowserRouter> */}
    // </Container>
    // // <div className="App">


    // </div>
  );
}

export default App;
