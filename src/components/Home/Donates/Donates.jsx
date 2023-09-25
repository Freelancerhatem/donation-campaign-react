import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Donationcard from './Donationcard';



const Donates = () => {

    const [donateCard,setDonateCard] = useState([]);
    const[noData,setData] =useState(false);
    const [isAllShow,setAllShow] =useState(false);
    
    useEffect(()=>{
        const local = JSON.parse(localStorage.getItem('data'));
        if(local){

            setDonateCard(local);
        }
        else{
            setData('NO DATA FOUND')
        }
    },[]);

    

    return (
        <div>
            {noData ? <p>{noData}</p> : <div className='grid grid-cols-3'>

            {isAllShow? donateCard.map((card,index) => <Donationcard key={index} card={card}></Donationcard>) :
                donateCard.slice(0,3).map((card,index) => <Donationcard key={index} card={card}></Donationcard>)
            }
            </div>   
            }
            <div className='flex justify-center mt-4'>
            <button className={`btn btn-success ${donateCard.length <3 ? 'hidden': ''}  text-center`} onClick={()=>setAllShow(!isAllShow)}>
             { isAllShow? 'Show less' : 'Show all'}</button>
            </div>
        </div>
    );
};

Donates.propTypes = {

};

export default Donates;