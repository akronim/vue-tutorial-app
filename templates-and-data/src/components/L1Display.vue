<template>
  <div>
      <!-- router-link is used to generate a navigation element-->
      <router-link to="/l1/e1" class="btn btn-secondary m-1">E1 text interpolation binding, directives, filters</router-link>
      <router-link to="/l1/e2" class="btn btn-secondary m-1">E2 data bindings</router-link>
      <router-link to="/l1/e3" class="btn btn-secondary m-1">E3 v-text v-html</router-link>
      <router-link to="/l1/e4" class="btn btn-secondary m-1">E4 v-if v-show</router-link>
      <router-link to="/l1/e5" class="btn btn-secondary m-1">E5 v-bind</router-link>
      <router-link to="/l1/e6" class="btn btn-secondary m-1">E6 v-bind</router-link>
      <router-link to="/l1/e7" class="btn btn-secondary m-1">E7 v-bind</router-link>
      <router-link to="/l1/e8" class="btn btn-secondary m-1">E8 v-bind</router-link>
      <router-link to="/l1/e9" class="btn btn-secondary m-1">E9 v-bind property</router-link>
      <router-link to="/l1/e10" class="btn btn-secondary m-1">E10 v-for</router-link>
      <router-link to="/l1/e11" class="btn btn-secondary m-1">E11 v-for</router-link>
      <router-link to="/l1/e12" class="btn btn-secondary m-1">E12 v-for !!!</router-link>
      <router-link to="/l1/e13" class="btn btn-secondary m-1">E13 events v-on</router-link>
      <router-link to="/l1/e14" class="btn btn-secondary m-1">E14 event bubbling</router-link>
      <router-link to="/l1/e15" class="btn btn-secondary m-1">E15 events capture phase</router-link>
      <router-link to="/l1/e16" class="btn btn-secondary m-1">E16 events</router-link>
      <router-link to="/l1/e17" class="btn btn-secondary m-1">E17 stop event propagation</router-link>
      <router-link to="/l1/e18" class="btn btn-secondary m-1">E18 events once modifier</router-link>
      <router-link to="/l1/e19" class="btn btn-secondary m-1">E19 mouse event modifiers</router-link>
      <router-link to="/l1/e20" class="btn btn-secondary m-1">E20 v-on:keydown.ctrl</router-link>
      <router-link to="/l1/e21" class="btn btn-secondary m-1">E21 one-way two-way binding</router-link>
      <router-link to="/l1/e22" class="btn btn-secondary m-1">E22 two-way binding v-model</router-link>
      <router-link to="/l1/e23" class="btn btn-secondary m-1">E23 v-model</router-link>
      <router-link to="/l1/e24" class="btn btn-secondary m-1">E24 v-model rbtns, checkboxes, select</router-link>
      <router-link to="/l1/e25" class="btn btn-secondary m-1">E25 v-model</router-link>
      <router-link to="/l1/e26" class="btn btn-secondary m-1">E26 form, watch, validation</router-link>
      <router-link to="/l1/e27" class="btn btn-secondary m-1">E27 parent-child, props, v-model</router-link>
      <router-link to="/l1/e28" class="btn btn-secondary m-1">E28 parent-child v-bind</router-link>
      <router-link to="/l1/e29" class="btn btn-secondary m-1">E29 parent-child: event from a child</router-link>
      <router-link to="/l1/e30" class="btn btn-secondary m-1">E30 parent-child: slots 1</router-link>
    <router-view />
  </div>
</template>


