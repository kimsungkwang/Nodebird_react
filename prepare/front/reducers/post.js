export const initialState = {
  mainPosts: [
    {
      id: 1,
      Usdr: {
        id: 1,
        nickname: "홍길동",
      },
      content: "첫 번째 게시글 #해시태그 #익스프레스",
      Image: [{}],
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
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};
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
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
