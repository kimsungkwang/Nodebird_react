import { Card, Popover, Button, Avatar } from "antd";
import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { RetweetOutlined, HeartTwoTone, HeartOutlined, MessageOutlined, EllipsisOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

import PostImages from "./PostImages";

// 기획 후 코딩
const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const id = useSelector((state) => state.user.me?.id); // ?. 옵셔널 체이닝 연산자

  // 좋아요 하트 토글
  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);

  // 댓글 토글
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  return (
    <div style={{ marginBottom: 0 }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked ? (
            <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
          ) : (
            <HeartOutlined key="heart" onClick={onToggleLike} />
          ),
          <MessageOutlined key="message" onClick={onToggleComment} />,
          <Popover
            key="more"
            content={
              <Button.Group>
                {id && post.User.id === id ? (
                  <>
                    <Button>수정</Button>
                    <Button type="danger">삭제</Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </Button.Group>
            }>
            <EllipsisOutlined />
          </Popover>,
        ]}>
        <Card.Meta avatar={<Avatar>{post.User.nickname[0]}</Avatar>} title={post.User.nickname} description={post.content} />
      </Card>
      {commentFormOpened && (
        <div>
          댓글 부분 
          {/* <CommentForm post={post} />
          <List
            header={`${post.Comments ? post.Comments.length : 0} 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments || []}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={
                    <Link href={{ pathname: "/user", query: { id: item.User.id } }} as={`/user/${item.User.id}`}>
                      <a>
                        <Avatar>{item.User.nickname[0]}</Avatar>
                      </a>
                    </Link>
                  }
                  content={item.content}
                />
              </li>
            )}
          /> */}
        </div>
      )}
      {/* <CommentForm />
      <Comments /> */}
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.object), // 객체들의 배열
    Images: PropTypes.arrayOf(PropTypes.object), // 객체들의 배열
  }).isRequired,
};

export default PostCard;
