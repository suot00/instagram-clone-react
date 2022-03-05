import React, { useState, useEffect } from "react";
import "../PostItem/postItem.css";
import Avatar from "@mui/material/Avatar";
import { Icon } from "@iconify/react";
import { db } from "../../firebaseConfig";
import firebase from "firebase/compat/app";
export default function PostItem(props) {
  const { data } = props;
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  useEffect(() => {
    let unSubscribe;
    if (props.postId) {
      unSubscribe = db
        .collection("posts")
        .doc(props.postId)
        .collection("comments")
        .onSnapshot((snapshot) => {
          setComments(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              cmt: doc.data(),
            }))
          );
        });
    }
    return () => {
      unSubscribe();
    };
  }, [props.postId]);
  const submitComment = (e) => {
    e.preventDefault();
    db.collection("posts").doc(props.postId).collection("comments").add({
      comment: comment,
      userName: props.user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };
  return (
    <div className="post_container">
      <div className="post_header">
        <div className="post_header--block-left">
          <div className="post_header--avatar">
            <Avatar src=""></Avatar>
          </div>
        </div>
        <div className="post_header--block-right">
          <div className="post_header--username">
            <a href="#">{data.userName}</a>
          </div>
          <div className="post_header--more-option">
            <span>
              <i className="bx bx-dots-horizontal-rounded"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="post_image">
        <img src={data.imageUrl} alt="p-1" />
      </div>
      <div className="post_group-bottom">
        <div className="post_group-bottom">
          <div className="icons">
            <div className="icons-left">
              <span>
                <Icon className="bx" icon="bx:heart" />
              </span>
              <span>
                <Icon className="bx" icon="ci:message-round" />
              </span>
              <span>
                <Icon className="bx" icon="jam:paper-plane" />
              </span>
            </div>
            <div className="icons-right">
              <span>
                <Icon className="bx" icon="cil:bookmark" />
              </span>
            </div>
          </div>
          <div className="post_interactive-info">
            <a href="#">
              <span>321</span> lượt thích
            </a>
          </div>
        </div>
        <div className="post_caption">
          <div className="post_caption--user">
            <span className="user-name">
              <a href="#">{data.userName}</a>
            </span>
            &nbsp;
            <span
              dangerouslySetInnerHTML={{ __html: data.caption }}
              className="caption"
            ></span>
          </div>
          <p className="post_caption--time">
            <span>1</span> Ngày trước
          </p>
        </div>
        <div className="post_comment--list">
          {comments.map(({ id, cmt }) => (
            <p key={id} className="post_comment--item">
              <b>{cmt.userName}</b> {cmt.comment}
            </p>
          ))}
        </div>
        <div className="post_comment">
          <form>
            <span>
              <Icon className="bx bx-smile" icon="bi:emoji-smile" />
            </span>
            <input
              value={comment}
              type="text"
              placeholder="Thêm bình luận..."
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              type="submit"
              disabled={!comment}
              className="btn btn-post-comment"
              onClick={submitComment}
            >
              Đăng
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
