// let addToy = false;
// let h2 = document.createElement('h2');
// let img = document.createElement('img')
// let p = document.createElement('p')
// let button = document.createElement('button');
// save #toy-collection node to append all toy character
//takes in a single toys information and renders a card to a page
//fetch get forEach
//post
//function character.name, character.imaage, character.likes
//make name node, image node, likes node, add like button
// function addCharacter info to dom
// ADD TOY INFO TO THE CARD
//get the div with id toy-colllection
//fetch get all toys from localhost
  //get response data
  //loop through data
    //for each data/character make card dom structure = addCharactertoDOM()
    //note: button tag addevenetlistner click
    //INCREASE TOYS LIKES using button
    //on click make a patch to increment likes by 1 /or just update DOM
    //use response to update the DOM
//ADD A NEW TOY
//get form
//on for submit
  //get data
  //make post request
    //use response to populate DOM = addCharactertoDOm()
    // fetch('http://localhost:3000/toys')
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data)
    //   //toy collection div
    //     let toyCollect = document.getElementById('toy-collection')
    //     let cardDiv = document.createElement('div');
    //     let cardImg = document.createElement('img');
    //     cardImg.classList.add('toy-avatar')
    //     console.log(cardImg)
    //     cardImg.src = data[0].image
    //     console.log(data[0].image)
    //     cardDiv.classList.add('card')
    //     let p = document.createElement('p');
    //     p.innerText = data[0].likes
    //     let button = document.createElement('button')
    //     button.classList.add('like-btn')
    //     let toysName = document.createElement('h2');
    //     let id = data[0].id;
    //     console.log(id)
    //     button.setAttribute('id', `${id}`)
    //     console.log(button)
    //     toyCollect.appendChild(cardDiv)
    //     cardDiv.appendChild(cardImg)
    //     cardDiv.appendChild(p)
    // })
document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  const fetchToys = () => {
  fetch('http://localhost:3000/toys')
  .then(res => res.json())
  .then(toys => {
    console.log(toys)
    let toyCollect = document.getElementById('toy-collection')
    function removeAllChildNodes(parent) {
      while(parent.firstChild){
        parent.removeChild(parent.firstChild);
      }
    }
    removeAllChildNodes(toyCollect)
    //toy collection div
    toys.forEach((toy, index) => {
      let cardDiv = document.createElement('div');
      let cardImg = document.createElement('img');
      cardImg.classList.add('toy-avatar')
      // console.log(cardImg)
      cardImg.src = toy.image
      // console.log(data[i].image)
      cardDiv.classList.add('card')
      let p = document.createElement('p');
      p.innerText = toy.likes + ' likes'
      let button = document.createElement('button')
      button.classList.add('like-btn')
      let toysName = document.createElement('h2');
      let id = toy.id;
      toysName.innerText = toy.name
      // console.log(id)
      button.setAttribute('id', `${id}`)
      // console.log(button)
      toyCollect.appendChild(cardDiv)
      cardDiv.appendChild(toysName)
      cardDiv.appendChild(cardImg)
      cardDiv.appendChild(p)
      cardDiv.appendChild(button)
      // console.log(button)
      button.innerText = 'like <3'
      console.log(index)
  })
  // document.getElementsByClassName('add-toy-form').addEventListener('submit', function(e) {
  //   e.preventDefault();
  // })
  // document.querySelector('.add-toy-form').addEventListener('submit', function(e){
  //   e.preventDefault();
  //   let toysName = document.getElementsByClassName('input-text')[0].value;
  //   let toyImg = document.getElementsByClassName('input-text')[1].value;
  //   fetch('http://localhost:3000/toys', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type':'application/json',
  //       Accept: 'application/json'
  //     },
  //     body: JSON.stringify({
  //       'name': `${toysName}`,
  //       'image': `${toyImg}`,
  //       'likes': 0
  //     })
  //   })
  // })
})
  }
document.querySelector('.add-toy-form').addEventListener('submit', function(e){
  e.preventDefault();
  let toysName = document.getElementsByClassName('input-text')[0].value;
  let toyImg = document.getElementsByClassName('input-text')[1].value;
  fetch('http://localhost:3000/toys', {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      'name': `${toysName}`,
      'image': `${toyImg}`,
      'likes': 0
    })
  }).then((res) => res.json() ).then((data) => {
    console.log('First')
    fetchToys()
  })
})
console.log('Second')
fetchToys()
});


allenmor
  2:07 PM
https://www.youtube.com/watch?v=Kpn2ajSa92c
YouTubeYouTube | Web Dev Simplified
Asynchronous Vs Synchronous Programming 



allenmor
  2:44 PM
let addToy = false;
let h2 = document.createElement('h2');
let img = document.createElement('img')
let p = document.createElement('p')
let button = document.createElement('button');
// save #toy-collection node to append all toy character
//takes in a single toys information and renders a card to a page
//fetch get forEach
//post
//function character.name, character.imaage, character.likes
//make name node, image node, likes node, add like button
// function addCharacter info to dom
// ADD TOY INFO TO THE CARD
//get the div with id toy-colllection
//fetch get all toys from localhost
  //get response data
  //loop through data
    //for each data/character make card dom structure = addCharactertoDOM()
    //note: button tag addevenetlistner click
    //INCREASE TOYS LIKES using button
    //on click make a patch to increment likes by 1 /or just update DOM
    //use response to update the DOM
//ADD A NEW TOY
//get form
//on for submit
  //get data
  //make post request
    //use response to populate DOM = addCharactertoDOm()
    // fetch('http://localhost:3000/toys')
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data)
    //   //toy collection div
    //     let toyCollect = document.getElementById('toy-collection')
    //     let cardDiv = document.createElement('div');
    //     let cardImg = document.createElement('img');
    //     cardImg.classList.add('toy-avatar')
    //     console.log(cardImg)
    //     cardImg.src = data[0].image
    //     console.log(data[0].image)
    //     cardDiv.classList.add('card')
    //     let p = document.createElement('p');
    //     p.innerText = data[0].likes
    //     let button = document.createElement('button')
    //     button.classList.add('like-btn')
    //     let toysName = document.createElement('h2');
    //     let id = data[0].id;
    //     console.log(id)
    //     button.setAttribute('id', `${id}`)
    //     console.log(button)
    //     toyCollect.appendChild(cardDiv)
    //     cardDiv.appendChild(cardImg)
    //     cardDiv.appendChild(p)
    // })
document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  const fetchToys = () => {
  fetch('http://localhost:3000/toys')
  .then(res => res.json())
  .then(toys => {
    console.log(toys)
    let toyCollect = document.getElementById('toy-collection')
    function removeAllChildNodes(parent) {
      while(parent.firstChild){
        parent.removeChild(parent.firstChild);
      }
    }
    removeAllChildNodes(toyCollect)
    //toy collection div
    toys.forEach((toy, index) => {
      let cardDiv = document.createElement('div');
      let cardImg = document.createElement('img');
      cardImg.classList.add('toy-avatar')
      // console.log(cardImg)
      cardImg.src = toy.image
      // console.log(data[i].image)
      cardDiv.classList.add('card')
      let p = document.createElement('p');
      // p.innerText = toy.likes + ' likes'
      let span1 = document.createElement('span')
      span1.innerText = toy.likes;
      let span2 = document.createElement('span');
      span2.innerText = ' likes';
      let button = document.createElement('button')
      p.append(span1, span2);
      button.classList.add('like-btn')
      let toysName = document.createElement('h2');
      let id = toy.id;
      toysName.innerText = toy.name
      // console.log(id)
      button.setAttribute('id', `${id}`)
      button.addEventListener('click', ()=>{
        span1.innerText = +span1.innerText + 1;
        // fetch to
        fetch(`http://localhost:3000/toys/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type':'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      'likes': `${span1.innerText}`
    })
  })
      })
      // console.log(button)
      toyCollect.appendChild(cardDiv)
      cardDiv.appendChild(toysName)
      cardDiv.appendChild(cardImg)
      cardDiv.appendChild(p)
      cardDiv.appendChild(button)
      // console.log(button)
      button.innerText = 'like <3'
      console.log(index)
  })
  // document.getElementsByClassName('add-toy-form').addEventListener('submit', function(e) {
  //   e.preventDefault();
  // })
  // document.querySelector('.add-toy-form').addEventListener('submit', function(e){
  //   e.preventDefault();
  //   let toysName = document.getElementsByClassName('input-text')[0].value;
  //   let toyImg = document.getElementsByClassName('input-text')[1].value;
  //   fetch('http://localhost:3000/toys', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type':'application/json',
  //       Accept: 'application/json'
  //     },
  //     body: JSON.stringify({
  //       'name': `${toysName}`,
  //       'image': `${toyImg}`,
  //       'likes': 0
  //     })
  //   })
  // })
})
  }
document.querySelector('.add-toy-form').addEventListener('submit', function(e){
  e.preventDefault();
  let toysName = document.getElementsByClassName('input-text')[0].value;
  let toyImg = document.getElementsByClassName('input-text')[1].value;
  fetch('http://localhost:3000/toys', {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      'name': `${toysName}`,
      'image': `${toyImg}`,
      'likes': 0
    })
  }).then((res) => res.json() ).then((data) => {
    console.log('First')
    fetchToys()
  })
})
console.log('Second')
fetchToys()
});









