<template>
  <div class="login-page">
    <div class="login-form">
      <h4>Đăng nhập</h4>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">Tên đăng nhập</label>
          <input
            type="text"
            class="form-control"
            v-model="userLocal.username"
            placeholder="Nhập username..."
          />
        </div>
        <div class="form-group">
          <label for="password">Mật khẩu</label>
          <input
            type="password"
            class="form-control"
            v-model="userLocal.password"
            placeholder="Nhập mật khẩu..."
          />
        </div>
        <div class="form-group">
          <button class="btn btn-primary w-100">Đăng nhập</button>
          <p class="mt-3 text-center">
            Chưa có tài khoản? <router-link to="/register">Đăng ký</router-link>
          </p>
        </div>
      </form>
      <p class="text-danger">{{ message }}</p>
    </div>
  </div>
</template>

<script>
import AuthService from "../services/auth.service";

export default {
  data() {
    return {
      userLocal: {
        username: "",
        password: "",
      },
      message: "",
    };
  },
  methods: {
    async handleLogin() {
      try {
        await AuthService.login(this.userLocal);
        this.$router.push({ name: "contactbook" });
      } catch (error) {
        this.message = "Tên đăng nhập hoặc mật khẩu không đúng!";
      }
    },
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
}
.login-form {
  width: 350px;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
}
</style>
