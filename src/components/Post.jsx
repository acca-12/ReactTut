import { Box, Avatar, Paper, IconButton, Tooltip } from "@mui/material";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BarChartIcon from "@mui/icons-material/BarChart";

const PostAction = ({ Icon, count, tooltip, color }) => {
  return (
    <Box className="action">
      <Tooltip title={tooltip}>
        <IconButton size="small" color={color} aria-label={tooltip}>
          <Icon fontSize="small" />
        </IconButton>
      </Tooltip>
      <span>
        {count && count > 1000 ? `${Math.floor(count / 1000)}k` : count}
      </span>
    </Box>
  );
};

const ActionBar = (data) => {
  return (
    <Box className="ActionBar">
      {/* TODO: Convert it to map format */}
      {/* Hint: use Object.keys(data).map */}
      <PostAction
        Icon={ModeCommentOutlinedIcon}
        count={data.reply}
        tooltip={"Reply"}
        color={"primary"}
      />
      <PostAction
        Icon={RepeatIcon}
        count={data.repost}
        tooltip={"Repost"}
        color={"success"}
      />
      <PostAction
        Icon={FavoriteBorderIcon}
        count={data.like}
        tooltip={"Like"}
        color={"error"}
      />
      <PostAction
        Icon={BarChartIcon}
        count={data.view}
        tooltip={"View"}
        color={"info"}
      />
    </Box>
  );
};

function Post({ avatarUrl, id, username, content, imageUrl, data }) {
  return (
    <Box className="Box PostBox">
      <Box display={"flex"}>
        <Box className="avatarBox">
          <Avatar src={avatarUrl} alt={username} />
        </Box>
        <Box className="flex" flexGrow={1} flexBasis={0}>
          <a href={`/${id}`} className="postHeader">
            <div className="username">{username}</div>
            <div className="id">@{id}</div>
          </a>
          <Box className="postContent">
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </Box>
          {imageUrl && (
            <Box className="postImage">
              <img src={imageUrl} />
            </Box>
          )}
          {data && <ActionBar {...data} />}
        </Box>
      </Box>
    </Box>
  );
}

export default Post;
