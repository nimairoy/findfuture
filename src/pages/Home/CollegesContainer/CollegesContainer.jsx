import Container from "../../../components/Container";
import image1 from '../../../assets/images/college1.jpg'
import image2 from '../../../assets/images/college2.jpg'
import image3 from '../../../assets/images/college3.jpg'

const CollegesContainer = () => {
    return (
        <div>
            <Container>
                <div className="md:flex space-y-8 md:space-y-0 md:justify-between gap-6 pb-24">
                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure><img src={image1} alt="College image" className="rounded-md"/></figure>
                        <div className="card-body bg-slate-100">
                            <h2 className="card-title">
                                College Name
                            </h2>
                            <p>Admission Start</p>
                            <p>Admission End</p>
                            <p>Events</p>
                            <p>Sports</p>
                            <p>Research History</p>
                            <button className="btn w-1/2 mx-auto mt-5 btn-primary">Details</button>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure><img src={image2} alt="College image" className="rounded-md"/></figure>
                        <div className="card-body bg-slate-100">
                            <h2 className="card-title">
                                College Name
                            </h2>
                            <p>Admission Start</p>
                            <p>Admission End</p>
                            <p>Events</p>
                            <p>Sports</p>
                            <p>Research History</p>
                            <button className="btn w-1/2 mx-auto mt-5 btn-primary">Details</button>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure><img src={image3} alt="College image" className="rounded-md"/></figure>
                        <div className="card-body bg-slate-100">
                            <h2 className="card-title">
                                College Name
                            </h2>
                            <p>Admission Start</p>
                            <p>Admission End</p>
                            <p>Events</p>
                            <p>Sports</p>
                            <p>Research History</p>
                            <button className="btn w-1/2 mx-auto mt-5 btn-primary">Details</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CollegesContainer;