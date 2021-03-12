let select_cripto = document.getElementById("Cripto");
function getCripto(){
    return select_cripto.value;
}
let select_money = document.getElementById("Money");
function getMoney(){
    return select_money.value;
}
let count_value = document.getElementById("value");
function getValue(){
    return count_value.value;
}
let count_cripto_value = document.getElementById("cripto_value");
function getCriptoValue(){
    return count_cripto_value.value;
}
function createLink(Money, Cripto){
    let val = NaN
    let cript = NaN

    if(Money === 'Рубли'){
        val = 'RUB'
    } else if (Money === 'Доллары'){
        val = 'USD'
    };

    if(Cripto === 'Биткоин'){
        cript = 'BTC'
    } else if (Cripto === 'Монеро'){
        cript = 'XMR'
    } else if (Cripto === 'Эфириум'){
        cript = 'ETH'
    };

    return link = `https://min-api.cryptocompare.com/data/price?fsym=${cript}&tsyms=${val}`
 
}




// fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=RUB')
//   .then(response => response.json())
//   .then(commits => alert(commits.RUB));


count_value.oninput = function(){

    let Money = getMoney();
    let Cripto = getCripto();
    let Value = getValue();
    let Link = createLink(Money, Cripto);
    // alert(`${Cripto} ${Money} ${Value} ${Link}`)
    // let response = fetch(Link);
    // let jsonData = response.status();
    // console.log(jsonData)
    
    
    if(Money === 'Рубли'){
        fetch(Link)
        .then(response => response.json())
        .then(commits => {
        let itog = commits.RUB
        count_cripto_value.value = Value/itog
    });
    } else if (Money === 'Доллары'){
        fetch(Link)
        .then(response => response.json())
        .then(commits => {
        let itog = commits.USD
        count_cripto_value.value = Value/itog
    })}
    
    
    
    
    
}

count_cripto_value.oninput = function(){
    let Money = getMoney();
    let Cripto = getCripto();
    let Value = getCriptoValue();
    let Link = createLink(Money, Cripto);
    // alert(`${Cripto} ${Money} ${Value} ${Link}`)
    // let response = fetch(Link);
    // let jsonData = response.status();
    // console.log(jsonData)
    
    
    if(Money === 'Рубли'){
        fetch(Link)
        .then(response => response.json())
        .then(commits => {
        let itog = commits.RUB
        count_value.value = Value*itog
    });
    } else if (Money === 'Доллары'){
        fetch(Link)
        .then(response => response.json())
        .then(commits => {
        let itog = commits.USD
        count_value.value = Value*itog
    })}
    
    
    
    
    
}

link_btc = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=RUB'
link_eth = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=RUB'
link_xmr = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=RUB'
fetch(link_btc)
        .then(response => response.json())
        .then(commits => {
        let itog = commits.RUB + '<br>Рублей'
        BTC.innerHTML = itog})
fetch(link_eth)
        .then(response => response.json())
        .then(commits => {
        let itog = commits.RUB +'<br>Рублей'
        ETH.innerHTML = itog})
fetch(link_xmr)
        .then(response => response.json())
        .then(commits => {
        let itog = commits.RUB +'<br>Рублей'
        XMR.innerHTML = itog})