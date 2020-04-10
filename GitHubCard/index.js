/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
function getInfo(username){
axios.get(`https://api.github.com/users/${username}`)
  .then(res=>{
    // console.log(res)
    
    return cards.appendChild(cardCreator(res))
    
  })
  .catch()
}

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
let cards = document.querySelector('.cards')

const followersArray = [];

function cardCreator(obj){
  let cardParent = document.createElement('div');
  let cardImg = document.createElement('img');
  let info = document.createElement('div');
  let name = document.createElement('h3');
  let username = document.createElement('p');
  let geo = document.createElement('p');
  let profile = document.createElement('p');
  let followers = document.createElement('p');
  let following = document.createElement('p');
  let bio = document.createElement('p');
  let pageUrl = document.createElement('a');

  // Add structure
  info.appendChild(name)
  info.appendChild(username)
  info.appendChild(geo)
  info.appendChild(profile)
  info.appendChild(followers)
  info.appendChild(following)
  info.appendChild(bio)

  profile.appendChild(pageUrl)

  cardParent.appendChild(cardImg)
  cardParent.appendChild(info)
  
  
  // Add content
  cardImg.src = obj.data['avatar_url']
  cardImg.alt = obj.data['name']
  name.textContent = obj.data['name']
  username.textContent = obj.data.login
  geo.textContent = obj.data.location
  profile.textContent = `Profile: `
  pageUrl.textContent = obj.data['html_url']
  pageUrl.href = obj.data['html_url']
  followers.textContent = `Followers: ${obj.data.followers}`
  following.textContent = `Following: ${obj.data.following}`
  bio.textContent = obj.data.bio

  profile.appendChild(pageUrl)

  cardParent.classList.add('card')
  info.classList.add('card-info')
  name.classList.add('name')
  username.classList.add('username')





  return cardParent

}
let list = ['code-dependent',
            'tetondan',
            'dustinmyers',
            'justsml',
            'luishrd',
            'bigknell']
  list.forEach(username=>getInfo(username))
  // getInfo()
/*
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
