//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', generate)

async function generate(){
//   const choice = document.querySelector('input').value
//   const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

// function getAdjective(){
  let word


  await fetch('https://random-word-api.herokuapp.com/word?number=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        word = data[0]
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
  let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'+ word
  let wordReturn

      await fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('.noun').innerText = data[0].word
        wordReturn = data

      })
      .catch(err => {
          console.log(`error ${err}`)
      });

  // if(word != wordReturn){
  //   console.log("success")
  // }
  if(wordReturn == undefined){
    generate()
  }
  console.log(wordReturn)
  console.log(word)
  console.log(url)
  console.log(wordReturn[0].meanings.length)

let hasAdj = false

  for(let i = 0; i<wordReturn[0].meanings.length; i++){
    if(wordReturn[0].meanings[i].partOfSpeech == 'adjective'){
      document.querySelector('.adjective').innerText = wordReturn[0].word
      hasAdj = true
    }
  }
  if(hasAdj == false){
    generate()
  }
}

// getAdjective()

// }
