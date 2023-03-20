import React from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (SimpleComponent) => (props) => {
    const isAuth = !!localStorage.getItem("auth");
    const onLogin = () => {
        localStorage.setItem("auth", "token");
    };
    const onLogOut = () => {
        localStorage.removeItem("auth");
    };
    return (
        <CardWrapper>
                <SimpleComponent onLogOut={onLogOut} isAuth={isAuth} onLogin={onLogin} {...props} />
        </CardWrapper>
    );
};
export default withFunctions;
