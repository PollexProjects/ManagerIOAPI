// I copied this even though it's very simple. I'll give the guy his credits :)
// https://stackoverflow.com/questions/23013573/swap-key-with-value-json
export default function SwapKV(obj){
    var ret = {};
    for(var key in obj){
        ret[obj[key]] = key;
    }
    return ret;
}
