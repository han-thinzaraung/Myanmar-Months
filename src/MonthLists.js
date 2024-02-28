import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function MonthLists() {
    const [months, setMonths] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const monthsPerPage = 4;

    useEffect(() => {
        fetch('http://localhost:3002/Tbl_Months')
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
        <div className="container-fluid px-5 py-3" id="months">
            <div className="row flex-nowrap overflow-auto">
                {currentMonths.map(month => (
                    <div className="col-md-3 mb-4" key={month.id}>
                        <div className="card text-secondary">
                        <Link to={`/months/${month.id}`}> <img src={process.env.PUBLIC_URL + '/' + month.ImagePath} className="card-img-top small-image" alt="Month" /></Link>
                            <div className="card-body shadow rounded-5">
                                <h5 className="card-title">{month.MonthMm}</h5>
                                <p className="card-text">{month.MonthEn}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <nav>
                <ul className="pagination justify-content-center">
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
