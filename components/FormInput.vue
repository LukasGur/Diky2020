<template>
  <label class="label">
    <span class="label__text">{{ label }} <span v-if="required" class="label__required">*</span></span>
    <input
      class="input"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue($event.target.value)"
    >
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false,
      default: null
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    updateValue (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss" scoped>
  .input {
    padding: 1rem;
    width: 100%;
    border: 1px solid $gray;
    border-radius: 4px;
  }

  .input::placeholder {
    color: $gray;
  }

  .label {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .label__required {
    color: $red;
  }

  .label__text {
    margin-bottom: 0.5rem;
  }
</style>
