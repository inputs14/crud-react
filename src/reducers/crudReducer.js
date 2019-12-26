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
      postedTime: "12/27/2019, 4:10:39 AM",
      updatedTime: "",
      post: "Hi This is my first post",
      postHeader: "Introduction post",
      likes: 0,
      dislikes: 0
    },
    {
      id: 2,
      name: "Santhosh",
      postedTime: "12/27/2019, 4:10:39 AM",
      updatedTime: "",
      post: "Hola Amigos, This is my second post",
      postHeader: "Second post",
      likes: 0,
      dislikes: 0
    },
    {
      id: 3,
      name: "Santhosh",
      postedTime: "12/27/2019, 4:10:39 AM",
      updatedTime: "",
      post:
        "Standing still is the fastest way of moving backwards, in a rapidly changing world",
      postHeader: "Cool post",
      likes: 0,
      dislikes: 0
    },
    {
      id: 4,
      name: "Santhosh",
      postedTime: "12/27/2019, 4:10:39 AM",
      updatedTime: "",
      post: "Vanity cards are always interest one But this is not it.",
      postHeader: "Vanity cards?",
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
      var index = posts.indexOf(action.payload.post);
      posts[index]["likes"] = posts[index]["likes"] + action.payload.value;
      return {
        ...state,
        posts
      };
    case DISLIKE_CHANGE:
      var posts = [...state.posts];
      var index = posts.indexOf(action.payload.post);
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
