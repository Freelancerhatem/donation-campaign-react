

import swal from 'sweetalert';
import PropTypes from 'prop-types';

const Donationdata = ({ donatedata }) => {
    const { img, price, description, title, id } = donatedata || {};


    const handleDonate = () => {
        const donationLocaldata = [];
        const local = JSON.parse(localStorage.getItem('data'));
        if (!local) {
            donationLocaldata.push(donatedata);
            swal("Good Job!", "Donated Successfully!", "success");
            localStorage.setItem('data', JSON.stringify(donationLocaldata));

        }
        else {
            const isExist = local.find(localdata => localdata.id === id)
            if (!isExist) {

                swal("Good Job!", "Donated Successfully!", "success");
                donationLocaldata.push(...local, donatedata)
                localStorage.setItem('data', JSON.stringify(donationLocaldata));

            }
            else {

                swal("Error!", "added already!", "error");
            }


        }

    }
    return (
        <div>
            <div className="mx-20 relative">
                <img src={img} className="w-full h-[60vh] relative rounded-sm mx-auto" alt="" />
                <div className="bg-[#3e3d3dd6] absolute bottom-0 rounded-sm w-full flex items-center  h-20">

                    <button className="btn bg-[#FF444A] hover:bg-[#f45f64] border-none ml-5 text-white w-24 md:w-28 lg:w-40" onClick={() => handleDonate()}>Donate ${price} </button>

                </div>

            </div>

            <div className="mx-20 mt-10">
                <h2 className='text-3xl font-semibold'>{title}</h2>
                <p>{description}</p>
            </div>

        </div>
    );
};

Donationdata.propTypes = {
    donatedata: PropTypes.object
};

export default Donationdata;