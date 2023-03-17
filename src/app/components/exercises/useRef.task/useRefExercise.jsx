import React, { useRef } from "react";
import CollapseWrapper from "../../common/collapse";

const UseRefExercise = () => {
    const useRefButton = useRef();
    const handleChange = () => {
        useRefButton.current.style.width = "80px";
        useRefButton.current.style.height = "150px";
        useRefButton.current.textContent = "text";
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                ref={useRefButton}
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small ref={useRefButton}>Блок</small>
            </div>
            <button className="btn btn-secondary m-2 " onClick={handleChange}>
                Change Blok
            </button>
        </CollapseWrapper>
    );
};
// с функцией toggleOtherState c переключениem

// const UseRefExercise = () => {
//     const useRefButton = useRef();
//     const oldRefButton = useRef({});
//     const toggleOtherState = () => {
//         if (!oldRefButton.current.textContent) {
//             oldRefButton.current.textContent = useRefButton.current.textContent;
//             oldRefButton.current.cssText = useRefButton.current.style.cssText;
//             useRefButton.current.style.width = "150px";
//             useRefButton.current.style.height = "80px";
//             useRefButton.current.textContent = "text";
//             console.log(useRefButton.current.style);
//         } else {
//             useRefButton.current.textContent = oldRefButton.current.textContent;
//             useRefButton.current.style.cssText = oldRefButton.current.cssText;
//             oldRefButton.current.textContent = undefined;
//         }
//     };

//     return (
//         <CollapseWrapper title="Упражнение">
//             <p className="mt-3">
//                 У вас есть блок, у которого заданы ширина и высота. Добавьте
//                 кнопку, при нажатии которой изменятся следующие свойства:
//             </p>
//             <ul>
//                 <li>Изменится содержимое блока на &quot;text&quot;</li>
//                 <li>высота и ширина станут равны 150 и 80 соответственно</li>
//             </ul>
//             <div
//                 className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
//                 ref={useRefButton}
//                 style={{
//                     height: 40,
//                     width: 60,
//                     color: "white"
//                 }}
//             >
//                 <small>Блок</small>
//             </div>
//             <button
//                 className="btn btn-secondary m-2"
//                 onClick={toggleOtherState}
//             >
//                 <small>Change Blok</small>
//             </button>
//         </CollapseWrapper>
//     );
// };

export default UseRefExercise;
