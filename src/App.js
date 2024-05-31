import "./App.css";
import { Box } from "@mui/material";
import Post from "./components/Post";

const posts = [
  {
    avatarUrl: "",
    username: "test",
    id: "test",
    content: "Hello World!",
  },
  {
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg",
    username: "Elon Musk",
    id: "elonmusk",
    content:
      "<strong>SpaceX</strong> will be landing Starship on Mars well before 2030. The really hard threshold is making Mars Base Alpha self-sustaining.",
  },
  {
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1661201415899951105/azNjKOSH_400x400.jpg",
    username: "jack",
    id: "jack",
    content: "just setting up my twttr",
  },
];

function App() {
  return (
    <div className="App">
      <Box className="flex">
        <Post
          id={posts[0].id}
          avatarUrl={posts[0].avatarUrl}
          username={posts[0].username}
          content={posts[0].content}
        />
        <Post {...posts[1]} />
        <Post {...posts[2]} />
      </Box>
    </div>
  );
}

export default App;
