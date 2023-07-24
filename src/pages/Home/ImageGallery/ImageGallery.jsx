
import './Gallery.css'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Container from '../../../components/Container';

const images = [
    'https://i.ibb.co/3BQ57Pp/g3.jpg',
    'https://i.ibb.co/71vQTvB/pexels-karl-rayson-16255363.jpg',
    'https://i.ibb.co/tpyPm3n/g10.jpg',
    'https://i.ibb.co/WPnmNYp/g2.jpg',    
    'https://i.ibb.co/8cjhHQy/g8.jpg',
    'https://i.ibb.co/ZhRJXW7/g9.jpg',
    'https://i.ibb.co/0sxqGvV/g5.jpg',
    'https://i.ibb.co/xLDXfzb/g6.jpg',
    'https://i.ibb.co/2nHwnsX/g7.jpg',
    'https://i.ibb.co/FH4NbYt/g1.jpg',
]

const ImageGallery = () => {
    const columnsCountBreakPoints = { 350: 1, 750: 2, 900: 3, 1200: 4, 1300: 5 };

    return (
        <div className="pb-24">
            <Container>
                <h1 className="text-4xl text-center mb-12">Top Graduates</h1>
                <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints} className="images">
                    <Masonry gutter={4}>
                        {images.map((image, i) => (
                            <img src={image} key={i} alt="" />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </Container>
        </div>
    );
};

export default ImageGallery;