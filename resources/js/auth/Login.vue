<template>
  <section class="section hero is-fullheight is-error-section">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-two-fifths">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  <span class="icon"><i class="mdi mdi-lock"></i></span>
                  <span>Login</span>
                </p>
              </header>



              <div class="card-content">
                <form method="POST" action="https://admin-one-laravel-free.justboil.me/login">
                  <input type="hidden" name="_token" value="lXl5g286mj2dgtwYbFFfhi6wyk8su0ZlH5hytICq">
                  <div class="field">
                    <label class="label" for="email">E-Mail Address</label>
                    <div class="control">
                      <input id="email" type="email" class="input " name="email" value="damnv@gmail.com" required="" autocomplete="email" autofocus="">
                    </div>
                  </div>

                  <div class="field">
                    <label class="label" for="password">Password</label>
                    <div class="control">
                      <input id="password" type="password" class="input  is-danger " name="password" required="" autocomplete="current-password" autofocus="">
                    </div>
                    <p class="help is-danger" role="alert">
                      The password must be at least 8 characters.
                    </p>
                  </div>

                  <div class="control">
                    <label tabindex="0" class="b-checkbox checkbox is-thin">
                      <input type="checkbox" value="false" name="remember" id="remember">
                      <span class="check is-black"></span>
                      <span class="control-label">Remember Me</span>
                    </label>
                  </div>

                  <hr>

                  <div class="field is-form-action-buttons">
                    <button type="submit" class="button is-black" @click="login()">
                      Login
                    </button>

                    <router-link class="button is-black is-outlined" :to="{name:'register'}">Register</router-link>

                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-foot has-text-centered">
      <div class="logo"></div>
    </div>
  </section>

</template>

<script>
    export default {
        name: "Login",
      data(){
          return{

          }
      },
      methods:{
          login(){
            Event.emit('login',true);
            this.$router.push('/home');
          }
      }
    }
</script>

<style lang="scss" scoped>

</style>
