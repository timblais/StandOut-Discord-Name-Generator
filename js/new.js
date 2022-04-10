document.querySelector('.gen').addEventListener('click', generate)
document.querySelector('.lockAdj').addEventListener('click', lockAdjective)
document.querySelector('.lockNoun').addEventListener('click', lockNoun)


function generate(){
    
  

    if(document.querySelector('.lockAdj').innerText == "Lock Adjective"){
      fetch('https://random-word-form.herokuapp.com/random/adjective')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        word = data[0]
        document.querySelector('.adjective').innerText = data[0]
        document.querySelector('.adjective').setAttribute('href', `https://www.merriam-webster.com/dictionary/${data[0]}`)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });   
    }  

    if(document.querySelector('.lockNoun').innerText == "Lock Noun")
      fetch('https://random-word-form.herokuapp.com/random/noun')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        word = data[0]
        document.querySelector('.noun').innerText = data[0]
        document.querySelector('.noun').setAttribute('href', `https://www.merriam-webster.com/dictionary/${data[0]}`)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

    }

function lockAdjective(){
  if(document.querySelector('.lockAdj').innerText == "Lock Adjective"){
    document.querySelector('.lockAdj').innerText = "Unlock Adjective"
  }else if(document.querySelector('.lockAdj').innerText == "Unlock Adjective"){
    document.querySelector('.lockAdj').innerText = "Lock Adjective"
  }
}

function lockNoun(){
  if(document.querySelector('.lockNoun').innerText == "Lock Noun"){
    document.querySelector('.lockNoun').innerText = "Unlock Noun"
  }else if(document.querySelector('.lockNoun').innerText == "Unlock Noun"){
    document.querySelector('.lockNoun').innerText = "Lock Noun"
  }
}
