import React, { Children } from "react";
import CollapseWrapper from "../../common/collapse";
import PropTypes from "prop-types";

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <Formcomponent>
                <Component />
                <Component />
                <Component />
            </Formcomponent>
        </CollapseWrapper>
    );
};

const Formcomponent = ({ children }) => {
    const arryChildrenResult = Children.toArray(children);
    // console.log(arryChildrenResult);
    return React.Children.map(arryChildrenResult, (child) =>
        React.cloneElement(child, {
            ...child.props,
            num: +child.key.replace(".", "") + 1
        })
    );
};
Formcomponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const Component = ({ num }) => {
    // console.log(num);
    return <div>{num}.Компонент списка</div>;
};
Component.propTypes = {
    num: PropTypes.number
};

export default ChildrenExercise;
