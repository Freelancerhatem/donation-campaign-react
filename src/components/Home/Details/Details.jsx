import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Donationdata from "../../Donationdata/Donationdata";

const Details = () => {
    const detailsData = useLoaderData();
    const params = useParams();
    const[donatedata,setDonatedata]=useState({});
    useEffect(()=>{
        const donationData = detailsData.find(donation => donation.id == params.id);
        setDonatedata(donationData)
    },[detailsData,params.id])
    
    
    return (
        <div>
            <Donationdata donatedata={donatedata}></Donationdata>
           
        </div>
    );
};

export default Details;