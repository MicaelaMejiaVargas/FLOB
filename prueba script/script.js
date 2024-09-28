async function conseguirDolarInfo(tipo,moneda,nombre){
    await fetch(`https://dolarapi.com/v1/${tipo}/${moneda}`)
    .then(response => response.json())
    .then(data => console.log(`${nombre}:${data.compra}`));
}
document.querySelector("#formulario").addEventListener("submit",(e)=>{
    e.preventDefault();
    const currency=document.querySelector("#currency").value;
    let moneda=currency;
    if(currency==="clp"){
        moneda="chile"
    }
    if(currency==="brl"){
        moneda="brazil"
    }
    if(currency==="eur"){
        moneda="euro"
    }
    if(currency==="uyu"){
        moneda="uruguay"
    }
    let tipo="";
    if(currency==="oficial" || currency==="blue"){
        tipo="dolares";
    }else{
        tipo="cotizaciones";
    }
    conseguirDolarInfo(tipo,currency,moneda);
})