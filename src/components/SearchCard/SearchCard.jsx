import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const SearchCard = ({card}) => {

        const { title, id,img, category,bgcolor, catcolor, textcolor } = card;
    return (
        <div className="">
        
        <Link to={`/details/${id}`}>
        <div className={`mx-auto mt-12 w-72 mb-44 h-80 overflow-hidden rounded-xl bg-clip-border text-gray-700 shadow-lg`} style={{backgroundColor:bgcolor}}>
             <div>
             <img className='h-52 w-[362px]'src={img}/>
             </div>
             <div className='pl-4 mt-2'>
                 <p className='w-32 rounded-md mt-2 px-1' style={{backgroundColor:catcolor}}>{category}</p>
                 <h3 className='text-base mt-2 font-bold' style={{color:textcolor}}>{title}</h3>
             </div>
         </div>
        </Link>
        <hr />
     </div>
    );
};
SearchCard.propTypes = {
    card:PropTypes.object
};
export default SearchCard;
