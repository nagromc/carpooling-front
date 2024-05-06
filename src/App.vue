<template>
  <h1>Carpooling app</h1>

  <nav>
    <ul>
      <li>
        <RouterLink :to="{ name: 'carpoolerList' }">Carpooler list</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'carpoolerScores' }">Scores</RouterLink>
      </li>
    </ul>
  </nav>

  <main>
    <RouterView />
  </main>
</template>
