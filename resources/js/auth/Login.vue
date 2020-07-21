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
                  <div class="field">
                    <label class="label" for="email">Username</label>
                    <div class="control">
                      <input id="email" type="email" class="input" :class="{'is-danger': validation.hasError('email')}"  v-model="email">
                    </div>
                    <p class="help is-danger" role="alert">
                      {{ validation.firstError('email')}}
                    </p>
                  </div>

                  <div class="field">
                    <label class="label" for="password">Password</label>
                    <div class="control">
                      <input id="password" type="password" class="input " :class="{'is-danger': validation.hasError('password')}"   v-model="password">
                    </div>
                    <p class="help is-danger" role="alert">
                      {{ validation.firstError('password')}}
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
  import SimpleVueValidation from 'simple-vue-validator';
  const Validator = SimpleVueValidation.Validator;
    export default {
        name: "Login",
      data(){
          return{
            email:'',
            password:''
          }
      },
      validators: {
        email: function (value) {
          return Validator.value(value).required('Không được để trống');
        },
        password: function (value) {
          return Validator.value(value).required('Không được để trống');
        },

      },
      methods:{
          login(){
            var  $this = this;
            this.$validate()
              .then(function (success) {
                if (success) {
                    Event.emit('login',true);
                  $this.$router.push('/');
                }
              });

          }
      }
    }
</script>

<style lang="scss" scoped>

</style>
