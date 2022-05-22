import { Home, ListAlt } from "@mui/icons-material";
import { Button, Container, Divider, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import SiteAppbar from "./components/appbar";
import { login, logout } from "./store/userSlice";



function App() {

  const dispatch = useDispatch()

  const onlineUsers = useSelector((state) => state.user.onlineUsers)

  return (
    <Container maxWidth="xl" sx={{ p: 1, backgroundColor: 'grey' }}>

      <SiteAppbar />

    </Container>
  );
}

export default App;
