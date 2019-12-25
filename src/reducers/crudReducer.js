import {
  ADD_POST,
  DEL_POST,
  UPDATEPOST,
  LIKE_CHANGE,
  DISLIKE_CHANGE
} from "../actions/actions";

const initialState = {
  posts: [
    {
      id: 1,
      name: "Santhosh",
      postedTime: "",
      updatedTime: "",
      post: "",
      postHeader: "",
      likes: 0,
      dislikes: 0
    },
    {
      id: 2,
      name: "Santhosh",
      postedTime: "",
      updatedTime: "",
      post: "",
      postHeader: "",
      likes: 0,
      dislikes: 0
    },
    {
      id: 3,
      name: "Santhosh",
      postedTime: "",
      updatedTime: "",
      post: "",
      postHeader: "",
      likes: 0,
      dislikes: 0
    },
    {
      id: 4,
      name: "Santhosh",
      postedTime: "",
      updatedTime: "",
      post: "",
      postHeader: "",
      likes: 0,
      dislikes: 0
    }
  ]
};

export default function crudReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return state;
    case DEL_POST:
      var posts = state.posts.filter(p => p.id !== action.payload.postId);
      return {
        ...state,
        posts
      };
    case UPDATEPOST:
      return state;
    case LIKE_CHANGE:
      var posts = [...state.posts];
      var index = action.payload.postId - 1;
      posts[index]["likes"] = posts[index]["likes"] + action.payload.value;
      return {
        ...state,
        posts
      };
    case DISLIKE_CHANGE:
      var posts = [...state.posts];
      var index = action.payload.postId - 1;
      posts[index]["dislikes"] =
        posts[index]["dislikes"] + action.payload.value;
      return {
        ...state,
        posts
      };
    default:
      return state;
  }
}
