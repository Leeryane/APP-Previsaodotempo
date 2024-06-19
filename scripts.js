

const key = "3ba951e871926a916b906f7b1df95223"

function mostrarDados(dados) {
    
    document.querySelector('.cidade').innerHTML ="Tempo em " +  dados.name
    document.querySelector('.temp').innerHTML = Math.floor (dados.main.temp) +  "°C"
    document.querySelector('.texto-previsao').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector('.img-nuvem').src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".input-cidade").value = ""
   
    console.log(dados)
    

    
}


async function buscarCidade(cidade) {
    
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    mostrarDados(dados)
    
    

}

function cliqueiNoBotao() {
    const cidade = document.querySelector('.input-cidade').value

   buscarCidade(cidade)
          


    
}

document.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        cliqueiNoBotao()
    }
})