import {
  Box,
  List,
  ListItem,
  Switch,
  Typography,
} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";

// icone
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Brightness4 } from "@mui/icons-material";

export default function RightSide({setMode, mode}) {
  
  
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position='fixed'>
        <List>
          <ListItemButton component="a" href="#">
            <ListItem sx={{ display: "flex", gap: "20px" }} disablePadding>
              <HomeIcon color="action" sx={{ fontSize: 30 }} />
              <Typography fontWeight={500} fontSize={25}>
                Homepages
              </Typography>
            </ListItem>
          </ListItemButton>

          <ListItemButton component="a" href="#">
            <ListItem sx={{ display: "flex", gap: "20px" }} disablePadding>
              <ArticleIcon color="action" sx={{ fontSize: 30 }} />
              <Typography fontWeight={500} fontSize={25}>
                Pages
              </Typography>
            </ListItem>
          </ListItemButton>

          <ListItemButton component="a" href="#">
            <ListItem sx={{ display: "flex", gap: "20px" }} disablePadding>
              <GroupIcon color="action" sx={{ fontSize: 30 }} />
              <Typography fontWeight={500} fontSize={25}>
                Groups
              </Typography>
              {/* <ListItemText primary='Groupe'/> */}
            </ListItem>
          </ListItemButton>

          <ListItemButton component="a" href="#">
            <ListItem sx={{ display: "flex", gap: "20px" }} disablePadding>
              <StorefrontIcon color="action" sx={{ fontSize: 30 }} />
              <Typography fontWeight={500} fontSize={25}>
                Marktplace
              </Typography>
            </ListItem>
          </ListItemButton>

          <ListItemButton component="a" href="#">
            <ListItem sx={{ display: "flex", gap: "20px" }} disablePadding>
              <PersonAddIcon color="action" sx={{ fontSize: 30 }} />
              <Typography fontWeight={500} fontSize={25}>
                friends
              </Typography>
            </ListItem>
          </ListItemButton>

          <ListItemButton component="a" href="#">
            <ListItem sx={{ display: "flex", gap: "20px" }} disablePadding>
              <SettingsIcon color="action" sx={{ fontSize: 30 }} />
              <Typography fontWeight={500} fontSize={25}>
                Settings
              </Typography>
            </ListItem>
          </ListItemButton>

          <ListItemButton component="a" href="#">
            <ListItem sx={{ display: "flex", gap: "20px" }} disablePadding>
              <AccountBoxIcon color="action" sx={{ fontSize: 30 }} />
              <Typography fontWeight={500} fontSize={25}>
                Profile
              </Typography>
            </ListItem>
          </ListItemButton>

          <ListItemButton>
            <ListItem sx={{ display: "flex", gap: "20px" }} disablePadding>
                <Brightness4 color="action" sx={{ fontSize: 30 }}   onChange={e=> mode ==='light'? setMode('dark'):setMode('light')}/>
              <Switch onChange={e=> mode ==='light'? setMode('dark'):setMode('light')} />
            </ListItem>
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
}
