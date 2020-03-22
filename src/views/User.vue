<template>
  <div>
    <form class="form contacts__form" v-on:submit.prevent="submitUser">
      <label>Name
        <input type="text" name="name" v-model="name" />
      </label>
      <label>Surname
        <input type="text" name="surname" v-model="surname" />
      </label>
      <label>Phone
        <input 
          type="tel" 
          name="phone" 
          pattern="\([0-9]{3}\)[0-9]{7}" 
          placeholder="(012)3456789" v-model="phone"/>
      </label>
      <label>E-mail
        <input 
          type="email" 
          name="email" 
          className="input form__input" 
          pattern=".+@[a-z]+.[a-z]{2,3}" 
          placeholder="user@example.com" 
          v-model="email" />
      </label>
      <button type="submit" class="form__button">
        {{user ? 'Confirm changes' : 'Add user'}}
      </button>
    </form>
    <form
      class="form-json"
      v-on:submit.prevent="submitJSON"
      v-if="!user"
    >
      <input class="input-json" type="text" v-model="json" />
      <button type="submit" class="button-json form__button">
        Import JSON
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: ['user'],
  data() {
    return {
      name: this.user ? this.user.name : '',
      surname: this.user ? this.user.surname : '',
      phone: this.user ? this.user.phone : '',
      email: this.user ? this.user.email : '',
      json: '',
    }
  },
  methods: {
    submitUser() {
      if (!this.name || !this.surname || !this.phone || !this.email) {
        return;
      }

      if (this.user) {
        const newUser = this.$store.state.users.map(person => {
          if (person.id !== this.user.id) {
            return person;
          } else {
            return {
              id: person.id,
              name: this.name,
              surname: this.surname,
              phone: this.phone,
              email: this.email,
            };
          }
        });

        this.$store.commit('editUser', newUser);
      } else {
        const newUser = {
          id: Date.now(),
          name: this.name,
          surname: this.surname,
          phone: this.phone,
          email: this.email,
        };

        this.$store.commit('addUser', newUser);
      }
      
      localStorage.setItem('users', JSON.stringify(this.$store.state.users));
      this.$router.push({path: '/'});
    },
    submitJSON() {
      if (!this.json) {
        return;
      }

      const newUser = JSON.parse(this.json);

      this.$store.commit('addUsersJson', newUser);
      localStorage.setItem('users', JSON.stringify(this.$store.state.users));
      this.$router.push({path: '/'});
    }
  }
}
</script>

<style scoped>
  .form {
    max-width: 700px;
    margin: 0 auto 100px;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  }

  .form__button {
    font-family: "Roboto", sans-serif;
    display: block;
    width: 80%;
    height: 56px;
    margin: 40px auto 0;
    font-size: 16px;
    line-height: 14px;
    font-weight: 700;
    background: #23272b;
    box-shadow: 0 6px 23px rgba(39, 62, 65, 0.46);
    border-radius: 8px;
    border-style: none;
    cursor: pointer;
    color: #fff;
    transition: 0.5s;
  }

  .form__button:hover {
    background-color: #70757b;
  }

  .form-json {
    margin: 0 auto;
    max-width: 1000px;
  }

  .form-json .input-json {
    border: 1px solid lightgrey;
    border-radius: 5px;
  }

  .button-json {
    width: 55%;
  }
</style>