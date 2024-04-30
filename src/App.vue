<template>
  <h1>Carpooling app</h1>

  <nav>
    <ul>
      <li>
        <RouterLink to="/carpoolers">Carpooler list</RouterLink>
      </li>
      <li>
        <RouterLink to="/scores">Scores</RouterLink>
      </li>
    </ul>
  </nav>

  <main>
    <RouterView />
  </main>
</template>
