<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Navbar />
    <AllFriends :friends="friends" @delete="deleteFriend" />
    <OnlineFriends :friends="friends"/>
    <Blogs />
  </div>
</template>

<script>
import Navbar from './Navbar'
import AllFriends from './AllFriends'
import OnlineFriends from './OnlineFriends'
import Blogs from './Blogs'

export default {
  name: 'app',
  components: {
    Navbar,
    OnlineFriends: OnlineFriends,
    AllFriends: AllFriends,
    Blogs
  },
  data () {
    return {
      title: 'My first Vue App wooooo!  : )',
      friends: [
          {name : 'Mario', online: true},
          {name : 'Lugi', online: false},
          {name : 'Toad', online: true},
          {name : 'Bowser', online: false}
      ]
    }
  },
  methods: {
    deleteFriend: function(payload) {
      console.log(payload)
      this.friends = this.friends.filter(friend => {
        return friend.name !== payload.name
      })
    }
  }
}
</script>

<style>
h1{
  color: #444;
  font-weight: normal;
  text-align: center;
}
</style>
