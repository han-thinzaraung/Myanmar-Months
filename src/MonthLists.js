import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function MonthLists() {

    const [months, setMonths] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const monthsPerPage = 4;


    useEffect(() => {
        fetch('https://months-json.vercel.app/')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMonths(data)
            })
            .catch(error => console.log('Error fetching Months data:', error));
    }, []);

    const indexOfLastMonth = currentPage * monthsPerPage;
    const indexOfFirstMonth = indexOfLastMonth - monthsPerPage;
    const currentMonths = months.slice(indexOfFirstMonth, indexOfLastMonth);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="container-fluid px-5 py-3 mt-5" id="months">
            <h3 className='mb-5 text-dark'>မြန်မာလ အသေးစိတ်များ</h3>
            {/* <div className='row mb-3'>
                <CoverFlow imagesArr={imagesArr} />
            </div> */}

            <div className="row flex-nowrap overflow-auto">
                {currentMonths.map(month => (

                    <div className="col-md-3 mb-4" key={month.id} data-aos="zoom-in">
                        <div className="card border-0 rounded-4 shadow">
                            <div className='card-body'>
                            <Link to={`/months/${month.id}`}> <img src={process.env.PUBLIC_URL + '/' + month.ImagePath} className="card-img-top small-image rounded-4" alt="Month" /></Link>
                            <div className="rounded-4 py-5 overlay">
                                <h5 className="text-white">{month.MonthMm}</h5>
                                <h6 className="text-white">{month.MonthEn}</h6>
                            </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
            <nav>
                <ul className="pagination justify-content-center ">
                    {Array.from({ length: Math.ceil(months.length / monthsPerPage) }, (_, i) => (
                        <li key={i} className={`page-item ${i + 1 === currentPage ? 'active' : ''}`}>
                            <button onClick={() => paginate(i + 1)} className="page-link">{i + 1}</button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default MonthLists;
