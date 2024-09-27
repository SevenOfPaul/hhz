import raw from "./games.json" assert  {type:"json"}
async function postGames(){
  const myHeaders = new Headers();
  myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "*/*");
  myHeaders.append("Host", "api.blik.wang");
  myHeaders.append("Connection", "keep-alive");
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
 };
 
 fetch("https://api.blik.wang/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
export default postGames;