import Post from '../components/Post'
import { Link, useNavigate } from 'react-router-dom'


import '../css/feed.css'

function Feed() {

    const navigate = useNavigate();

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

    function generateNotification(key){
        return {
            profpic: '/img/avatar1.jpeg',
            name: 'Tyler James ThisIsBigName',            
            datetime: '2:13pm 02/24/2023',
            text: ' saved your ',
            link: {
                text: 'recipe!',
                addr: '/recipe/view'
            },
            key: key
        };
    }


    const feedPostData = [];

    for(let i=0; i<10; i++){
        feedPostData.push(generatePost(i));
    }

    const feedPosts = feedPostData.map(somePost => {
        return <Post data={somePost} />;
    })

    const notifData = [];

    for(let i=0; i<4; i++){
        notifData.push(generateNotification(i));
    }

    const feedNotifications = notifData.map(somePost => {
        return (<div className='feed-notif'>
            <img onClick={()=>navigate('/profile/view/'+somePost.key)} className='prof-pic' src={somePost.profpic} alt={'Picture of '+somePost.name} />
            <h5>
                {somePost.name} 
                {somePost.text} 
                <Link className='link-name' to={somePost.link.addr}> {somePost.link.text} </Link> 
            </h5>
            <p>{somePost.datetime}</p>
        </div>);
    })

    return(<div id="feed-page">
        <div id="main-feed">
            <h1>Your Feed</h1>
            { feedPosts }
        </div>
        <div id="feed-notifications">
            <h1>Notifications</h1>
            <div id='feed-notif-box'>
            { feedNotifications }
            <button className='view-notifs' onClick={() => navigate('/notifications')}>View All</button>
            </div>
        </div>
    </div>);
}


export default Feed