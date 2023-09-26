import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        <div>

            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div >
                        <form onSubmit={handleSearch} className="flex items-center">
                            <input type="text" placeholder="Type here" name="search" className="input input-bordered rounded-r-none text-black  w-96" />
                        {/* <Link to='/search'>
                            <button className="btn btn-success bg-[#FF444A] border-none text-white hover:bg-[#ef9da0] rounded-l-none" type="submit"
                            >Search</button>
                        </Link> */}
                        <button className="btn btn-success bg-[#FF444A] border-none text-white hover:bg-[#ef9da0] rounded-l-none" type="submit"
                            >Search</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* all search cards */}
            <div className="search">
                {
                    cards.map((card,index)=><SearchCard key={index} card={card}></SearchCard>)
                }
            </div>
        </div>
        
    );
};
Banner.propTypes = {
    DataSearch:PropTypes.array
};

export default Banner;