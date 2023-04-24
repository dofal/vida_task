import { HiOutlineClipboardCheck,HiOutlineChartPie } from "react-icons/hi";
import { MdRestartAlt } from "react-icons/md";
import { PieChart } from 'react-minimal-pie-chart';

const Results = (props) => {

  return (
    <div className='flex flex-col gap-8'>
        <div className='flex px-4 items-center justify-between'>
        <div id='question'>
            <h2 className="pt-3 text-3xl font-black">Výsledky</h2>
        </div>
            <div className='flex gap-1 rounded font-medium justify-center items-center w-20 h-10  bg-slate-200' id='question_counter'> <HiOutlineChartPie size={26} /></div>
        </div>
        <div id='answers' className='flex justify-around items-center gap-8'>
            <div className="flex flex-col items-center justify-center gap-4">
                <h3 className="text-xl font-bold">Měl/a jste {props.FinalResult} správných odpovědí ze 6 otázek</h3>
                <h3 className="text-lg">a dosáhl/a jste úspěšnosti </h3>
                <h3 className="text-xl font-bold">{props.FinalResult/6*100}%</h3>
            </div>
            <div className="py-6">
                <PieChart
                    data={[
                        { title: 'One', value:props.FinalResult, color: '#59981A' },
                        { title: 'Two', value: 6-props.FinalResult, color: '#C13C37' },
                    ]}
                />
            </div>

        </div>
        <button className="flex gap-2 justify-center items-center py-3 px-1 rounded-lg text-md font-bold text-white bg-violet-600">Restartovat kvíz<MdRestartAlt size={28} /></button>
    </div>
  )
}

export default Results