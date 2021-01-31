import React from "react";
import './Profile.css';

const ReviewList = ()=>{
    return(
        <>
            <section>
                <div className="container emp-profile">
                    <form method="post">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile-img">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                                        alt=""/>
                                </div>
                                <div className="profile-work mt-2">
                                    <p>Roma</p>
                                    <a href="">Profile</a><br/>
                                    <a href="">Edit Profile</a><br/>
                                    <a href="">My Review</a>

                                </div>
                            </div>
                            <div className="col-md-8">
                                <h2 className="text-left">My review</h2>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-10">
                                                <h5 className="card-title text-left">Card title </h5>
                                            </div>
                                            <div className="col-md-2">
                                                <span className="text-danger font-weight-bold">&#42;</span> <span
                                                className="font-weight-bold">4.7</span>
                                            </div>
                                        </div>
                                        <p className="text-left">Dhaka * 2000-33-3 </p>
                                        <p className="card-text text-left">With supporting text below as a natural lead-in to additional
                                            content.</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-10">
                                                <h5 className="card-title text-left">Card title </h5>
                                            </div>
                                            <div className="col-md-2">
                                                <span className="text-danger font-weight-bold">&#42;</span> <span
                                                className="font-weight-bold">3.5</span>
                                            </div>
                                        </div>
                                        <p className="text-left">Dhaka * 2000-33-3 </p>
                                        <p className="card-text text-left">With supporting text below as a natural lead-in to additional
                                            content.</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-10">
                                                <h5 className="card-title text-left">Card title </h5>
                                            </div>
                                            <div className="col-md-2">
                                                <span className="text-danger font-weight-bold">&#42;</span> <span
                                                className="font-weight-bold">4</span>
                                            </div>
                                        </div>
                                        <p className="text-left">Dhaka * 2000-33-3 </p>
                                        <p className="card-text text-left">With supporting text below as a natural lead-in to additional
                                            content.</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-10">
                                                <h5 className="card-title text-left">Card title </h5>
                                            </div>
                                            <div className="col-md-2">
                                                <span className="text-danger font-weight-bold">&#42;</span> <span
                                                className="font-weight-bold">3</span>
                                            </div>
                                        </div>
                                        <p className="text-left">Dhaka * 2000-33-3 </p>
                                        <p className="card-text text-left">With supporting text below as a natural lead-in to additional
                                            content.</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-10">
                                                <h5 className="card-title text-left">Card title </h5>
                                            </div>
                                            <div className="col-md-2">
                                                <span className="text-danger font-weight-bold">&#42;</span> <span
                                                className="font-weight-bold">5</span>
                                            </div>
                                        </div>
                                        <p className="text-left">Dhaka * 2000-33-3 </p>
                                        <p className="card-text text-left">With supporting text below as a natural lead-in to additional
                                            content.</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
export default ReviewList;