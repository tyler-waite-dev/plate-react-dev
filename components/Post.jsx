import RecipeLink from "../components/RecipeLink";

function Post (props){

    function getBodyText(body){

        let count = 0;

        let bodyTags = body.map(textVal => {
            count++;
            return (<p key={count}>{textVal}</p>);
        
        });

        return (<div className='bodytext'>{bodyTags}</div>);
    }

    function getOtherTags(thePost){
        if(thePost.recipe != undefined){
            return (<div className="other-post-info">
                {<RecipeLink recipe={thePost.recipe} />}
            </div>);
        } else if(thePost.img != undefined){
            return (<div className="other-post-info">
                <img src={thePost.img.src} alt={thePost.img.alt} />
            </div>);
        }

    }

    function getShared(thePost){
        if(thePost.sharedBy != undefined){
            return <h2 className='shared-by'>Shared By <a onClick={()=> viewUser(thePost.sharedBy) }>{thePost.sharedBy}</a></h2>
        }
    }

    function viewUser(user){
        alert(user);
    }


    return (<div className='post'>
        {getShared(props.data)}
        <div className='post-data' key={props.data.key}>
            <img className="prof-pic" src={props.data.profpic} alt={'picture of'+props.data.name}/>
            <h3>{props.data.name}</h3>
            <p className='datetime'>{props.data.datetime}</p>
            {getBodyText(props.data.body)}
            {getOtherTags(props.data)}
        </div>
    </div>);
}

export default Post