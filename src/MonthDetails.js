import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { FaTrash } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const MonthDetails = () => {
    const history = useHistory();
    const { id } = useParams();
    // console.log(id);
    const { data: month, error, isPending } = useFetch('http://localhost:3002/Tbl_Months/' + id);
    const handleClick = () => {
        fetch('http://localhost:3002/Tbl_Months/' + month.id, {
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
        <div className="container-fluid px-5">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {month && (
                <div className="row d-flex justify-content-center align-items-center p-5">
                    <div className="col-md-4">
                        <div className="card shadow rounded-5">
                            <img src={process.env.PUBLIC_URL + '/' + month.ImageDetail} className="card-img-top rounded-5" alt="month" />
                        </div>
                    </div>
                    <div className="col-md-8 ">
                        <div className="card bg-secondary shadow rounded-5">
                            <div className="card-body text-white">
                                <h5 className="card-title mb-3">{month.MonthMm}</h5>
                                <p className="card-text mb-3">{month.MonthEn}</p>
                                <p className="card-text mb-3">{month.FestivalMm}</p>
                                <p className="card-text mb-3">{month.FestivalEn}</p>
                                <p className="card-text mb-3">{month.Description}</p>
                                <p className="card-text mb-3">{month.Detail}</p>
                                <p className="card-text px-3">{month.Description}</p>
                                <div className="d-flex justify-content-around mt-3">
                                    <button className="btn btn-dark custom-icon" onClick={handleBack}><FaArrowAltCircleLeft /></button>
                                    <button className="btn btn-dark custom-icon" onClick={handleClick}><FaTrash/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
}

export default MonthDetails;