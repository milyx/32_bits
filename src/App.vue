<template>
  <div id="app">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th>3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    <transition name="vista">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.vista-enter-active,
.vista-leave-active {
  transition: opacity 0.1s;
}
.vista-enter,
.vista-leave-to {
  opacity: 0;
}
</style>
