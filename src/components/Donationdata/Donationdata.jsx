


import PropTypes from 'prop-types';

const Donationdata = ({donatedata}) => {
    const { img, price, description,title,id } = donatedata || {};
    
    
    const handleDonate=()=>{
        const donationLocaldata = [];
        const local = JSON.parse(localStorage.getItem('data'));
        if(!local){
            donationLocaldata.push(donatedata);
            localStorage.setItem('data',JSON.stringify(donationLocaldata));
            
        }
        else{
            const isExist =local.find(localdata =>localdata.id === id) 
            if(!isExist){
            
            donationLocaldata.push(...local,donatedata)
            localStorage.setItem('data',JSON.stringify(donationLocaldata));
            
            
            }
            else{
                alert('added already')
            }
            

        }
        
    }
    return (
        <div>
        <div className="mx-20 ">
           <img src={img} className="w-full h-[60vh]  mx-auto" alt="" />
           <div className="bg-slate-800   h-20">
               
                   <button className="btn bg-[#FF444A] border-none text-white" onClick={()=>handleDonate()}>Donate ${price}</button>
               
           </div>

       </div>

       <div className="mx-20">
           <h2>{title}</h2>
           <p>{description}</p>
       </div>

   </div>
    );
};

Donationdata.propTypes = {
    donatedata:PropTypes.object 
};

export default Donationdata;