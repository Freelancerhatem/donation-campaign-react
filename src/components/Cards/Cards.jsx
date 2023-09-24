import PropTypes from 'prop-types';

const Cards = ({ card }) => {
    const { title, img, category, description, price, bgcolor, catcolor, textcolor } = card;
    return (
        <div>
            <div className={`mx-4 mt-4 h-80 overflow-hidden rounded-xl  ${bgcolor} bg-clip-border text-gray-700 shadow-lg`}>
                <div>
                <img className='h-52 w-[362px]'src={img}/>
                </div>
                <div className='pl-4 mt-2'>
                    <p className={`bg-${catcolor} w-32 rounded-md px-1 `}>{category}</p>
                    <h3 className='text-xl font-bold'>{title}</h3>
                </div>
            </div>
        </div>
    );
};

Cards.propTypes = {
    card: PropTypes.object
};

export default Cards;