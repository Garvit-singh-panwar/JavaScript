const cssTheme = document.querySelector(`[theme-css]`);

const themeName = document.querySelector(`[data-theme-name]`);
const themeIcon = document.querySelector(`[icon-theme]`);

const searchForm = document.querySelector(`[user-search_form]`);
const searchInput = document.querySelector(`[data-user_input]`);
const crossIcon = document.querySelector(`[crossIcon]`);

const userDetail = document.querySelector(`.user-detail`);
const userImage = document.querySelector(`[data-user_img]`);
const userName = document.querySelector(`[data-user_name]`);
const userGithub = document.querySelector(`[data-user_github]`);
const joinDate = document.querySelector(`[data-join_date]`);
const userBio = document.querySelector(`[data-user_bio]`);

const repos = document.querySelector(`[data-repos]`);
const followers = document.querySelector(`[data-followers]`);
const following = document.querySelector(`[data-following]`);

const userLocation = document.querySelector(`[data-user-location]`);
const twitter = document.querySelector(`[data-twitter-link]`);
const websiteLink = document.querySelector(`[data-website-link]`);
const workAt = document.querySelector(`[data-company]`);




// clear input logic

crossIcon.addEventListener('click', () => {
    searchInput.value = "";
});


// change theme function
function changeTheme(){
    const currentTheme = themeName.innerText.trim().toLowerCase();
    if(currentTheme === "dark"){
        themeName.innerText = "Light";
        themeIcon.setAttribute("src" , "./assets/light_mode.png");
        cssTheme.setAttribute("href" , "./dark.css");
    }
    else{
        themeName.innerText = "Dark";
        themeIcon.setAttribute("src" , "./assets/dark_mode.png");
        cssTheme.setAttribute("href" , "./light.css");
    }
}

// change theme event listner
themeIcon.addEventListener('click' , ()=>{
    changeTheme();
})


// function fatches the user data
async function fetchuserInfo(){
    try{
        const user = searchInput.value;
        const response = await fetch(`https://api.github.com/users/${user}`);
        const userData = await response.json();
        return  userData;

    }catch(error){
        console.log(error);
    }
    

}


//  function updates all user infomation 
function updateInfo(userData){

    if(userData?.message === "Not Found"){
        return;
    }

    const formattedDate = new Date(userData?.created_at).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
            });

        userName.innerText = userData?.name;
        userImage.setAttribute("src" , `${userData?.avatar_url}`);
        joinDate.innerText = `joined at ${formattedDate } `;
        userGithub.setAttribute("href" , `${userData?.html_url}`);
        userGithub.innerText = `@${userData?.login}`;
        userBio.innerText = userData?.bio;
        repos.innerText = userData?.public_repos;
        followers.innerText = userData?.followers;
        following.innerText = userData?.following;
        
        
        if(userData?.twitter_username == null || userData?.twitter_username === "" ){
            twitter.innerText = "not Available";
        }else{
            twitter.innerText = userData?.twitter_username;
        }

        if( userData?.location == null || userData?.location === "" ){
            userLocation.innerText = "not Available"
        }else{
            userLocation.innerText = userData?.location;
        }

        if(userData?.blog == null || userData?.blog === ""){
            websiteLink.innerText = "not Available"
        }else{
            websiteLink.innerText = "click here ";
            websiteLink.setAttribute("src" , `${userData?.blog}`);
        }

        if(userData?.company == null || userData?.company === ""){
            workAt.innerText = "not Available";
        }else{
            workAt.innerText = userData?.company;
        }

        userDetail.classList.add("active");

}


// function takes user data and give to update info function 
async function updateUserInfo(){

    try{
        let userData = await fetchuserInfo();
        updateInfo(userData);
    }
    catch(error){
        console.log(error);
    }
    

}


// search event listner
searchForm.addEventListener('submit' , (event)=>{

    event.preventDefault();
    userDetail.classList.remove("active");
    updateUserInfo();


})