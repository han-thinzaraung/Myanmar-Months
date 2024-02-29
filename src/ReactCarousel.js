import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ReactCarousel = (props) => {
    const [months, setMonths] = useState([]);

    useEffect(() => {
        fetch('https://months-json.vercel.app/Tbl_Months/')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMonths(data)
            })
            .catch(error => console.log('Error fetching Months data:', error));
    }, []);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div className='container-fluid px-5 py-3 mt-5'>
            <h3 className='mb-5 text-secondary'>မြန်မာ လ အသေးစိတ်များ</h3>
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                infinite={true}
                autoPlay={props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {months.map(month => (
                    <div className="card mx-4" key={month.id}>
                        <Link to={`/months/${month.id}`}>
                            <img src={process.env.PUBLIC_URL + '/' + month.ImagePath} className="img-top small-image" alt="Month" />

                            <div className="overlay">
                                <div className="card-body text-center bg-dark">
                                    <h6 className="card-title text-light mb-0">{month.MonthMm}</h6>
                                    <h5 className="card-title text-light mb-0">{month.MonthEn}</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </Carousel>
        </div >
    );
}

export default ReactCarousel;
