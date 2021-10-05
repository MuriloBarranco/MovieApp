import AsyncStorage from "@react-native-async-storage/async-storage";

// Buscar os filmes salvos
export async function getMoviesSave(key) {
  const myMovies = await AsyncStorage.getItem(key);

  let moviesSave = JSON.parse(myMovies) || [];

  return moviesSave;
}

// Salvar um novo filme
export async function saveMovie(key, newMovie) {
  let moviesStored = await getMoviesSave(key);

  //Se tiver algum filme salvo com esse mesmo ID / ou duplicado precisamos ignorar
  const hasMovie = moviesStored.some( item => item.id === newMovie.id);

  if (hasMovie) {
    console.log("ESSE FILME JA EXISTE NA SUA LISTA");
    return;
  }

  moviesStored.push(newMovie);

  await AsyncStorage.setItem(key, JSON.stringify(moviesStored));
  console.log("FILME SALVO COM SUCESSO");
}

// Deletar algum filme especifico
export async function deleteMovie(id){
  // ESTOU BUSCANDO TODOS OS FILMES
    let moviesStored = await getMoviesSave('@primereact');

    // Retorna todos os filmes menos aquele que voce quer deletar
    let myMovies = moviesStored.filter( item => {
      return (item.id !== id)
    })
    
    // Agora é so salvar no AsyncStorage
    await AsyncStorage.setItem('@primereact',JSON.stringify(myMovies));
    console.log("FILME DELETADO COM SUCESSO");
    
    return myMovies;

}

// Filtrar algum filme se ja esta salvo.
export async function hasMovie(movie){
      let moviesStored = await getMoviesSave('@primereact');
      
      // Find ( funcao para passar em todos os items, verificando se o item é igual ao item q esta recebendo)
      const hasMovie = moviesStored.find( item => item.id === movie.id);

      if(hasMovie){
        return true;
      }
      return false;
}