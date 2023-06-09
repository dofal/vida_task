import React, {useState} from 'react'
import hlinik from './pictures/hlinik.jpg'
import titan from './pictures/titan.jpg'
import med from './pictures/med.jpg'
import nikl from './pictures/nikl.jpg'
import olovo from './pictures/olovo.jpg'
import zelezo from './pictures/zelezo.jpg'
import { HiOutlineClipboardCheck, HiArrowRight, HiCheck, HiOutlineX } from "react-icons/hi"

const Question = (props) => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setcurrentQuestion] = useState(0)
  const [correctanswer, setCorrectanswer] = useState()
  const [scorewatch, SetScoreWatch] = useState(true)
  const [ButtonText, SetButtonText] = useState("Další otázka")
  const questions = [
    {
      name: hlinik,
      file: "./pictures/hlinik.jpg",
      options: [
        {id: 0, name:"Hliník", isTrue:true},
        {id: 1, name:"Titan", isTrue:false},
        {id: 2, name:"Měď", isTrue:false},
        {id: 3, name:"Nikl", isTrue:false},
        {id: 4, name:"Olovo", isTrue:false},
        {id: 5, name:"Železo", isTrue:false}
      ],
    },
    {
      name: med,
      file: "med.jpg",
      options: [
        {id: 0, name:"Hliník", isTrue:false},
        {id: 1, name:"Titan", isTrue:false},
        {id: 2, name:"Měď", isTrue:true},
        {id: 3, name:"Nikl", isTrue:false},
        {id: 4, name:"Olovo", isTrue:false},
        {id: 5, name:"Železo", isTrue:false}
      ],
    },
    {
      name: nikl,
      file: "nikl.jpg",
      options: [
        {id: 0, name:"Hliník", isTrue:false},
        {id: 1, name:"Titan", isTrue:false},
        {id: 2, name:"Měď", isTrue:false},
        {id: 3, name:"Nikl", isTrue:true},
        {id: 4, name:"Olovo", isTrue:false},
        {id: 5, name:"Železo", isTrue:false}
      ],
    },
    {
      name: olovo,
      file: "olovo.jpg",
      options: [
        {id: 0, name:"Hliník", isTrue:false},
        {id: 1, name:"Titan", isTrue:false},
        {id: 2, name:"Měď", isTrue:false},
        {id: 3, name:"Nikl", isTrue:false},
        {id: 4, name:"Olovo", isTrue:true},
        {id: 5, name:"Železo", isTrue:false}
      ],
    },
    {
      name: titan,
      file: "titan.jpg",
      options: [
        {id: 0, name:"Hliník", isTrue:false},
        {id: 1, name:"Titan", isTrue:true},
        {id: 2, name:"Měď", isTrue:false},
        {id: 3, name:"Nikl", isTrue:false},
        {id: 4, name:"Olovo", isTrue:false},
        {id: 5, name:"Železo", isTrue:false}
      ],
    },
    {
      name: zelezo,
      file: zelezo.jpg,
      options: [
        {id: 0, name:"Hliník", isTrue:false},
        {id: 1, name:"Titan", isTrue:false},
        {id: 2, name:"Měď", isTrue:false},
        {id: 3, name:"Nikl", isTrue:false},
        {id: 4, name:"Olovo", isTrue:false},
        {id: 5, name:"Železo", isTrue:true}
      ],
    },
        
  ]
  const optionClicked = (isTrue) => {
    
    if( isTrue && scorewatch ){
      setScore(score + 1);
      setCorrectanswer(true)
      SetScoreWatch(false)
      setCorrectanswer(2)
    } else{
      SetScoreWatch(false)
      setCorrectanswer(1)
    }

    console.log(score);
  }
  const nextQuestion = () => {
    if (currentQuestion < 5){
      if (currentQuestion === 4) {
        SetButtonText("Zobrazit výskledky");
      }
      setcurrentQuestion(currentQuestion + 1);
      SetScoreWatch(true)
      setCorrectanswer(false)
      setCorrectanswer("")
    }else{
      setcurrentQuestion(5);
      props.SetFinalResult(score)
      props.SetScoreView(true)
    }
  }
  return (
    <div className='flex flex-col gap-8'>
        <div className='flex px-1 items-center justify-between md:px-4'>
        <div id='question'>
            <h2 className="pt-3 text-3xl font-black">Co je to za kov?</h2>
        </div>
            <div className='flex gap-1 rounded font-medium justify-center items-center w-20 h-10  bg-slate-200' id='question_counter'> <HiOutlineClipboardCheck size={26} /> {currentQuestion + 1}/6</div>
        </div>
        <div id='answers' className='flex flex-col justify-center items-center gap-0 md:flex-row gap-14'>
            <div className='h-[380px] flex items-center'><img className=' ease-in-out duration-300' width="380px" height="380px"  src={questions[currentQuestion].name}></img></div>
            <div className="w-1/3 flex justify-center items-center">
              <div className={(correctanswer === 1) ? " flex flex-col animation-pulse p-20 rounded text-white text-lg bg-red-500" : "hidden"}><HiOutlineX size={130}/></div>
              <div className={(correctanswer === 2) ?  "flex flex-col p-20 rounded text-white font-semibold bg-green-400" : "hidden"}><HiCheck size={130}></HiCheck></div>
              <ul className={(correctanswer === 1) ? "hidden z-30 flex-col gap-4 text-lg font-semibold bg-red-500" : (correctanswer === 2) ?  "hidden flex-col z-30 gap-4 text-lg font-semibold bg-green-400" : "flex flex-col gap-4 ease-in-out text-lg font-semibold"}>
                <h2 className="-mb-2 -ml-3 text-lg">Vyberte správnou odpoveď:</h2>
                {questions[currentQuestion].options.map((option) => {
                  return(
                    <li onClick={() => optionClicked(option.isTrue)} className="bg-slate-200 hover:-translate-y-1 hover:scale-105 transition ease-in-out text-center px-28 easy z-10 duration-300 rounded py-2" key={option.id}> {option.name} </li>
                  );
                })}
              </ul>
            </div>
        </div>
        <button onClick={() => nextQuestion()} className="flex gap-2 hover:translate-y-1 hover:scale-105 transition ease-in-out duration-300 justify-center items-center py-3  rounded-lg text-md font-bold text-white bg-indigo-500">{ButtonText}<HiArrowRight size={28}/></button>
    </div>
  )
}

export default Question