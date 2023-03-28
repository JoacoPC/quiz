import React, { useState, useEffect } from 'react';
import { Button } from "@material-ui/core";
import { getQuizes } from '../../services/QuizService';
import { getCategories } from '../../services/QuizService';
import axios from "axios";
import SelectAutoWidth from '../Select/index';


function Home({setShowHome, setShowQuestions, setCategory, category}) {

    const [categories, setCategories] = useState(null);
    // const [quizes, setQuizes] = useState(null);

    const fetchData =  async () => {
        var res = await getCategories();
        setCategories(res);
    }

    useEffect(() => {
        fetchData();
      }, []);

    return (
        <>
        {(categories != null && categories.length) > 0 ? (

        
        <SelectAutoWidth data = {categories} 
                        setShowHome = {setShowHome}
                        setShowQuestions = {setShowQuestions}
                        setCategory = {setCategory}
                        category = {category}
                        >
        </SelectAutoWidth>
        ) : (null)}
        {/* {(categories != null && categories.length) > 0 ? 
        (categories.map((x) => {
            return(
                <>
                <li>
                    {x.name}
                </li>
                </>
            )
        })) : ((null))
        } */}
    </>
    )
}

export default Home;
