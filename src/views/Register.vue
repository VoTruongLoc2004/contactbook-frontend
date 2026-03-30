<template>
  <div class="register-page">
    <div class="register-form">
      <h4>Đăng ký tài khoản</h4>
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label>Tên đăng nhập</label>
          <input
            v-model="userLocal.username"
            type="text"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label>Mật khẩu</label>
          <input
            v-model="userLocal.password"
            type="password"
            class="form-control"
            required
          />
        </div>
        <button class="btn btn-success w-100 mt-3">Đăng ký</button>
      </form>
      <p class="mt-3 text-center">
        Đã có tài khoản? <router-link to="/login">Đăng nhập</router-link>
      </p>
      <p class="text-info">{{ message }}</p>
    </div>
  </div>
</template>

<script>
import AuthService from "../services/auth.service";

export default {
  data() {
    return {
      userLocal: { username: "", password: "" },
      message: "",
    };
  },
  methods: {
    async handleRegister() {
      try {
        await AuthService.register(this.userLocal);
        this.message = "Đăng ký thành công! Đang chuyển sang đăng nhập...";
        setTimeout(() => this.$router.push("/login"), 2000);
      } catch (error) {
        this.message = "Lỗi: Tên đăng nhập đã tồn tại!";
      }
    },
  },
};
</script>
<style scoped>
.register-page {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.register-form {
  width: 350px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
</style>
