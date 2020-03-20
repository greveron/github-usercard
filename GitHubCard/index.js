/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/



//function use Card creatator crea muchas card
//
const cardCreator = (obj) =>{
const card = document.createElement("div")
const img = document.createElement("img")
const infoDiv = document.createElement("div")
const name = document.createElement("h3")
const username = document.createElement("p")
const location = document.createElement("p")
const profile = document.createElement("p")
const profileAnchor = document.createElement("a")
const followers = document.createElement("p")
const following = document.createElement("p")
const bio = document.createElement("p")

// create structure

card.appendChild(img)
card.appendChild(infoDiv)
infoDiv.appendChild(name)
infoDiv.appendChild(username)
infoDiv.appendChild(location)
infoDiv.appendChild(profile)
infoDiv.appendChild(followers)
infoDiv.appendChild(following)
infoDiv.appendChild(bio)
profile.appendChild(profileAnchor)


//call css
card.classList.add("card")
infoDiv.classList.add("card-info")
name.classList.add("name")
username.classList.add("username")


//add context
img.src = obj.data.avatar_url
name.innerHTML = `name: ${obj.data.name}`
username.innerHTML =  obj.data.login
location.innerHTML = `Location: ${obj.data.location}`
profileAnchor.innerHTML = `Profile: ${obj.data.html_url}`
followers.innerHTML =`followers: ${obj.data.followers}`
following.innerHTML = `following: ${obj.data.following}`
bio.innerHTML = `Bio: ${obj.data.bio}`




//retun card
  return card
}



//add DOM TO HTML
const puntoDeEntrada = document.querySelector('.cards')


//AXIOS
axios.get("https://api.github.com/users/greveron")
.then((obj)=>{
puntoDeEntrada.appendChild(cardCreator(obj))
})

.catch((err)=>{
console.log(err)
})

const followersArray = ["tetondan",
"dustinmyers",
"justsml",
"luishrd",
"bigknell",
"palancall"]

followersArray.forEach((seguidor)=>{
axios.get(`https://api.github.com/users/${seguidor}`)

.then((obj)=>{
puntoDeEntrada.appendChild(cardCreator(obj))
})
 .catch((err)=>{
   console.log(err)
 })
})