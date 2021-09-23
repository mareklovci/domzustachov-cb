<template>
  <body class="font-argent font-thin text-lg">
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
