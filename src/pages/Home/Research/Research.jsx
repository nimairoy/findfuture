import Container from "../../../components/Container";
import image1 from '../../../assets/images/college1.jpg'
import image2 from '../../../assets/images/college2.jpg'
import image3 from '../../../assets/images/college3.jpg'

const Research = () => {
    return (
        <div className="mb-24">
            <Container>
                <h1 className="text-4xl text-center mb-12">Research News</h1>
                <div className="flex justify-between items-center space-x-5 shadow-lg">
                    <div className="flex-1">
                        <img src={image2} alt="" />
                    </div>
                    <div className="flex-1">
                        <p>Wednesday, July 19, 2023</p>
                        <h2 className="text-2xl mt-2 mb-3">Research Heading</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, animi.</p>
                    </div>
                    <div className="flex-1">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. deserunt quisquam asperiores maxime, veniam delectus reprehenderit! Odio ducimus nostrum, accusamus sequi saepe necessitatibus porro eligendi error modi? Vitae magni accusamus eos ipsa iusto ea fugit perferendis quidem molestiae voluptatum, dolores sit vero sapiente dolorum explicabo</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Research;