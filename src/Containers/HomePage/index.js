import React, { useState, useEffect } from 'react';
import { Button } from "@material-ui/core";
import { getQuizes } from '../../services/QuizService';
import { getCategories } from '../../services/QuizService';
import axios from "axios";
import SelectAutoWidth from '../Select/index';


function Home() {

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

        
        <SelectAutoWidth data = {categories}>

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
