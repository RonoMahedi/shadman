import React from "react";

const RecentRides =()=>{
    return(
        <>
            <section className="pt-15 pb-50">
                <div className="container">
                    <h3>Recent Booking</h3>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <td>ID</td>
                            <th>Property Name</th>
                            <th>Host ID</th>
                            <th>Booking Period</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Rono</td>
                            <td>in join</td>
                            <td>2021-1-5 to 2021-2-8</td>
                            <td>pending</td>
                            <td>
                                <button type="button" className="btn btn-primary booking_primary">
                                    approved
                                </button>
                                <button type="button" className="btn btn-danger booking_danger">delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Rono</td>
                            <td></td>
                            <td>2021-1-5 to 2021-2-8</td>
                            <td>Completed</td>
                            <td>
                                <button type="button" className="btn btn-primary booking_primary">
                                    approved
                                </button>
                                <button type="button" className="btn btn-danger booking_danger">delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Rono</td>
                            <td></td>
                            <td>2021-1-5 to 2021-2-8</td>
                            <td>Completed</td>
                            <td>
                                <button type="button" className="btn btn-primary booking_primary">
                                    approved
                                </button>
                                <button type="button" className="btn btn-danger booking_danger">delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Rono</td>
                            <td></td>
                            <td>2021-1-5 to 2021-2-8</td>
                            <td>Pending</td>
                            <td>
                                <button type="button" className="btn btn-primary booking_primary">
                                    approved
                                </button>
                                <button type="button" className="btn btn-danger booking_danger">delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Rono</td>
                            <td></td>
                            <td>2021-1-5 to 2021-2-8</td>
                            <td>Completed</td>
                            <td>
                                <button type="button" className="btn btn-primary booking_primary">
                                    approved
                                </button>
                                <button type="button" className="btn btn-danger booking_danger">delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Rono</td>
                            <td></td>
                            <td>2021-1-5 to 2021-2-8</td>
                            <td>Completed</td>
                            <td>
                                <button type="button" className="btn btn-primary booking_primary">
                                    approved
                                </button>
                                <button type="button" className="btn btn-danger booking_danger">delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Rono</td>
                            <td></td>
                            <td>2021-1-5 to 2021-2-8</td>
                            <td>Completed</td>
                            <td>
                                <button type="button" className="btn btn-primary booking_primary">
                                    approved
                                </button>
                                <button type="button" className="btn btn-danger booking_danger">delete</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default RecentRides;