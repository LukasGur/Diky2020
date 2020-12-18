<template>
  <div class="error">
    {{ error }}
    <strong>Zkuste prosím obnovit stránku</strong>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.error {
  text-align: center;
  color: $red;

  strong {
    display: block;
    margin-top: 0.5rem;
  }
}
</style>
