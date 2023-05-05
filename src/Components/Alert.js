import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height: "40px"}}>
            {props.alert &&
                <div className="container">
                    <div className="row justify-content-center">
                        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} style={{ width: '600px', height: "45px", padding: "10px" }} role="alert">
                            <strong>{capitalize(props.alert.type)}!</strong> {props.alert.msg}
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default Alert