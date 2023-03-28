import { useState, useEffect } from 'react';
import {  getQuiz } from '../../services/QuizService';
import Button from '@mui/material/Button';
import Question from '../Question';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function formatQuestions(questions) {

    var formattedQuestions = [];
    questions.forEach(q => {

        var currentFormatted = {
            correctAnswer: q.correct_answer,
            answers : q.incorrect_answers,
            question: q.question
        };

        currentFormatted.answers.push(q.correct_answer);
        shuffle(currentFormatted.answers);

        formattedQuestions.push(currentFormatted);
    })

    return formattedQuestions;
}


export default function Quiz(category) {

    const [quiz, setQuiz] = useState([]);
    const [renderQuestions, setRenderQuestions] = useState(false);

    const fetchData =  async () => {
        var res = await getQuiz(category.categoryId);
        var formattedQuestions = formatQuestions(res);
        setQuiz(formattedQuestions);
        setRenderQuestions(true);
    }

    useEffect(() => {
        fetchData();
      }, []);


    return (
        <div>
            { renderQuestions && (
                <Question quiz = {quiz}></Question>
            )}

            { !renderQuestions && (
                <Box sx={{ display: 'flex' }}>
                  <CircularProgress />
                </Box>
            )
            }
        </div>
    )
}