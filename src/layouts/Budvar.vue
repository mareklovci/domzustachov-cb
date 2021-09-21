<template>
  <body class="font-argent font-normal text-4xl">
    <slot name="header" />
    <slot name="main"/>
  </body>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style scoped>

</style>