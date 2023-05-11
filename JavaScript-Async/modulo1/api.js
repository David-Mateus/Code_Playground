// fetch('https://api.github.com/users/David-Mateus')
// .then((response)=>{
//     response.json()
//     .then(data =>{
//         console.log(data)
//     })
// } )
// let UrL =

async function startGitHub() {
  try {
    const promisseApi = await fetch(
      "https://api.github.com/users/David-Mateus"
    );
    const dataApi = await promisseApi.json();
    console.log(dataApi.bio);
  } catch (error) {
    console.log(error)

  }finally{
    console.log('trinta pra um')
  }
}
startGitHub();
