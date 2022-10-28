import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import PostsListItem from './PostsListItem';

function PostsList({ posts, onSelect, onDelete, onEditOpen}) {
    return ( 
      <Grid 
        container 
        spacing={{ xs: 2, md: 3 }} 
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {posts.map((post) => (
          <PostsListItem
            key={post.id}
            post={post}
            onSelect={onSelect}
            onDelete={onDelete}
            onEditOpen={onEditOpen} 
          />
        ))}
      </Grid>
    ); 
}

export default PostsList;