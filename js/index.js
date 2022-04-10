//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', generate)

function generate(){

  async function getAdjective(){
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
          wordReturn = data
        })
        .catch(err => {
            console.log(`error ${err}`)
        });

    if(wordReturn == undefined){
      getAdjective()
    }else{
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
        getAdjective()
      }
    }
    }

   getAdjective()

  // async function getNoun(){
  //   let word

  //   await fetch('https://random-word-api.herokuapp.com/word?number=1')
  //       .then(res => res.json()) // parse response as JSON
  //       .then(data => {
  //         console.log(data)
  //         word = data[0]
  //       })
  //       .catch(err => {
  //           console.log(`error ${err}`)
  //       });
  //   let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'+ word
  //   let wordReturn

  //       await fetch(url)
  //       .then(res => res.json()) // parse response as JSON
  //       .then(data => {
  //         console.log(data)
  //         wordReturn = data

  //       })
  //       .catch(err => {
  //           console.log(`error ${err}`)
  //       });

  //   if(wordReturn == undefined){
  //     getNoun()
  //   }
  //   console.log(wordReturn)
  //   console.log(word)
  //   console.log(url)
  //   console.log(wordReturn[0].meanings.length)

  // let hasNoun = false

  //   for(let i = 0; i<wordReturn[0].meanings.length; i++){
  //     if(wordReturn[0].meanings[i].partOfSpeech == 'noun'){
  //       document.querySelector('.noun').innerText = wordReturn[0].word
  //       hasNoun = true
  //     }
  //   }
  //   if(hasNoun == false){
  //     getNoun()
  //   }
  // }
  // await getNoun()
}



// }
