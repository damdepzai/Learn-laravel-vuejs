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
                  <div class="field">
                    <label class="label" for="email">Name</label>
                    <div class="control">
                      <input id="name" type="text" class="input " name="name" :class="{'is-danger': validation.hasError('name')}"  v-model="name"  >
                    </div>
                    <p class="help is-danger" role="alert">
                      {{ validation.firstError('name')}}
                    </p>
                  </div>

                  <div class="field">
                    <label class="label" for="email">E-Mail Address</label>
                    <div class="control">
                      <input id="email" type="email" class="input " name="email" :class="{'is-danger': validation.hasError('email')}" v-model="email"  >
                    </div>
                    <p class="help is-danger" role="alert">
                      {{ validation.firstError('email')}}
                    </p>
                  </div>

                  <div class="field">
                    <label class="label" for="password">Password</label>
                    <div class="control">
                      <input id="password" type="password" class="input " name="password" :class="{'is-danger': validation.hasError('password')}" v-model="password">
                    </div>
                    <p class="help is-danger" role="alert">
                      {{ validation.firstError('password')}}
                    </p>
                  </div>

                  <div class="field">
                    <label class="label" for="password-confirm">Confirm Password</label>
                    <div class="control">
                      <input id="password-confirm" type="password" class="input" name="confirm_password" :class="{'is-danger': validation.hasError('confirm_password')}" v-model="confirm_password" >
                    </div>
                    <p class="help is-danger" role="alert">
                      {{ validation.firstError('confirm_password')}}
                    </p>
                  </div>

                  <hr>

                  <div class="field is-form-action-buttons">
                    <button type="submit" class="button is-black" @click="Register()">
                      Register
                    </button>
                    <router-link class="button is-black is-outlined" :to="{name:'login'}">Login</router-link>
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
        name: "Register",
        data(){
          return{
              email:'',
              password:'',
              name:'',
              confirm_password:'',
              submitted: false
          }
        },
        validators: {
        'name': function (value) {
          return Validator.value(value).required('Không được để trống');
        },
        'email': function (value) {
          return Validator.value(value).required('Không được để trống');
        },
        'password': function (value) {
          return Validator.value(value).required('Không được để trống').minLength(6,'Mật khẩu không được dưới 6 ký tự');
        },
        'confirm_password, password': function (confirm_password, password) {
        if (this.submitted || this.validation.isTouched('confirm_password')) {
          return Validator.value(confirm_password).required('Không được để trống').match(password,'Mật khẩu không khớp');
        }
      }
      },
        methods:{
          Register(){
            var  $this = this;
            $this.submitted = true;
            $this.$validate()
              .then(function (success) {
                if (success) {
                  $this.$router.push('/login');
                }
              });
          }
        }
        
    }
</script>

<style scoped>

</style>
