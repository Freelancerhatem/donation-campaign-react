
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell,ResponsiveContainer,Legend } from 'recharts';


const Statistics = () => {
// sum of donation
const PieLabelLocalData = JSON.parse(localStorage.getItem('data'));
const SumPieLabelData = PieLabelLocalData.reduce((previousValue,currentValue)=>previousValue+currentValue.price,0);


// total price of  donation

const totalDonationData = useLoaderData();
const totalDonation = totalDonationData.reduce((currentPrice,previousPrice)=>currentPrice + previousPrice.price,0)





const data = [
  { name: 'Your Donation', value: SumPieLabelData },
  { name: 'Total Donation', value: totalDonation },
];

  
  

const colors = ['#7EFB49', '#FF5733'];
const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
 
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


  return (
    <div>
    <div className="flex  justify-center items-center">
        
        <div className="">
            {/* <ResponsiveContainer width={400} height={400} className=""> */}
                <PieChart width={400} height={400}>
                    
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>
                    <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                </PieChart>
            {/* </ResponsiveContainer> */}
        </div>
    </div>
</div>
  );
};

export default Statistics;
