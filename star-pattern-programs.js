function starSquare(symbol, count) {
    if (arguments.length !== 2 || typeof (symbol) !== "string" || typeof (count) !== "number" || !isFinite(count) || isNaN(count)) return 'Invalid'
    let ans = ''
    for (row = 0; row < count; row++) {
        for (column = 0; column < count; column++) {
            ans += symbol
        }
        ans += '\n'
    }
    return ans
}
console.log(starSquare('*', 4))



function starRightAngleTriangle(symbol, count) {
    if (arguments.length !== 2 || typeof (symbol) !== "string" || typeof (count) !== "number" || !isFinite(count) || isNaN(count)) return 'Invalid'
    let ans = ''
    for (let row = 0; row < count; row++) {
        for (let column = 0; column <= row; column++) {
            ans += symbol
        }
        ans += '\n'
    }
    return ans
}

console.log(starRightAngleTriangle('*', 4))

function starRightAngleNumberTriangle(symbol, count) {
    if (arguments.length !== 2 || typeof (symbol) !== "string" || typeof (count) !== "number" || !isFinite(count) || isNaN(count)) return 'Invalid'
    let ans = ''
    for (let row = 0; row < count; row++) {
        for (let column = 0; column <= row; column++) {
            ans += column + 1
        }
        ans += '\n'
    }
    return ans
}

console.log(starRightAngleNumberTriangle('1', 4))

function starRightAngleNumberRepeatTriangle(symbol, count) {
    if (arguments.length !== 2 || typeof (symbol) !== "string" || typeof (count) !== "number" || !isFinite(count) || isNaN(count)) return 'Invalid'
    let ans = ''
    for (let row = 0; row < count; row++) {
        for (let column = 0; column <= row; column++) {
            ans += row + 1
        }
        ans += '\n'
    }
    return ans
}

console.log(starRightAngleNumberRepeatTriangle('1', 4))


function reverseRightAngleNumberTriangle(symbol, count) {
    if (arguments.length !== 2 || typeof (symbol) !== "string" || typeof (count) !== "number" || !isFinite(count) || isNaN(count)) return 'Invalid'
    let ans = ''
    for (row = 0; row < count; row++) {
        for (column = 0; column < count-row; column++) {
            ans += column+1
        }
        ans += '\n'
    }
    return ans
}

console.log(reverseRightAngleNumberTriangle('1', 4))


function starRightAngleLeftAlignTriangle(symbol,count){
    if(arguments.length!==2|| typeof(symbol)!=='string'||typeof(count)!=='number' ||!isFinite(count) || isNaN(count)) return 'Invalid'
    ans=''
    for(let i=0;i<count;i++){
        for(let j=0;j<count;j++){
            if(j>=count-i-1){
                ans+=symbol
            }else{
                ans+=' '
            }
        }
        ans+='\n'
    }
    return ans
}

console.log(starRightAngleLeftAlignTriangle('*',4))


function starRightAngleAlternateTriangle(symbol,count){
    if(arguments.length!==2|| typeof(symbol)!=='string'||typeof(count)!=='number' ||!isFinite(count) || isNaN(count)) return 'Invalid'
    ans=''
    for (row = 0; row <count; row++) {
        for (column = 0; column <= row; column++) {
            if(column%2==0){
                ans += "1"
            }else{
                ans+='0'
            }
        }
        ans += '\n'
    }
    return ans
}
console.log(starRightAngleAlternateTriangle('1',4))


function starRightAngleAlternateGlobalTriangle(symbol,count){
    if(arguments.length!==2|| typeof(symbol)!=='string'||typeof(count)!=='number' ||!isFinite(count) || isNaN(count)) return 'Invalid'
    ans=''
    sym=symbol
    for (row = 0; row <count; row++) {
        for (column = 0; column <= row; column++) {
            ans += sym
            sym==="1"?sym="0":sym="1"
        }
        ans += '\n'
    }
    return ans
}
console.log(starRightAngleAlternateGlobalTriangle('1',4))