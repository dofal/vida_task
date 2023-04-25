import { useState } from 'react';
import Question from './components/Question';
import logo from './logo.svg';
import Results from './components/Results';


function App() {
  const [ScoreView, SetScoreView] = useState(false);
  const [FinalResult, SetFinalResult] = useState(0)
  if (ScoreView){
    return (
      <div className="flex justify-center items-center" id='main'>
        <div className='bg-white min-w-[65vw] min-h-[80vh] p-8 md:p-14 rounded-xl'>
          <Results FinalResult={FinalResult}/>
  
        </div>
      </div>
    );
  }else{
    return (
      <div className="flex justify-center items-center" id='main'>
        <div className='bg-white min-w-[65vw] min-h-[80vh] p-8 md:p-14 rounded-xl'>
          <Question SetScoreView={SetScoreView} SetFinalResult={SetFinalResult}/>
  
  
        </div>
      </div>
    );

  }
}

export default App;
