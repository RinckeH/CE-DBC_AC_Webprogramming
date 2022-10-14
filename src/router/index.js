import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login.vue'
import Register from '@/pages/Register.vue'
import PasswordReset from '@/pages/PasswordReset.vue'
import LogoutConfirmation from '@/pages/LogoutConfirmation'
import StartScreen from '@/pages/StartScreen'
import PersonalAccount from '@/pages/PersonalAccount'
import SelectedProgram from '@/pages/SelectedProgram'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/login', component: Login },
    { path: '/Register', component: Register },
    { path: '/PasswordReset', component: PasswordReset},
    { path: '/LogoutConfirmation', component: LogoutConfirmation},
    { path: '/StartScreen', component: StartScreen},
    { path: '/PersonalAccount', component: PersonalAccount},
    { path: '/SelectedProgram', component: SelectedProgram},
  ],
  mode: 'history'
});