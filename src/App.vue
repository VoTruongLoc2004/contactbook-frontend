<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      currentUser: null,
    };
  },
  methods: {
    updateUserStatus() {
      this.currentUser = JSON.parse(localStorage.getItem("user"));
    },
    logout() {
      localStorage.removeItem("user");
      this.updateUserStatus();
      this.$router.push({ name: "login" });
    },
  },
  created() {
    this.updateUserStatus();
  },
  watch: {
    $route() {
      this.updateUserStatus();
    },
  },
};
</script>

<template>
  <div id="app">
    <AppHeader :user="currentUser" @logout="logout" />
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>
