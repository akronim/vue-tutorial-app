<!-- Some components need multiple router-view elements in the same template so 
that two or more child components can be selected dynamically. The name attribute 
is used to differentiate between router-view elements when they are in the same 
template, and these names are then used in the routes to select the components 
that will be displayed. -->

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col text-center m-2">
        <h3 class="bg-secondary text-white text-center p-2">Left View</h3>
        <router-view name="left" class="border border-secondary p-2" />
      </div>
      <div class="col text-center m-2">
        <h3 class="bg-secondary text-white text-center p-2">Right View</h3>
        <router-view name="right" class="border border-secondary p-2" />
      </div>
    </div>
  </div>
</template>