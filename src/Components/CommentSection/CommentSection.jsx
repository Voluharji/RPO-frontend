import './CommentSection.css'
import {useState} from "react";


function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return undefined;
}

function CommentSection() {
    //Tu se pride ena fetch metoda ki bo dobila komentarje od izdelka ko vstavimo v tabelo se komentarje

    const [newComment, setNewComment] = useState("");
    const [comments, setComments] = useState([]);

    const username = getCookie("Username");
    const handleAddComment = () => {
        if (newComment.trim() === "") {
            alert("Comment cannot be empty!");
            return;
        }

        if (!username) {
            alert("You must be logged in to write a comment.");
            return;
        }

        const newCommentObject = {
            username: username,
            text: newComment,
            date: new Date().toLocaleString()
        };

        setComments((prevComments) => [...prevComments, newCommentObject]);

        setNewComment("");
    };



    return(
        <div className="comments-section">
            <div className="new-comment">
                <textarea
                    className="new-comment-input"
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button className="new-comment-btn" onClick={handleAddComment}>
                    Submit
                </button>
            </div>

            <div className="existing-comments">
                {comments.map((comment, index) => (
                    <div key={index} className="comment">
                        <div className="comment-header">
                            <img
                                src={comment.profilePicture || "/default-profile.jpg"}
                                alt={`${comment.username}'s profile`}
                                className="comment-profile-picture"
                            />
                            <span className="comment-username">{comment.username}</span>
                        </div>
                        <p className="comment-text">{comment.text}</p>
                        <span className="comment-date">{comment.date}</span>
                    </div>
                ))}
            </div>


        </div>

    );
}

export default CommentSection;