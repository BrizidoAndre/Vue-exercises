export function debug(proxyObject){
    console.log(JSON.parse(JSON.stringify(proxyObject)))
}