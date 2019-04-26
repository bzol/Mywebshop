var style = { background: 'red', color: 'blue' }

export const injectObjectIntoStyledComponents = (styles) => {
    var outputString = '';
    console.log(styles);
    if(styles === undefined)
        return null;
    Object.keys(styles).map((key) => {
        outputString += key + ': ';
        outputString += styles[key];
        outputString += ";\n";
    });
    return outputString
}

