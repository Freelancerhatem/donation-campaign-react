import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import SearchCard from "../../SearchCard/SearchCard";

const Banner = ({DataSearch}) => {
    const [searchdata,setSearch] =useState('');
    const [cards,setCards] =useState([])    
    
    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.search.value);
        
           };
    useEffect(()=>{
        const searchCards =DataSearch.filter(searchCard=>searchCard.category.toLowerCase() == searchdata.toLowerCase());
        setCards(searchCards)
    },[DataSearch,searchdata]);

    localStorage.setItem('search',JSON.stringify(cards));



    return (
        <div className="">

            <div className="hero min-h-[92vh] " style={{ backgroundImage: 'url(https://i.ibb.co/QK7hNm2/banner.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div >
                        <form onSubmit={handleSearch} className="flex items-center">
                            <input type="text" placeholder="Type here" name="search" className="input input-bordered rounded-r-none text-black w-52 md:w-96 lg:w-96"  required/>                       
                        <button className="btn btn-success bg-[#FF444A] border-none outline-none text-white hover:bg-[#ef9da0] rounded-l-none" type="submit"
                            >Search</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* all search cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    cards.map((card,index)=><SearchCard key={index} card={card}></SearchCard>)
                }
            </div>
        </div>
        
    );
};
Banner.propTypes = {
    DataSearch:PropTypes.array,
    handleSearch:PropTypes.func,
    cards:PropTypes.array
};

export default Banner;