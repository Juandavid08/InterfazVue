<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>Gestión de Ofertas</q-toolbar-title>
        <q-btn flat to="/" label="Inicio" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.q-toolbar-title {
  flex: 1;
}
</style>
