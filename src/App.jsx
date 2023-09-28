import PropTypes from "prop-types";


const new_message = 'Juan';



export const App = ({ title }) => {

    console.log(title);

    return (<>
        <h1>{ title }</h1>
        <h1>{ cout }</h1>
    </>);
};


App.propTypes = {
    title: PropTypes.string.isRequired
}