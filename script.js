//Adicionar
function adicionar() {
  var filmeNome = document.getElementById("nome").value;
  var filmeImg = document.getElementById("filme").value;
  var filmeLink = document.getElementById("link").value;
  if (filmeNome.length == 0 || filmeImg.length == 0 || filmeLink.length == 0) {
    alert("Dados incompletos");
  } else if (filmeImg.endsWith(".jpg") || filmeImg.endsWith(".png")) {
    listaNome.push(filmeNome);
    listaImg.push(filmeImg);
    listaLink.push(filmeLink);
    imprimeLista();
  } else {
    console.log("Endereço inválido");
    alert("Insira um link válido com imagem");
  }
  document.getElementById("nome").value = "";
  document.getElementById("filme").value = "";
  document.getElementById("link").value = "";
}

//input imprimir
function imprimeLista() {
  var boxFilme = document.getElementById("box");
  boxFilme.innerHTML = "";
  for (i = 0; i < listaImg.length; i++) {
    boxFilme.innerHTML =
      boxFilme.innerHTML +
      '<div class="box"><a href="' +
      listaLink[i] +
      '"target="_blank"><figure><img src="' +
      listaImg[i] +
      '" alt="' +
      listaNome[i] +
      '"><figcaption>"' +
      listaNome[i] +
      '"</figcaption></figure></a><button onClick=removerFilme(' +
      i +
      ")>Excluir</button></div>";
  }
}
//conteudo ja adicionado
var listaNome = [
  "Spider-men: No Way Home",
  "Bortuto: Naruto Next Generations",
  "Rons Gone Wrong",
  "Kamp Koral: SpongeBob's Under Years"
];
var listaImg = [
  "https://upload.wikimedia.org/wikipedia/pt/thumb/0/00/Spider-Man_No_Way_Home_poster.jpg/250px-Spider-Man_No_Way_Home_poster.jpg",
  "https://jovemnerd.com.br/wp-content/uploads/2017/01/boruto-kv.jpg",
  "https://media.fstatic.com/bmFzSABi5rpJ3wellHc_nzfuarU=/290x478/smart/media/movies/covers/2021/06/rnsgnwrng_postervgq.jpg",
  "https://image.tmdb.org/t/p/w500/peZYB3aFOBoZbpFhOZogrTHVlqX.jpg"
];
var listaLink = [
  "https://www.adorocinema.com/filmes/filme-256880/",
  "https://beta.crunchyroll.com/pt-br/series/GR75Q020Y/boruto-naruto-next-generations",
  "https://disney.com.br/filmes/ron-bugado",
  "https://www.nowonline.com.br/series-programa-de-tv/kamp-coral-bob-esponja-primeiros-anos/1006646470"
];
//imprimir
var boxFilme = document.getElementById("box");
boxFilme.innerHTML = "";
for (i = 0; i < listaImg.length; i++) {
  boxFilme.innerHTML =
    boxFilme.innerHTML +
    '<div class="box"><a href="' +
    listaLink[i] +
    '"target="_blank"><figure><img src="' +
    listaImg[i] +
    '" alt="' +
    listaNome[i] +
    '"><figcaption>"' +
    listaNome[i] +
    '"</figcaption></figure></a><button onClick=removerFilme(' +
    i +
    ")>Excluir</button></div>";
}
var lista = listaNome + listaImg + listaLink;

//Remover
function removerFilme(x) {
  //Função que remove determinado filme ao clicar no botão Excluir
  var retorno = confirm("Deseja mesmo excluir o Filme " + listaNome[x] + "?");

  if (retorno == true) {
    //Exclui o filme e o poster de seus arrays
    listaNome.splice(x, 1);
    listaImg.splice(x, 1);

    //Lista Filmes após apagar um filme
    imprimeLista();
  }
}