const GITHUB_API = 'https://randomuser.me/api/?inc=name&noinfo'

const user = fetch(GITHUB_API)

console.log(user);

user.then(function (data) {
    console.log(data);
    
});
