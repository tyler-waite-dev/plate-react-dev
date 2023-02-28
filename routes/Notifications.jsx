import '../css/notif.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Notifications (){

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

    const notifData = [];

    for(let i=0; i<4; i++){
        notifData.push(generateNotification(i));
    }

    const pageNotifications = notifData.map(somePost => {
        return (<div className='page-notif'>
            <img onClick={()=>navigate('/profile/view/'+somePost.key)} className='prof-pic' src={somePost.profpic} alt={'Picture of '+somePost.name} />
            <h5>
                {somePost.name} 
                {somePost.text} 
                <Link className='link-name' to={somePost.link.addr}> {somePost.link.text} </Link> 
            </h5>
            <p>{somePost.datetime}</p>
        </div>);
    })

    return(<div id="notif-page">
            <h1>Notifications</h1>
            <div id='page-notif-box'>
                { pageNotifications }
            </div>
        </div>);
}

export default Notifications