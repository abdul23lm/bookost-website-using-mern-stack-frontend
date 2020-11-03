import React from "react";
import ReactHtmlParser from "react-html-parser";
// import FeaturedImage from "./FeaturedImage";

export default function PageDetailDescription({ data }) {
    return (
        <main>
            <h4>Tentang Kostan</h4>
            {ReactHtmlParser(data.description)}
            <div className="row" style={{ marginTop: 30 }}>
                {data.featureId.length === 0 ? "Tidak ada Feature" : 
                data.featureId.map((feature, index) => {
                    return (
                        <div
                            key={`feature-${index}`}
                            className="col-3"
                            style={{ marginBottom: 30 }}
                        >
                            <img
                                width="38"
                                src={`${process.env.REACT_APP_HOST}/${feature.imageUrl}`}
                                alt={feature.name}
                                className="d-block mb-2"
                            />{" "}
                            <span>{feature.name}</span>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}
