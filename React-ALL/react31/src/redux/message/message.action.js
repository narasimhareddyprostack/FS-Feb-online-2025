//how to differenciate action types?
let GM='GM'
let GN='GN'

let gmAction = ()=>{
    return {type:GM};
}
let gnAction = ()=>{
    return {type:GN};
}

export {gmAction,gnAction,GM,GN}