//When we get into ES6 modules, which are not supported in the browser yet, we'll have to use sth like Webpack, along with Babble to transpile our code, to be able to have modular js so we'll be able to include one js file into another. For now, we'll just have multiple script tags.


/*External libraries used:

    - https://bootswatch.com/ - gives different variations of bootstrap template - for css design
    - https://getbootstrap.com/docs/4.3/getting-started/introduction/

*/

//Initialize github class
const github = new GitHub;
//Initialize UI class
const ui = new UI;


//Search input
const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup', (e) => {
  //Get input text - whatever is typed in the search field
  const userText = e.target.value;

  if(userText !== ''){
    //make an HTTP call to GitHub, through github.js
    //console.log(userText);
    github.getUser(userText) //this returns a promise:
      .then(data => { //this gets users from github.com
        //console.log(data);
        if(data.profile.message === 'Not Found') {
          //Show alert - this is gonna happen through ui.js library
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          //Show profile - also through ui.js
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  }else{
    //Clear the profile - through ui.js
    ui.clearProfile();
  }
});