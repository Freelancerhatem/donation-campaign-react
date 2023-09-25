
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Label 1', value: 30 },
  { name: 'Label 2', value: 70 },
];

  
  

const colors = ['#FF5733', '#3366FF'];

const Statistics = () => {
  return (
   <div className='flex flex-col items-center justify-center'>
     <PieChart width={400} height={400}>
      <Pie data={data} dataKey="value" nameKey="name" outerRadius={130} fill="#8884d8">
        {data.map((entry, index) => (
          <Cell key={index} fill={colors[index]} />
        ))}
      </Pie>
    </PieChart>
   <div className='flex items-center gap-1'>
    <p>Your donation</p><div className='bg-green-400 h-3 w-20'></div>
    <p>Total donation</p><div className='bg-red-400 h-3 w-20'></div>
   </div>
   </div>
  );
};

export default Statistics;
