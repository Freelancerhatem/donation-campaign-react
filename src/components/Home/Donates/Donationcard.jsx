
import PropTypes from 'prop-types';

const Donationcard = ({ card }) => {
    const { title, img, price, category,catcolor,textcolor,bgcolor } = card;
    console.log(card)
    const textStyle ={
        backgroundColor:catcolor,
        color:textcolor
    }
    return (
        <div className='flex  w-64 md:w-80 lg:w-96 gap-2 h-32 shadow-md rounded-sm mx-auto mt-10 items-center'>
            <div>
                <img src={img} className='w-40 h-32 rounded-sm' alt="" />
            </div>
            <div className=''>
                <p className='text-xs font-bold w-24' style={textStyle}>{category}</p>
                <h2 className='text-sm font-bold'>{title}</h2>
                <p style={{color:textcolor}}>${price}</p>
                <button className='py-1 px-2 rounded-md text-xs' style={{backgroundColor:bgcolor}}>view details</button>
            </div>
        </div>
    );
};

Donationcard.propTypes = {
    card: PropTypes.object
};

export default Donationcard;