import React from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (SimpleComponent) => (name) => {
    const isAuth = localStorage.getItem("auth");
    const onLogin = () => {
        localStorage.push("auth");
    };
    const onLogOut = () => {
        localStorage.removeItem("auth");
    };
    return (
        <CardWrapper>
            {isAuth ? (
                <SimpleComponent {...onLogOut} />
            ) : (
                <SimpleComponent {...onLogin} />
            )}
        </CardWrapper>
    );
};
export default withFunctions;
