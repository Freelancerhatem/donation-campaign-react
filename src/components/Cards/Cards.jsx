import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Cards = ({ card }) => {
    const { title, id,img, category, description, price, bgcolor, catcolor, textcolor } = card;
    return (
        <div>
           <Link to={`/details/${id}`}>
           <div className={`mx-4 mt-4 h-80 overflow-hidden rounded-xl  ${bgcolor} bg-clip-border text-gray-700 shadow-lg`}>
                <div>
                <img className='h-52 w-[362px]'src={img}/>
                </div>
                <div className='pl-4 mt-2'>
                    <p className={`bg-${catcolor} w-32 rounded-md px-1 `}>{category}</p>
                    <h3 className='text-xl font-bold'>{title}</h3>
                </div>
            </div>
           </Link>
        </div>
    );
};

Cards.propTypes = {
    card: PropTypes.object
};

export default Cards;