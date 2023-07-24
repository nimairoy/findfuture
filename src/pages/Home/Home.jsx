import Search from "../../components/Search";
import CollegesContainer from "./CollegesContainer/CollegesContainer";
import ImageGallery from "./ImageGallery/ImageGallery";
import Research from "./Research/Research";


const Home = () => {
    return (
        <div>
            <Search></Search>
            <CollegesContainer></CollegesContainer>
            <ImageGallery></ImageGallery>
            <Research></Research>
        </div>
    );
};

export default Home;