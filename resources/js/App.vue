<template>
  <div id="app">
      <div class="dashboard" v-if="isLogin == true">
        <nav-bar/>
        <aside-menu :menu="menu"/>
        <router-view/>
        <footer-bar/>
      </div>
      <div class="login" v-if="isLogin == false">
          <router-view/>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar';
import AsideMenu from '@/components/AsideMenu';
import FooterBar from '@/components/FooterBar';
import Login from './auth/Login.vue';
export default {
  name: 'home',
  components: {
    FooterBar,
    AsideMenu,
    NavBar,
    Login
  },
  data(){
    return{
      isLogin:true,
    }
  },
  computed: {
    menu () {
      return [
        'General',
        [
          {
            to: '/',
            icon: 'desktop-mac',
            label: 'Dashboard'
          }
        ],
        'Resource',
        [
          {
            to: '/clients/index',
            label: 'Clients',
            icon: 'account-multiple',
            updateMark: true
          },
        ],
        'Examples',
        [
          {
            to: '/tables',
            label: 'Tables',
            icon: 'table'
          },
          {
            to: '/forms',
            label: 'Forms',
            icon: 'square-edit-outline'
          },
          {
            to: '/profile',
            label: 'Profile',
            icon: 'account-circle'
          },
          {
            label: 'Submenus',
            subLabel: 'Submenus Example',
            icon: 'view-list',
            menu: [
              {
                href: '#void',
                label: 'Sub-item One'
              },
              {
                href: '#void',
                label: 'Sub-item Two'
              }
            ]
          }
        ],
        'About',
        [
          {
            href: 'https://admin-one-laravel.justboil.me',
            label: 'Premium Demo',
            icon: 'credit-card'
          },
          {
            href: 'https://justboil.me/bulma-admin-template/one',
            label: 'About',
            icon: 'help-circle'
          }
        ]
      ]
    }
  },
  created () {
    Event.listen('login',value =>{
      this.isLogin =value
    })
  }
}
</script>
<style lang="scss" scoped>
  .login{
    padding: 6px;
    position: relative;
    left: -110px;
    top:-100px;
  }
  @media only screen and (max-width: 800px) {
    .login{
      position: relative;
      left: -20px;
      top:-30px

    }
  }
</style>
