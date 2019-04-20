//using ES6 classes


//https://github.com/settings/applications - register a new OAuth application to get Client ID and Client Secret

class GitHub {
  constructor() {
    //client ID and secret from github website:
    this.client_id = 'd060f0937733a18ad997';
    this.client_secret = '97324e42372b981bf9ea6bd73272f1e9109c82ef';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  //Get user method - getting user itself and getting repos of the user
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json(); //this gives us the json data
    const repos = await repoResponse.json(); 

    //return the json data as an object
    //if we use callbacks, we will have to one callback to get the response, and another one for getting the repo; However, promises and async allow us to form async operations really nicely:
    return {
      //profile: profile 
      //in ES6, if we have the same name like above - profile calling profile - we can do just this:
      profile,
      repos
    }
  }
}