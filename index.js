/**
 * Rearranges hexadecimal string based on value of endianness
 * @param {string} hexString - hexadecimal string
 * @param {string} endianness - order of hexadecimal bytes needed in output
 * @returns {string} hexadecimal string rearranged based on endianness and data type
 */
const formatEndianess = (hexString, endianness) => {
    let mapper;
    let hexArray = hexString.match(/.{1,2}/g)

    //apply switch case based on value of endianness to get rearranged hexadecimal string
    if (hexArray.length === 4) {
        switch (endianness) {
            case "Mid-Little Endian":
                mapper = [2, 3, 0, 1];
                return mapper.map((i) => hexArray[i]).join("");
            case "Little Endian":
                mapper = [3, 2, 1, 0];
                return mapper.map((i) => hexArray[i]).join("");
            case "Mid-Big Endian":
                mapper = [1, 0, 3, 2];
                return mapper.map((i) => hexArray[i]).join("");
            case "Big Endian":
                return hexArray.join("");
            default:
                return hexArray.join("");
        }
    }
    else if (hexArray.length === 8) {
        switch (endianness) {
            case "Mid-Little Endian":
                mapper = [6, 7, 4, 5, 2, 3, 0, 1];
                return mapper.map((i) => hexArray[i]).join("");
            case "Little Endian":
                mapper = [7, 6, 5, 4, 3, 2, 1, 0];
                return mapper.map((i) => hexArray[i]).join("");
            case "Mid-Big Endian":
                mapper = [5, 4, 7, 6, 1, 0, 3, 2];
                return mapper.map((i) => hexArray[i]).join("");
            case "Big Endian":
                return hexArray.join("");
            default:
                return hexArray.join("");
        }
    } else {
        return hexArray.join("")
    }
};

/**
 * @module endianness_formatting
 */
module.exports = { formatEndianess };