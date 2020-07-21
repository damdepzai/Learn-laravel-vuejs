<template>
  <section class="section hero is-fullheight is-error-section">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-two-fifths">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  <span class="icon"><i class="mdi mdi-account-check"></i></span>
                  <span>Register</span>
                </p>
              </header>


              <div class="card-content">
                <form method="POST" action="https://admin-one-laravel-free.justboil.me/register">
                  <input type="hidden" name="_token" value="lXl5g286mj2dgtwYbFFfhi6wyk8su0ZlH5hytICq">
                  <div class="field">
                    <label class="label" for="email">Name</label>
                    <div class="control">
                      <input id="name" type="text" class="input " name="name" value="" required="" autocomplete="name" autofocus="">
                    </div>
                  </div>

                  <div class="field">
                    <label class="label" for="email">E-Mail Address</label>
                    <div class="control">
                      <input id="email" type="email" class="input " name="email" value="" required="" autocomplete="email" autofocus="">
                    </div>
                  </div>

                  <div class="field">
                    <label class="label" for="password">Password</label>
                    <div class="control">
                      <input id="password" type="password" class="input " name="password" required="" autocomplete="new-password" autofocus="">
                    </div>
                  </div>

                  <div class="field">
                    <label class="label" for="password-confirm">Confirm Password</label>
                    <div class="control">
                      <input id="password-confirm" type="password" class="input" name="password_confirmation" required="" autocomplete="new-password" autofocus="">
                    </div>
                  </div>

                  <hr>

                  <div class="field is-form-action-buttons">
                    <button type="submit" class="button is-black">
                      Register
                    </button>
                    <router-link class="button is-black is-outlined" :to="{name:'login'}">Login</router-link>
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
        name: "Register"
    }
</script>

<style scoped>

</style>
