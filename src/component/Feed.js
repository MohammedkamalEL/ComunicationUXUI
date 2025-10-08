import { Box } from "@mui/material";
import Post from "./Post";

import m1 from "../static/img/Simple Professional Name Introduction LinkedIn Profile Picture.png";
import m2 from "../static/img/Neutral Beige Simple Aesthetic Flower Boutique Logo.png";
import m3 from "../static/img/M.png";
import m4 from "../static/img/Free.png";
import m5 from "../static/img/Colorful Illustrative Hummingbird Animal Logo.png";
import m6 from "../static/img/Colorful Brain Digital World Technology Logo.png";
import m7 from "../static/img/Blue Simple Modern Electronic Logo.png";
export default function Feed() {
  return (
    <Box flex={8} p={2}>
      <Post
        name="mohammed Kamal Eldien"
        date="September 14, 2016"
        body="This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like."
        avatarImg={m1}
        postImg={m2}
      />
      <Post
        name="Aisha Kahlid"
        date="September 20, 2020"
        body="This impressive Aisha Khalied"
        avatarImg={m3}
        postImg={m4}
      />
      <Post
        name="Aisha Kahlid"
        date="September 20, 2025"
        body="This impressive Aisha Khalied"
        avatarImg={m5}
        postImg={m6}
      />
      <Post
        name="Azza Ali"
        date="September 20, 2019"
        body="This impressive Aisha Khalied"
        avatarImg={m1}
        postImg={m7}
      />
      <Post
        name="Abo Rashied Mohammd Kamal"
        date="September 14, 2016"
        body="This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like."
        avatarImg={m1}
        postImg={m2}
      />
      <Post
        name="Mona Ahmed"
        date="September 20, 2019"
        body="This impressive Aisha Khalied"
        avatarImg={m3}
        postImg={m4}
      />
      <Post
        name="Mayyan"
        date="September 20, 2019"
        body="This impressive Aisha Khalied"
        avatarImg={m5}
        postImg={m6}
      />
      <Post
        name="Aisha Kahlid"
        date="September 20, 2019"
        body="This impressive Aisha Khalied"
        avatarImg={m1}
        postImg={m7}
      />
    </Box>
  );
}
