import PropTypes from "prop-types";

<<<<<<< HEAD
import { useState } from "react";


export const App = ({ value }) => {

    //? Hooks
    const [count, setCount ] = useState(value);

    //? Handlers
    const change_sum_value = () => setCount(count +1);
    const change_res_value = () => setCount(count -1);
    const change_reset_value = () => setCount(value);

    return (
    <>
        <h1>Counter APP</h1>
        <h3>{ count }</h3>
        <button onClick={ change_sum_value } >+1</button>
        <button onClick={ change_res_value } >-1</button>
        <button onClick={ change_reset_value } > reset </button>
=======

const new_message = 'Juan';



export const App = ({ title }) => {

    console.log(title);

    return (<>
        <h1>{ title }</h1>
        <h1>{ cout }</h1>
>>>>>>> aee391d (feat: :construction: TEsting react)
    </>);
};


<<<<<<< HEAD
// App.propTypes = {
//     title: PropTypes.string.isRequired
// }
=======
App.propTypes = {
    title: PropTypes.string.isRequired
}
>>>>>>> aee391d (feat: :construction: TEsting react)
