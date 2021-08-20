<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col bg-secondary text-white">
        <a class="navbar-brand">SPORTS STORE Admin</a>
      </div>
    </div>
    <div class="row">
      <div class="col-3 bg-secondary p-2">
        <!-- active-class attribute specifies a class to which the element will
        be added when the route specified by its "to" attribute is active-->
        <router-link
          to="/admin/products"
          class="btn btn-block btn-primary"
          active-class="active"
        >Products</router-link>
        <router-link
          to="/admin/orders"
          class="btn btn-block btn-primary"
          active-class="active"
        >Orders</router-link>
      </div>
      <div class="col-9 p-2">
        <!-- application can contain multiple router-view elements (here to
        alternate between the product and order management components 
        using URL routes)-->
        <router-view />
      </div>
    </div>
  </div>
</template>