import MonthLists from "./MonthLists";
import month1 from "./month1.jpg";
import month2 from "./month2.jpg";
import month3 from "./month3.jpg";


const Home = () => {
    return (
        <div className="container-fluid py-3">
            {/* Home Carousel */}
            <div id="demo" className="carousel slide" data-bs-ride="carousel">


                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>


                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={month1} alt="" className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src={month2} alt="" className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src={month3} alt="" className="d-block w-100" />
                    </div>
                </div>


                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>

            <MonthLists />
        </div>
    );
}

export default Home;