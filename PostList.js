import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { getUsers } from './services/axios';
import styles from './styles';

const PostList = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);

  // Fetch posts dari API 
  useEffect(() => {
    getUsers().then((res) => {
      if (res.status === 200) {
        setPosts(res.data);
      }
    });
  }, []);

  // update list jika isian card nya di update dari forms
  useEffect(() => {
    if (route.params?.updatedPost) {
      const updatedPost = route.params.updatedPost;
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === updatedPost.id ? updatedPost : post
        )
      );
    }
  }, [route.params?.updatedPost]);

  return (
    <ScrollView style={styles.scrollView}>
      {posts.map((post) => (
        <TouchableOpacity
          key={post.id}
          style={styles.card}
          onPress={() => navigation.navigate('Forms', { post })}
        >
          <Text style={styles.boldText}>{post.title}</Text>
          <Text style={styles.paragraph}>{post.body}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default PostList;
