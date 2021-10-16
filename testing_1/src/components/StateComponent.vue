<template>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  name: 'StateComponent',
  props: ['msg'],
  data: () => {
    return {
      count: 0
    }
  }
}
</script>
