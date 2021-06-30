import React,{useState}           from 'react'
import {useSelector, useDispatch} from 'react-redux';


function Comment() {

    const [commentText,setComment] = useState('');
    const dispatch = useDispatch();



    const state = useSelector(function(state) {
        return state.comment;
      });
    
    const handleChange = (e) => {
      setComment(e.target.value)
    }


    const clickHandler = () => {
      const comment = {
        id:Math.floor(Math.random() * 10000),
        comment:commentText
      }
  
      dispatch({
        type:"CREATE2",
        payload: comment
      })
      setComment("");
    }

    return (
        <div>
            <input
                type="text"
                value={commentText}
                onChange={handleChange}
                placeholder="Comment"
                style={{padding:'15px',outline: 'none',marginRight:'10px', borderRadius:'10px', border:'1px solid #ddd'}}
            />
            <button onClick={clickHandler}>Add comment</button>
            {
                state.allComments.map(comment=>{
                    return(
                        <div style={{display:"flex",alignItems: "center"}}>
                            <p style={{backgroundColor:'teal', color:'white', padding:'5px',borderRadius:'5px'}}>{comment.id}</p>
                            <h3 style={{marginLeft:"10px"}}>{comment.comment}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Comment;
