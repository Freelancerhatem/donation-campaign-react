

const Banner = () => {
    return (
        <div>
            
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="flex items-center">
                    <input type="text" placeholder="Type here" className="input input-bordered rounded-r-none text-black  w-96" />
                    <button className="btn btn-success bg-[#FF444A] border-none text-white hover:bg-[#ef9da0] rounded-l-none">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;