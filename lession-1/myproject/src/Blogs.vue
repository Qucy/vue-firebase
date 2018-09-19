<template>
    <div class="blogs">
        <h2>{{ blogTitle }}</h2>
        <input type="text" v-model="searchTerm">
        <button @click="changeTitle">Change title</button>
        <div v-for="post in filteredPosts" :key="post.id">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body | snippet }}</p>
        </div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'Blogs',
    data() {
        return {
            blogTitle: 'Blogs',
            searchTerm: '',
            posts: []
        }
    },
    methods: {
        changeTitle: function() {
            this.blogTitle = 'Amazing Blog Site'
        }
    },
    computed: {
        filteredPosts: function() {
            return this.posts.filter(post =>{
                return post.title.match(this.searchTerm)
            })
        }
    },
    beforeCreate: function() {
        console.log('beforeCreate hook')
    },
    created: function() {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(response => {
            this.posts = response.data
        })
        .catch(err => {
            console.log(err)
        })
    },
    beforeUpdate: function () {
        console.log('Before update hook')
    }
}
</script>
