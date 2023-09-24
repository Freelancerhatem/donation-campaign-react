import { Outlet, useLoaderData } from "react-router-dom";
import Nav from "./Navbar/Nav";
import Banner from "./Banner/Banner";
import Cards from "../Cards/Cards";

const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <Nav></Nav>
            <Banner></Banner>
            <Outlet></Outlet>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 max-w-7xl mx-auto py-10">
                {
                    data.map((card, index) => <Cards key={index} card={card}></Cards>)
                }
            </div>

        </div>
    );
};

export default Home;