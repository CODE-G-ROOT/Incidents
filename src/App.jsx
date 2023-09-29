import PropTypes from "prop-types";

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
    </>);
};


// App.propTypes = {
//     title: PropTypes.string.isRequired
// }