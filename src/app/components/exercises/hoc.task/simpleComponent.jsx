import React from "react";

import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <>
            {isAuth === true ? (
                <button className="btn btn-secondary m-2 " onClick={onLogin}>
                    Выйти из системы
                </button>
            ) : (
                <button className="btn btn-primary m-2 " onClick={onLogOut}>
                    Войти
                </button>
            )}
        </>
    );
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.string
};
export default SimpleComponent;
