import React from "react";

const Footer = ()=>{
    return(
        <div>
            <footer className="pt-50 pb-50 bg-dark text-center footer_1">
                <div className="container px-xl-0">
                    <div className="row justify-content-between align-items-center lh-40 links">
                        <div className="col-lg-4 col-sm-6 text-sm-right text-lg-left order-1 order-lg-0">
                            <h3 className="text-white"> Ambulance Finder</h3>
                            <p className="text-white">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            </p>
                        </div>
                        <div className="mb-10 mb-lg-0 col-lg-auto order-0 text-white">
                            <h4>Navigations</h4>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div>
                                        <a href="#">Bookings</a>
                                    </div>
                                    <div>
                                        <a href="#">Messing</a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div>
                                        <a href="#">Account</a>
                                    </div>
                                    <div>
                                        <a href="#">Logout</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-sm-left text-lg-right order-2 order-lg-0">
                            <form className="text-white">
                                <label htmlFor="email">Subscrbe Newsletter</label>
                                <input type="email" name="email" className="form-control" placeholder="Enter email"/>
                            </form>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="mt-10 col-xl-4 col-lg-5 col-md-6 col-sm-8">
                            <div className="color-heading text-adaptive text-white">
                                &copy; 2021 All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;