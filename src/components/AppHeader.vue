<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <a href="/" class="navbar-brand">Ứng dụng Quản lý danh bạ</a>
    <div class="mr-auto navbar-nav">
      <li class="nav-item">
        <router-link :to="{ name: 'contactbook' }" class="nav-link">
          Danh bạ
          <i class="fas fa-address-book"></i>
        </router-link>
      </li>
    </div>

    <div class="navbar-nav ml-auto">
      <template v-if="!user">
        <li class="nav-item">
          <router-link :to="{ name: 'login' }" class="nav-link"
            >Đăng nhập</router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'register' }" class="nav-link"
            >Đăng ký</router-link
          >
        </li>
      </template>

      <template v-else>
        <li class="nav-item">
          <span class="nav-link text-light">Chào, {{ user.username }}</span>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="$emit('logout')">
            Đăng xuất <i class="fas fa-sign-out-alt"></i>
          </a>
        </li>
      </template>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    user: { type: Object, default: null },
  },
};
</script>
