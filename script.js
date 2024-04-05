
function chamarServicoReceitaWs(url) {
    const cnpj_digitado = document.getElementById("cnpj").value;
    if (cnpj_digitado === "") {
        alert("Informe o CNPJ");
        return;
    }
    const urlReceitaWS = "https://cors-anywhere.herokuapp.com/https://receitaws.com.br/v1/cnpj/" + cnpj_digitado;
    alert(urlReceitaWS);
    fetch(urlReceitaWS)
        .then(response => {
            if (response.ok) {
                alert("Resposta OK");
                return response.json();
            } else {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
        })
        .then((data) => {
            console.log(data);
        })
        .catch(error => {
            alert("ALERT: Erro ao requisitar o serviço na nuvem!")
            console.error("Erro ao requisitar o serviço na nuvem")
        })
}
