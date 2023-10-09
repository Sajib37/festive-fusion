import Banner from "../../Shared/Banner/Banner";
import ChoosenUs from "../../Shared/ChoosenUs/ChoosenUs";
import Members from "../../Shared/Members/Members";
import Services from "../../Shared/Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ChoosenUs></ChoosenUs>
            <Members></Members>
        </div>
    );
};

export default Home;