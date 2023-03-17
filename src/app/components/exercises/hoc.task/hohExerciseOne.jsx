import React from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import SomeTaskComponent from "./someTaskComponent";
import SimpleComponent from "./simpleComponent";
import withFunctions from "./withFunctions";

const HOCExerciseOne = () => {
    const ComponentWithHoc = withFunctions(SimpleComponent);
    return (
        <>
            <CardWrapper>
                <SmallTitle>1. Обычный компонент</SmallTitle>
                <Divider />
                <SomeTaskComponent />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>2. Функциональный HOC</SmallTitle>
                <Divider />
                <ComponentWithHoc />
            </CardWrapper>
        </>
    );
};

export default HOCExerciseOne;
