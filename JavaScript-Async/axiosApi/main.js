const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/PE/distritos";

function getUsers(){
    axios.get(url)
    .then(
        response =>{
            apiResult.textContent = JSON.stringify(response.data)
        }
    )
    .catch(error => console.error(error))
}

getUsers();