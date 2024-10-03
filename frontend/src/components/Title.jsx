import PropTypes from "prop-types";


const Title = ({text1, text2}) => {
    return (
        <div className=" inline-flex items-center gap-2 mb-3">
            <p className="text-gray-500">{text1} <span className="text-gray-700 font-medium">{text2}</span></p>
            <p className="w-8 sm:w-11 bg-[#414141] h-[2px]"></p>
        </div>
    );
};

Title.propTypes = {
    text1:PropTypes.string.isRequired,
    text2:PropTypes.string.isRequired
}

export default Title;