import { useState, useEffect } from 'react';
import { getQuiz } from '../../services/QuizService';
import Button from '@mui/material/Button';
import './question.css'
import { makeStyles } from '@material-ui/styles';


// export default function Questions({data}) {
export default function Question({ quiz }) {

    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState();
    const [isCorrect, setIsCorrect] = useState(false);

    const useStyles = makeStyles((theme) => ({
        wrongAnswer: {
          backgroundColor: "red",
        },
        rightAnswer: {
            backgroundColor: "green"
        }
      }));

    const classes = useStyles();

    
    { console.log(quiz[index]) }

    const handleSelect = (ans) => {
        setSelected(ans);
        if (ans == quiz[index].correctAnswer){
            setIsCorrect(true);
        }
    }
    
    const selectedClass = (ans) => {
        if (ans == selected && isCorrect){
            return classes.rightAnswer
        } else if(ans == selected && !isCorrect){
            return classes.wrongAnswer
        }

        // if (isCorrect) {
        //     return classes.rightAnswer
        // }else {
        //     return classes.wrongAnswer
        // }
        // setIndex(index + 1);
        // setSelected(false);
    }

    const handleNext = () => {
        setIndex(index + 1);
        setSelected();
        setIsCorrect(false);
    }

    // const answerClass = (ans) {

    // }


    return (
        <div>
            <h1> {quiz[index].question} </h1>
            <div className='answers'>
                {quiz[index].answers.map(ans =>
                    <Button className = {` ${selected && selectedClass(ans)}`}
                    // <Button className = "wrong"
                            variant="outlined"
                            onClick={() => handleSelect(ans)}
                            disabled={isCorrect}
                    >
                        {ans}
                    </Button>
                )}
        </div>

        <Button
            onClick={() => handleNext()}
        > Next</Button>
        </div>
    )
}