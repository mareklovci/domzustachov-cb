<template>
  <body class="font-argent font-light text-2xl">
  <div>
    <slot name="header"/>
    <slot name="main"/>
  </div>
  </body>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
