import * as React from 'react';
import {Typography, Card, CardMedia, CardContent, Grid} from '@mui/material/';

const Interests = () => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
              alt="computer typing"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Web Development
              </Typography>
              <Typography variant="body2" color="text.secondary">
                I'm completing courses on learning front-end web development with React.js.
              </Typography>
            </CardContent>
          </Card>
      </Grid>

      <Grid item xs={6}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1380&q=80"
            alt="person canoeing"
          /> 
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Travel
            </Typography>
            <Typography variant="body2" color="text.secondary">
              My partner and I frequently use our holidays to travel.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2756&q=80"
            alt="person photographing mountains"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Photography
            </Typography>
            <Typography variant="body2" color="text.secondary">
              I usually take photos When travelling and at events for school
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://images.unsplash.com/photo-1596727147705-61a532a659bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            alt="groot"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Science Fiction
            </Typography>
            <Typography variant="body2" color="text.secondary">
              I read and watch a lot of Science Fiction films and movies. 
            </Typography>
          </CardContent>
        </Card>    
      </Grid> 
    <Grid item xs={6}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1541870730196-cd1efcbf5649?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80"
          alt="expresso"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Coffee
          </Typography>
          <Typography variant="body2" color="text.secondary">
            I make and drink a lot of coffee
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
  )
}

export default Interests;