<template>
  <main class="main">
    <router-link class="link-add" to="/user">Add user</router-link>
    <table class="striped">
      <thead>
        <tr class="row">
          <th class="head-column">
            Number
          </th>
          <th class="head-column">
            Name
          </th>
          <th class="head-column">
            Surname
          </th>
          <th class="head-column">
            Phone
          </th>
          <th class="head-column">
            E-mail
          </th>
          <th class="head-column">
            Edit
          </th>
          <th class="head-column">
            Delete
          </th>
        </tr>
      </thead>
      <p class="users-empty" v-if="!users.length">no users</p>
      <tbody v-else>
        <tr v-for="(user, index) in users" :key="+user.id">
          <td>{{index + 1}}</td>
          <td>{{user.name}}</td>
          <td>{{user.surname}}</td>
          <td>{{user.phone}}</td>
          <td>{{user.email}}</td>
          <router-link :to="{ name: 'user', params: {user: user}}">
            <td>
              <button class="btn">
                Edit
              </button>
            </td>
          </router-link>
          <td>
            <button class="btn" v-on:click="deleteUser(user.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        users: this.$store.state.users,
      }
    },
    methods: {
      deleteUser(id) {
        this.$store.commit('removeUser', id);
        localStorage.setItem('users', JSON.stringify(this.$store.state.users));
        this.users = this.$store.state.users;
      }
    },
  }
</script>

<style scoped>
  .main {
    position: relative;
    margin-top: 70px;
  }

  table.striped > tbody > tr:nth-child(odd) {
    background-color: rgba(170, 213, 213, 0.5);
  }

  .striped {
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    position: relative;
  }

  .head-column:first-of-type {
    width: 8%;
  }

  .head-column:nth-of-type(2) {
    width: 22%;
  }

  .head-column:nth-of-type(3) {
    width: 22%;
  }

  .head-column:nth-of-type(4) {
    width: 17%;
  }

  .head-column:nth-of-type(5) {
    width: 17%;
  }

  .head-column:nth-of-type(6) {
    width: 7%;
  }

  .head-column:nth-of-type(7) {
    width: 7%;
  }

  .btn {
    width: 80px;
  }

  .users-empty {
    position: absolute;
    color: #689f38;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
  }

  .link-add {
    position: absolute;
    display: inline-block;
    right: 80px;
    top: -60px;
    width: 300px;
    padding: 0 16px;   
    height: 36px;
    line-height: 36px;
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
    vertical-align: middle;
    border-radius: 2px;
    color: #fff;
    background-color: #689f38;
    transition: 0.3s;
  }
  
  .link-add:hover {
    color: #689f38;
    background-color: #ecffdd !important;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14);
  }
</style>
