import { Link } from 'react-router-dom'
import RecipeLink from "../components/RecipeLink";
import '../css/profile.css'


function ProfileUserView (){

    function generatePost(key){
        return {
            sharedBy: 'Lorem Ipsum',
            profpic: '/img/avatar1.jpeg',
            name: 'Tyler James ThisIsBigName',
            body: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis rhoncus urna neque viverra. Massa eget egestas purus viverra accumsan in nisl. Fermentum posuere urna nec tincidunt. Arcu felis bibendum ut tristique. Non sodales neque sodales ut etiam. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Amet est placerat in egestas erat imperdiet. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Sodales ut etiam sit amet nisl purus in. Amet volutpat consequat mauris nunc congue. Fermentum odio eu feugiat pretium nibh. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Nibh praesent tristique magna sit amet purus gravida quis', 
                   'Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Egestas dui id ornare arcu odio ut sem nulla pharetra. Consequat semper viverra nam libero justo laoreet sit. Ut lectus arcu bibendum at. Egestas diam in arcu cursus euismod quis viverra nibh cras. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Integer malesuada nunc vel risus commodo viverra maecenas accumsan.'],
            datetime: '2:13pm 02/24/2023',
            recipe: {
                title: 'Homeade Pot Pie',
                img: '/img/flour.jpeg',
                alt: 'logo',
                saves: 100,
                discussed: 200,
                shared: 300,
                key: 1
            },
            key: key
        }
    }

    function generateRecipe(key, someUser){
        return {
            profpic: someUser.profpic,
            name: someUser.name,
            recipe: {
                title: 'Homeade Pot Pie',
                img: '/img/flour.jpeg',
                alt: 'logo',
                key: 1
            },
            key: key
        }
    }

    function generateUser(){
        let user = {
            name: "Tyler James Waite",
            city: "San Diego, CA",
            profpic: "/img/avatar1.jpeg",
            description: "Risus nullam eget felis eget nunc lobortis mattis. Condimentum vitae sapien pellentesque habitant morbi tristique. Condimentum mattis pellentesque id nibh tortor id. Mattis pellentesque id nibh tortor id aliquet lectus proin. Orci dapibus ultrices in iaculis nunc sed augue. Facilisis sed odio morbi quis commodo. Vestibulum rhoncus est pellentesque elit.",
            recipes: [],
            posts: []
        };

        for(let i=0; i<10; i++){
            user.recipes.push(generateRecipe(i, user));
        }

        for(let i=0; i<10; i++){
            user.posts.push(generatePost(i));
        }
        return user;
    }

    let userData = generateUser();

    
    const recipes = userData.recipes.map(somePost => {
        return (<div className="recipe-item">
            <img className="prof-pic" src={somePost.profpic} alt={"Photo of"+somePost.profpic} onClick={()=> navigate('/profile/view/'+somePost.key)} />
            <h3>{somePost.name}</h3>
            <RecipeLink recipe={somePost.recipe} />
        </div>);
    })


    return (<div id="user-profile">
        <div className="profile-top">
            <h1>Your Profile</h1>
            <Link to='/profile/edit'>edit</Link>
        </div>

        <div className='user-info'>
            <img src={userData.profpic} alt={'Photo of'+userData.name} />
            <h3>{userData.name}</h3>
            <h4>{userData.city}</h4>
            <p> {userData.description}</p>
        </div>

        <h2>{userData.name}'s <u>Recipes
            <svg id="icon_double_caret" data-name="icon/double caret" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
            <rect id="base" width="15" height="15" fill="none"/>
            <path id="select" d="M3886.877,524.493l4.389,4.371,4.223-4.371" transform="translate(-3883.877 -519.493)" fill="none" stroke="#100b09" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
            </svg>
        </u></h2>

        <div className='recipes'>
            {recipes}
        </div>


    </div>)
}

export default ProfileUserView