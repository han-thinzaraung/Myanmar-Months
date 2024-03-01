import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const MonthDetails = () => {
    const history = useHistory();
    const { id } = useParams();
    // console.log(id);
    const { data: month, error, isPending } = useFetch('https://months-json.vercel.app/Tbl_Months/' + id);
    const handleClick = () => {
        fetch('https://months-json.vercel.app/Tbl_Months/' + month.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        }).catch((e) => {
            console.log(e);
        })

    }
    const handleBack = () => {
        history.goBack(); // Go back to the previous page
    };
    return (
        <div className="container-fluid px-5 py-3">
            {isPending && <div className="loading">Loading...</div>}
            {error && <div>{error}</div>}
            {month && (
                 <div className='row'>
                    <h3 className="mb-5 mt-5">{month.MonthMm}<span className="text-uppercase">({month.MonthEn})</span></h3>
                    <h3 className="mb-5">{month.FestivalMm}<span className="text-uppercase">({month.FestivalEn})</span></h3>
                    <div className="col-md-6">
                        <div className="card mb-3" data-aos="zoom-in">
                            <img src={process.env.PUBLIC_URL + '/' + month.ImageDetail} className="card-img-top" alt="month" />
                        </div> 
                        <p className="mb-3 text-start custom-line-height " data-aos="fade-up">{month.Description}</p>
                        <button className="btn btn-outline-dark " onClick={handleBack}><FaArrowAltCircleLeft /></button>
                    </div>
                    <div className="col-md-6">
                        <p className="mb-3 text-start custom-line-height " data-aos="zoom-in">{month.Detail}</p>
                    </div>
                </div>
            )}
        </div>

    );
}

export default MonthDetails;