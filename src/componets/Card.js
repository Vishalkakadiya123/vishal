import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



const Card = (props) => {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6 main_card p-0">
                        <div className="card_1 d-flex">
                            <div className="image_1">
                                <img src={props.imagesrc} />
                            </div>
                            <div className="info_card">
                                <div className="first">
                                    <a href=""><h2>{props.heading}</h2></a>
                                    <p>{props.heading_tag}</p>
                                </div>
                                <div className="second">
                                    <a href="">{props.location}</a>
                                    <p>{props.location_1}</p>
                                </div>
                                <div className="third">
                                    <a href="">{props.seen}</a>
                                    <p>{props.seen_1}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Card