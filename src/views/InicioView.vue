<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link
                to="/Inicio"
                class="nav-link active"
                aria-curre
                nt="page"
                >Inicio</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/Inicio"
                class="nav-link active"
                aria-curre
                nt="page"
                >Busqueda</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/Inicio"
                class="nav-link active"
                aria-curre
                nt="page"
                >Ventas</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/Inicio"
                class="nav-link active"
                aria-curre
                nt="page"
                >Totales</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <h1 class="text-center py-5">Tienda de juegos 32 bits</h1>
  </div>
</template>

<script>
export default {
  name: "InicioView",
};
</script>
