<script>
import HeaderBarBrand from '@/components/header-bar-brand.vue';
import AuthLogin from '@/components/auth-login.vue';

async function getUserInfo() {
  const response = await fetch('/.auth/me');
  const payload = await response.json();
  const { clientPrincipal } = payload;
  return clientPrincipal;
}


export default {
  name: 'HeaderBar',
  components: {
    HeaderBarBrand,
    AuthLogin,
  },
  data() {
    return {
      user: getUserInfo(),
    };
  },
  methods: {
  },
};
</script>

<template>
  <header>
    <nav class="navbar is-white" role="navigation" aria-label="main navigation">
      <HeaderBarBrand></HeaderBarBrand>
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item nav-home" to="/">Home</router-link>
          <auth-login provider="Twitter" />
          <div v-if="user">Hello {{user}}</div>
        </div>
      </div>
    </nav>
  </header>
</template>
