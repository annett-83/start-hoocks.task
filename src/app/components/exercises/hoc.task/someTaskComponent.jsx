import React from "react";

import PropTypes from "prop-types";
import Subtitle from "../../common/typografy/subtitle";

const SomeTaskComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <Subtitle>
            {(onLogin, onLogOut, isAuth || "Вам нужно зарегистрироваться ")}
        </Subtitle>
    );
};
SomeTaskComponent.propTypes = {
    onLogin: PropTypes.string,
    onLogOut: PropTypes.string,
    isAuth: PropTypes.string
};
export default SomeTaskComponent;
