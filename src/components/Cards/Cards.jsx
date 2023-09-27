import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Cards = ({ card }) => {
    const { title, id,img, category,bgcolor, catcolor, textcolor } = card;
    return (
        <div>
           <Link to={`/details/${id}`}>
           <div className={`mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-clip-border text-gray-700 shadow-lg`} style={{backgroundColor:bgcolor}}>
                <div>
                <img className='h-52 w-[362px]'src={img}/>
                </div>
                <div className='pl-4 mt-2'>
                    <p className='w-32 rounded-md mt-2 px-1' style={{backgroundColor: catcolor, color: textcolor}}>{category}</p>
                    <h3 className='text-base mt-2 font-bold' style={{color:textcolor}}>{title}</h3>
                </div>
            </div>
           </Link>
        </div>
    );
};

Cards.propTypes = {
    card:PropTypes.object
};

export default Cards;