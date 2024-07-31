import React, { useState } from 'react';
import avatarPlaceholder from '../../../image/PlayHolder.png';
import './Comment.css';
import { FaThumbsUp } from 'react-icons/fa'; // Import biểu tượng thumb up

function Comments() {
    // State để lưu trữ danh sách các bình luận
    const [comments, setComments] = useState([]);
    // State để lưu trữ nội dung của bình luận mới
    const [newComment, setNewComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim() !== '') {
            // Tạo đối tượng bình luận mới
            const newCommentObj = {
                id: Date.now(), // Sử dụng timestamp làm id
                text: newComment,
                author: 'Lê Thành Chung',
                avatar: avatarPlaceholder,
                date: new Date().toLocaleString(),
                replies: [], // Mảng replies rỗng ban đầu
                likes: 0 // Số lượt thích ban đầu là 0
            };
            // Thêm bình luận mới vào danh sách bình luận
            setComments([...comments, newCommentObj]);
            setNewComment(''); // Reset form bình luận
        }
    };

    const handleReply = (commentId, replyText) => {
        // Cập nhật danh sách bình luận khi có reply mới
        setComments(comments.map(comment => {
            if (comment.id === commentId) {
                return {
                    ...comment,
                    replies: [...comment.replies, {
                        id: Date.now(),
                        text: replyText,
                        author: 'Người dùng',
                        avatar: avatarPlaceholder,
                        date: new Date().toLocaleString(),
                        likes: 0
                    }]
                };
            }
            return comment;
        }));
    };

    const handleLike = (commentId) => {
        // Tăng số lượt thích của bình luận
        setComments(comments.map(comment => {
            if (comment.id === commentId) {
                return { ...comment, likes: comment.likes + 1 };
            }
            return comment;
        }));
    };

    return (
        <div className="comments-section">
            <h3>Bình luận</h3>
            {/* Form để gửi bình luận mới */}
            <form onSubmit={handleSubmit}>
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Viết bình luận của bạn..."
                    className='Comment-area'
                />
                <button type="submit">Gửi</button>
            </form>
            {/* Danh sách các bình luận */}
            <div className="comments-list">
                {comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} onReply={handleReply} onLike={handleLike} />
                ))}
            </div>
        </div>
    );
}

function Comment({ comment, onReply, onLike }) {
    // State để lưu trữ nội dung reply
    const [replyText, setReplyText] = useState('');
    // State để kiểm soát việc hiển thị form reply
    const [showReplyForm, setShowReplyForm] = useState(false);
    // State để kiểm soát việc hiển thị các replies
    const [showReplies, setShowReplies] = useState(false);

    const handleReplySubmit = (e) => {
        e.preventDefault();
        if (replyText.trim() !== '') {
            onReply(comment.id, replyText);
            setReplyText(''); // Reset form reply
            setShowReplyForm(false); // Ẩn form reply sau khi gửi
        }
    };

    return (
        <div className="comment">
            <div className='Card-comment'>
                <div className="comment-header">
                    <div>
                        <img src={comment.avatar} alt={comment.author} className="avatar" />
                        <span className="author">{comment.author}</span>
                    </div>
                    <span className="date">{comment.date}</span>
                </div>
                <p>{comment.text}</p>
                <div className="comment-actions">
                    {/* Nút thích bình luận */}
                    <span onClick={() => onLike(comment.id)} className="like-action">
                        <FaThumbsUp /> {comment.likes}
                    </span>
                    {/* Text để mở form reply */}
                    <span onClick={() => setShowReplyForm(!showReplyForm)} className="reply-action">
                        Trả lời
                    </span>
                    {/* Hiển thị tùy chọn "Hiện trả lời" nếu có replies */}
                    {comment.replies && comment.replies.length > 0 && (
                        <span onClick={() => setShowReplies(!showReplies)} className="show-replies-action">
                            {showReplies ? 'Ẩn trả lời' : 'Hiện trả lời'}
                        </span>
                    )}
                </div>
            </div>
            {/* Form để gửi reply */}
            {showReplyForm && (
                <form onSubmit={handleReplySubmit}>
                    <textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Viết trả lời của bạn..."
                        className='Comment-area'
                    />
                    <button type="submit">Gửi trả lời</button>
                </form>
            )}
            {/* Hiển thị danh sách replies nếu showReplies là true */}
            {showReplies && (
                <div className="replies">
                    {comment.replies && comment.replies.map((reply) => (
                        <Comment key={reply.id} comment={reply} onReply={() => {}} onLike={onLike} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Comments;