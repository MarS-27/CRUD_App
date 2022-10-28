import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import ButtonStack from "../buttons/ButtonStack";

function PostsListItem({ post, onDelete, onSelect, onEditOpen }) {
    const onDeleteClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onDelete(post);
    };
      
    const onEditClick = () => {
        onEditOpen();
        onSelect(post);
    }

    return (
        <Grid item xs={2} sm={4} md={4}>
            <Card 
                sx={{ width: "100%", 
                    height: "100%", 
                    display: "flex", 
                    flexDirection: "column",
                    margin: "0 auto", 
                    maxWidth: 345 
                }}
            >
                <CardMedia
                    component="img"
                    height="140"
                    src={post.image}
                    alt={post.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {post.title}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        {post.author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {post.text}
                    </Typography>
                </CardContent>
                <ButtonStack 
                    postPageStyle={{ padding: "16px", marginTop: "auto" }}
                    onEditClick={onEditClick} 
                    onDeleteClick={onDeleteClick}
                />
            </Card>
        </Grid>
    );
}

export default PostsListItem;