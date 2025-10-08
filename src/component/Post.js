import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
// icone
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

// imgs

export default function Post({name,date,body,avatarImg,postImg}) {
  return (
    <Card sx={{marginTop:{xs:1, sm:5}}}>
      <CardHeader
        avatar={
          <Avatar
            alt="Mohammed Kamal"
            src={avatarImg}
            sx={{ width: 45, height: 45 }}
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={date}
      />
      <CardMedia
        component="img"
        height={window.innerHeight > 500 ? "20%" : "400px"}
        sx={{ maxHeight: 500 }}
        image={postImg}
        alt="Paella dish"
      />

      {/* Content  */}
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {body}
        </Typography>
      </CardContent>
      {/* =====Content======  */}

      {/* Action  */}

      <CardActions disableSpacing>
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite sx={{ color: "red" }} />}
        />
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="Comments">
          <ChatBubbleOutlineIcon />
        </IconButton>

        <Link color="inherit" href="#">
          5Comments
        </Link>
      </CardActions>
      {/* ======Action=====  */}
    </Card>
  );
}
