import { HiOutlineClipboardCheck,HiOutlineChartPie } from "react-icons/hi";
import { MdRestartAlt } from "react-icons/md";
import { PieChart } from 'react-minimal-pie-chart';

const Results = (props) => {

  return (
    <div className='flex flex-col gap-8'>
        <div className='flex px-1 items-center justify-between md:px-3'>
        <div id='question'>
            <h2 className="pt-3 text-3xl font-black">Výsledky</h2>
        </div>
            <div className='flex gap-1 rounded font-medium justify-center items-center w-20 h-10  bg-slate-200' id='question_counter'> <HiOutlineChartPie size={26} /></div>
        </div>
        <div id='answers' className='flex flex-col justify-center items-center gap-1 md:flex-row gap-8 md:justify-around'>
            <div className="flex flex-col items-center justify-center gap-1 md:gap-4 h-[380px]">
                <h3 className="text-xl font-bold">Měl/a jste {props.FinalResult} správných odpovědí ze 6 otázek</h3>
                <h3 className="text-lg">a dosáhl/a jste úspěšnosti </h3>
                <h3 className="text-xl font-bold">{props.FinalResult/6*100}%</h3>
            </div>
            <div className="py-0 md:py-6">
                <PieChart
                    data={[
                        { title: 'One', value:props.FinalResult, color: '#59981A' },
                        { title: 'Two', value: 6-props.FinalResult, color: '#C13C37' },
                    ]}
                />
            </div>

        </div>
        <button onClick={() => window.location.reload(false)} className="flex gap-2 hover:translate-y-1 hover:scale-105 transition ease-in-out duration-300 justify-center items-center py-3 px-1 rounded-lg text-md font-bold text-white bg-indigo-500">Restartovat kvíz<MdRestartAlt size={28} /></button>
    </div>
  )
}

export default Results