import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });
    return <button className="btn btn-primary" onClick={onLogOut}>Logout</button>;
};
LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};
const MemoizedLogOutButton = React.memo(LogOutButton);
const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handelLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);
    return (
        <>
            {" "}
            <button
                className="btn btn-primary"
                onClick={() => setState(!state)}
            >
                {" "}
                initiate rerender{" "}
            </button>
            <MemoizedLogOutButton onLogOut={handelLogOut} />
        </>
    );
};

export default MemoWithUseCallbackExample;
