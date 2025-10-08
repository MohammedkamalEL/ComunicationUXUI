import * as React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

// imgs
import m1 from "../static/img/Blue Simple Modern Electronic Logo.png";
import m2 from "../static/img/Colorful Brain Digital World Technology Logo.png";
import m3 from "../static/img/Colorful Illustrative Hummingbird Animal Logo.png";
import m4 from "../static/img/Free.png";
import m5 from "../static/img/M.png";
import m6 from "../static/img/Neutral Beige Simple Aesthetic Flower Boutique Logo.png";
import m7 from "../static/img/Simple Professional Name Introduction LinkedIn Profile Picture.png";

export default function LeftSide() {
  return (
    <Box
      flex={4}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed" width="fit-content">
        <Stack>
          <Box>
            <Typography
              fontWeight={100}
              variant="overline"
              sx={{ m: 0, fontSize: 25 }}
            >
              Online Frinds
            </Typography>

            <AvatarGroup
              total={10}
              sx={{ justifyContent: "center", ml: 3 }}
              spacing="mediam"
              max={8}
            >
              <Avatar alt="Remy Sharp" src={m1} />
              <Avatar alt="Travis Howard" src={m2} />
              <Avatar alt="Agnes Walker" src={m3} />
              <Avatar alt="Remy Sharp" src={m4} />
              <Avatar alt="Remy Sharp" src={m5} />
              <Avatar alt="Travis Howard" src={m6} />
            </AvatarGroup>
          </Box>
          <Typography
            component="h1"
            variant="overline"
            sx={{ m: 0, fontSize: 25 }}
          >
            Latest Photo
          </Typography>
          <Stack direction="row" spacing={1}>
            <CardMedia
              sx={{ height: 130, width: 120 }}
              image={m7}
              title="green iguana"
            />
            <CardMedia
              sx={{ height: 130, width: 120 }}
              image={m1}
              title="green iguana"
            />
            <CardMedia
              sx={{ height: 130, width: 120 }}
              image={m5}
              title="green iguana"
            />
          </Stack>

          <Typography
            component="h1"
            variant="overline"
            sx={{ m: 0, fontSize: 25 }}
          >
            Last Conversation
          </Typography>

          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={m3} />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: "text.primary", display: "inline" }}
                    >
                      Abo Rashied
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src={m2} />
              </ListItemAvatar>
              <ListItemText
                primary="Aisha Khaild"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: "text.primary", display: "inline" }}
                    >
                      Aisha Khaild Ibrahem
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src={m7} />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: "text.primary", display: "inline" }}
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Stack>
      </Box>
    </Box>
  );
}
