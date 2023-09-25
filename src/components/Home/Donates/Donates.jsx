import PropTypes from 'prop-types';



const Donates = () => {
    const local = localStorage.getItem('data');
    const localStorageData = JSON.parse(local);
    const { title, img, price, category, } = localStorageData;

    return (
        <div className='flex w-96 gap-2 h-32 shadow-md rounded-sm mx-20 mt-10 items-center'>
            <div>
                <img src={img} className='h-32 rounded-sm' alt="" />
            </div>
            <div className=''>
                <p className='text-xs font-bold'>{category}</p>
                <h2 className='text-sm font-bold'>{title}</h2>
                <p>${price}</p>
                <button className='py-1 px-2 rounded-md text-xs bg-[#FF444A]'>view details</button>
            </div>
        </div>
    );
};

Donates.propTypes = {

};

export default Donates;