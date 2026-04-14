let user = document.getElementById('userId')

async function fetchUser(username) {
    let response = await fetch( `https://api.github.com/users/${username}`) ;
    let result = await response.json();
    displayUser(result);
    
           

}

document.getElementById('button').addEventListener('click' , () => {
  document.getElementById("userprofile").innerHTML = `<span class="loader"></span>`
  let userId = user.value;

  fetchUser(userId);

})

function displayUser({
        avatar_url , 
        name ,
        bio ,
        followers ,
        following ,
        public_repos ,
        html_url ,
}) { 
    // const{
    //     avatar_url , 
    //     name ,
    //     bio ,
    //     followers ,
    //     following ,
    //     public_repos ,
    //     } =result;
     

    if(!avatar_url) {
        document.getElementById("userprofile").innerHTML = `<h1> user not found</h1>`
        return
    }

    if(!bio){
        bio = ''
    }


    document.getElementById('userprofile').innerHTML =     
    
    `<div class="Userinfo">
            <img src= ${avatar_url} class="userimg" alt="">
        
          <div class="userdetail">
            <p class="username">${name}</p>
            <p class="Userbio">${bio}</p>
          </div>

          </div>

          <div class="Userfollow">
            <div class="Follower">
                <div class="repo">
                    <p>Follower</p>
                    <p>${followers}</p>
                </div>
                <div class="repo">
                    <p>Following</p>
                    <p>${following}</p>
                </div>
                <div class="repo">
                    <p>Repo</p>
                    <p>${public_repos}</p>
                </div>
            </div>

            <a href = ${html_url} target= '_blank' class="visitprofile">

            <div class="visitprofile">
                 Visit Profile
            </div>
            </a>
          </div>` ;
           

}