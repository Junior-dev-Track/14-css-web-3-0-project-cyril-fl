function ratioCalculator(value, refValue,) {
    return ((value / refValue) * 100).toFixed(2);
}
function calcFont(value, refValue) {
    return value/refValue
}

console.log('')
let fontSize = 18;
let line= 24;

    let font = calcFont(fontSize, 16)
    let lineHeight = calcFont(line, fontSize)

console.log(`font-size: ${font}rem;\n`+
    `line-height: ${lineHeight.toFixed(3,)}em;`)
console.log('__________________________')


console.log('')
let heightValue = 48

let widthValue = 129
    let refWidth = 375
    let refHeight = 812



    let width = ratioCalculator(widthValue, refWidth)
        let height = heightValue*(refWidth/refHeight)
        let heightTiers = heightValue/3
        let widthTiers = widthValue/3









console.log(`min-height: ${heightTiers.toFixed(2)}px;\n`+
    `height: ${height}%;\n`+
    `max-height: ${heightValue}px;`)

console.log('');

console.log(`min-width: ${widthTiers.toFixed(2)}px;\n`+
            `width: ${width}%;\n`+
            `max-width: ${widthValue}px;`)

console.log('');

console.log(`aspect-ratio: ${widthValue}/${heightValue}`)

