import React, {useState} from 'react'
import hlinik from './pictures/hlinik.jpg'
import titan from './pictures/titan.jpg'
import med from './pictures/med.jpg'
import nikl from './pictures/nikl.jpg'
import olovo from './pictures/olovo.jpg'
import zelezo from './pictures/zelezo.jpg'
import { HiOutlineClipboardCheck, HiArrowRight } from "react-icons/hi"

const Question = (props) => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setcurrentQuestion] = useState(0)
  const [correctanswer, setCorrectanswer] = useState("")
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
    if( isTrue ){
      setScore(score + 1);
      setCorrectanswer(true)
    } else{

    }

    console.log(score);
  }
  const nextQuestion = () => {
    if (currentQuestion < 5){
      setcurrentQuestion(currentQuestion + 1);
    }else{
      setcurrentQuestion(5);
      props.SetFinalResult(score)
      props.SetScoreView(true)
    }
  }
  return (
    <div className='flex flex-col gap-8'>
        <div className='flex px-4 items-center justify-between'>
        <div id='question'>
            <h2 className="pt-3 text-3xl font-black">Co je to za kov?</h2>
        </div>
            <div className='flex gap-1 rounded font-medium justify-center items-center w-20 h-10  bg-slate-200' id='question_counter'> <HiOutlineClipboardCheck size={26} /> {currentQuestion + 1}/6</div>
        </div>
        <div id='answers' className='flex justify-center items-center gap-8'>
            <div className='h-[380px] flex items-center'><img className='' width="380px" height="380px"  src={questions[currentQuestion].name}></img></div>
            <div className="w-1/3 flex justify-center items-center">
              <ul className='flex flex-col gap-5 text-lg font-semibold'>
                {questions[currentQuestion].options.map((option) => {
                  return(
                    <li onClick={() => optionClicked(option.isTrue)} className={correctanswer ? "bg-green-300 text-center drop-shadow px-28 rounded py-2" : "bg-slate-200 text-center drop-shadow px-28 easy duration-1000 rounded py-2"} key={option.id}> {option.name} </li>
                  );
                })}
              </ul>
            </div>
        </div>
        <button onClick={() => nextQuestion()} className="flex gap-2 justify-center items-center py-3 px-1 rounded-lg text-md font-bold text-white bg-violet-600">Další otázka<HiArrowRight size={28} /></button>
    </div>
  )
}

export default Question