<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <div>
      <button type="button" @click="doLogin">Login</button>
    </div>

    <p>Username = {{ username }}</p>

    <div>
      <button type="button" @click="doCreateAsset">Create Asset</button>
    </div>

    <p>{{ result }}</p>
  </div>
</template>

<script>
import user from "./user";
import api from "./api";

export default {
  name: "App",
  components: {},

  data() {
    return {
      username: "",
      result: null,
    };
  },

  methods: {
    async doCreateAsset() {
      const result = await api.postApi("https://localhost:5000/api/Assets", {
        name: "เครื่องถ่ายเอกสาร",
        allItemCount: 5,
      });

      this.result = result;
    },
    doLogin() {
      user.signIn(this.onSucces, this.onError);
    },
    onSucces() {
      this.username = user.getUsername();
    },
    onError(err) {
      alert(err);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
