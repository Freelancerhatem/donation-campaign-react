
const Donation = () => {
    const local = localStorage.getItem('data');
        console.log(JSON.parse(local))
    return (
        <div className="mx-20">
            <h1>this is donation</h1>
        </div>
    );
};

export default Donation;