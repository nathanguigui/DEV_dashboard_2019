import React, {CSSProperties} from "react";
import "../../Styles/loading.css"


const LoadingFc = () => {
    return (
        <div style={LoadingStyle}>
            <progress className="matter-progress-circular"/>
        </div>
    )
};

const LoadingStyle: CSSProperties = {
    display: "flex",
    position: "relative",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
};

export default LoadingFc;
