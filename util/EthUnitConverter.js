const unitsPerEther = {
    ether: 1,
    finney: 10000,
    wei: 1000000000000000000,
    //todo finish this
}

const unitsPerDollar = {
    dollar: 1,
    cent: 100
}

export default (value, from, to) => {
    if (value && unitsPerEther[from] && unitsPerEther[to]){
        return value / (unitsPerEther[from] / unitsPerEther[to]);
    }else if (value && unitsPerDollar[from] && unitsPerDollar[to]){
        return value / (unitsPerDollar[from] / unitsPerDollar[to]);
    }else{
        throw Exception('could not convert ' + value + ' from ' + from + ' to ' + to);//todo:string template this
    }
}
