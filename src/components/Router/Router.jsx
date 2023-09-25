import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";
import Banner from "../Home/Banner/Banner";


const Router = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 max-w-7xl mx-auto py-10">
                {
                    data.map((card, index) => <Cards key={index} card={card} index={index+1}></Cards>)
                }
            </div>
        </div>
    );
};

export default Router;