import React from 'react';
import { Box, Button, Container, Grid, Link, Typography } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { styled } from '@mui/system';
import Tools from './toolBar';

const StyledTitle = styled(Typography)({
  marginBottom: (theme) => theme.spacing(2),
});

const HomePage = () => {
  return (
    <Box component="body">
      <Box component="div" sx={{ backgroundColor: "black", color: "white", borderBottom: "5px solid white" }}>
      <Tools />
      </Box>
      <Container sx={{ textAlign: 'center', padding: "10px" }}>
        <StyledTitle variant="h2" sx={{ marginTop: "1em" }}>
          Welcome to Shroov!
        </StyledTitle>
        <Typography variant="body1" sx={{ padding: "30px" }}>
          Explore the amazing features of Shroov and start your journey today.
        </Typography>
        <Button variant="contained" color="primary" href="/g" sx={{ padding: "15px" }}>
          Explore Now
        </Button>
      </Container>

      <Grid container spacing={3} sx={{ marginTop: "30px" }}>
        <Grid item xs={12} md={6} sx={{ backgroundColor: "black", borderRadius: "20px" }}>
          <video width="100%" height="100%" autoPlay muted loop style={{ borderRadius: "20px" }}>
            <source src="https://d2csxpduxe849s.cloudfront.net/media/F98A2D25-86AB-40CA-9E7A9C4DE6A2BF09/226C36CA-E928-4A90-B3F9AE943722CA8F/9B14BBFC-1350-4689-89BD10DD50EDBE10.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ padding: "20px" }}>
            <Typography variant="h4">High-end, flexible and secure meeting room technology</Typography>
            <Typography variant="body1">
              Barco’s high-quality conference room solutions will make everyone love meeting again by enabling colleagues and guests to collaborate smoothly and intuitively anywhere in the workplace. Start a video conference call and collaborate in seconds. Access the meeting room display and share your content with a single click. Screen sharing and video conferencing are quick and easy. In the meeting room or huddle room, or even when connecting remotely, your meeting experience becomes just as natural as a face-to-face meeting.
            </Typography>
            <Button style={{ borderRadius: "6px", backgroundColor: "red", color: "white", marginTop: "20px" }}>Get in touch</Button>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ marginTop: "12%" }}>
      <Grid item xs={12} md={6}>
        <Typography variant="h4">Wireless conferencing with ClickShare Conference</Typography>
        <Typography variant="body1">
          Turn your meeting room into a premium, modern conference room with ClickShare´s conferencing solutions. No cables, no hassle. Just flawless, one-click video collaboration.
        </Typography>
        <ul>
          <li>Host a seamless, productive and engaging hybrid meeting with any video conferencing software such as Microsoft Teams or Zoom</li>
          <li>Wirelessly connect to room camera, microphone, soundbar, and speakers.</li>
          <li>Promote inclusive meetings by making everyone seen and heard.</li>
          <li>Make meetings effective and intuitive with smart meeting flows.</li>
          <li>Facilitate remote work and connect with teleworkers in a matter of seconds.</li>
        </ul>
        <Button style={{ borderRadius: "6px", backgroundColor: "black", color: "white" }}>Discover ClickShare Conference</Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box style={{ backgroundColor: "black", borderRadius: "20px" }}>
          <video width="100%" height="100%" autoPlay muted loop style={{ borderRadius: "20px" }}>
            <source src="https://d2csxpduxe849s.cloudfront.net/media/F98A2D25-86AB-40CA-9E7A9C4DE6A2BF09/DF82F930-8AB0-44E8-A0DFFA4ADEDCC0C7/13620C98-7728-4DE6-81B3C03F4A51123C.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Grid>
    </Grid>


    <Grid container spacing={3} style={{ marginTop: "12%" }}>
      <Grid item xs={12} md={6}>
        <Box style={{ backgroundColor: "black", borderRadius: "20px" }}>
          <video width="100%" height="100%" autoPlay muted loop style={{ borderRadius: "20px" }}>
            <source src="https://d2csxpduxe849s.cloudfront.net/media/F98A2D25-86AB-40CA-9E7A9C4DE6A2BF09/5EF62CBC-4B23-4A69-8C5EE528562EA957/617A2863-0906-44A7-8C89263C2287FC06.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h4">When people meet, magic happens. With ClickShare.</Typography>
        <Typography variant="body1">
          Walk into a meeting room with your laptop and the system automatically wakes up. You’re wirelessly connected to the central screen, camera, and speakers. In one click you start your meeting. People joining remotely feel as present as the people on-site. Your hybrid teams are happy and engaged.
        </Typography>
        <br></br>
        <br></br>
        <Button style={{ borderRadius: "6px", backgroundColor: "white", color: "red", border: "2px solid red" }}>Discover ClickShare Conference</Button>
      </Grid>
    </Grid>
      

    <div style={{marginTop:"7%"}}>
      <Typography variant="h2">ClickShare enhances the engagement and productivity of your workforce</Typography>
      <div className="page">
        <Grid container spacing={3} style={{ marginTop: "30px" }}>
          <Grid item xs={12} md={6}>
            <div>
              <img src="https://assets.barco.com/transform/f7c7c6cf-8d39-4a27-a96d-d319c0ca9ffa/Large_Meeting_Room-05?io=transform:fit,width:500" alt="Empowers you" style={{ borderRadius: "10px"}} />
              <Typography variant="h3">Empowers you</Typography>
              <Typography variant="body1">
                When everyone is clearly heard and seen, whether they work from home or in the office, authentic interactions and productive conversations are guaranteed. ClickShare facilitates collaboration instead of complicating it.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <img src="https://assets.barco.com/transform/2fd65139-0379-4e6e-b286-4499b58d8df1/Small_Meeting_Room-08?io=transform:fit,width:500" alt="Has you covered" style={{ borderRadius: "10px" }} />
              <Typography variant="h3">Has you covered</Typography>
              <Typography variant="body1">
                Security, stability, sustainability, and ease of use are built in, so you can enjoy peace of mind in your new hybrid work environment. Regular updates ensure your system is always up to date. How is that for a solid investment?
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
     <br></br>
     <br></br>

    <div className="page">
      <div className="bigdiv1" style={{ marginTop: "30px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <div>
              <img src="https://assets.barco.com/transform/cdec5840-958d-4a33-864a-4760670b1107/Small_Meeting_Room-07?io=transform:fit,width:500" alt="Empowers you" style={{ borderRadius: "10px" }} />
              <Typography variant="h3">Empowers you</Typography>
              <Typography variant="body1">
                When everyone is clearly heard and seen, whether they work from home or in the office, authentic interactions and productive conversations are guaranteed. ClickShare facilitates collaboration instead of complicating it.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <img src="https://assets.barco.com/transform/aefa4181-76be-4f3d-acff-838005084325/Large_Meeting_Room-06?io=transform:fit,width:500" alt="Has you covered" style={{ borderRadius: "10px"}} />
              <Typography variant="h3">Has you covered</Typography>
              <Typography variant="body1">
                Security, stability, sustainability, and ease of use are built in, so you can enjoy peace of mind in your new hybrid work environment. Regular updates ensure your system is always up to date. How is that for a solid investment?
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
   

    <div style={{ border: "3px solid black",marginTop:"10%" }} className='end'>
      <Typography variant="h1" style={{ marginTop: "5%", color: "white" }}>JUST</Typography>
      <Typography variant="h1" style={{color:"red"}}>SHROOV IT</Typography>
    </div>




      <Box component="footer" sx={{ backgroundColor: (theme) => theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[800], p: 6, marginTop: "30px" }}>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We are Shroov company, dedicated to providing the best service to our customers.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                2 hay Street, mantown, Japan
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: shroov@gmail.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Phone: +1 234 567 8901
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Follow Us
              </Typography>
              <Box display="flex" sx={{ marginLeft: "10vw" }}>
                <Link href="https://www.facebook.com/" color="inherit">
                  <Facebook />
                </Link>
                <Link href="https://www.instagram.com/" color="inherit" sx={{ pl: 1, pr: 1 }}>
                  <Instagram />
                </Link>
                <Link href="https://www.twitter.com/" color="inherit">
                  <Twitter />
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography variant="body2" color="text.secondary" align="center">
              {"Copyright © "}
              <Link color="inherit" href="https://your-website.com/">
                Shroov
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
