export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "김성광",
      },
      content: "첫 번째 게시글 #해시태그 #익스프레스",
      Images: [{}],
      Comment: [
        {
          User: {
            nickname: "zero",
          },
          content: "안녕하세요 ",
        },
        {
          User: {
            nickname: "one",
          },
          content: "ㅋㅋㅋ",
        },
      ],
    },
  ],
  imagePaths: [],

  addPostLoding: false,
  addPostDone: false,
  addPostError: null,

  addCommentLoding: false,
  addCommentDone: false,
  addCommetError: null,
};

// export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
// export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
// export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

// export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
// export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
// export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

const dummyPost = {
  id: 2,
  content: "더미데이터",
  User: {
    id: 1,
    nickname: "김성광",
  },
  Images: [],
  Comment: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoding: true,
        addPostDone: false,
        addPostError: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        addPostLoding: false,
        addPostDone: true,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoding: false,
        addPostError: action.error,
      };

    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoding: true,
        addCommentDone: false,
        addCommetError: null,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addCommentLoding: false,
        addCommentDone: true,
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoding: false,
        addCommentError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
