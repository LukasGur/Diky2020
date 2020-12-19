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
    },
    maxCharacters: {
      type: Number,
      required: false,
      default: null
    }
  },
  computed: {
    textCharacterCount () {
      return this.value.length
    },
    maxCharactersReached () {
      return this.textCharacterCount > this.maxCharacters
    }
  },
  methods: {
    updateValue (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<template>
  <label class="label">
    <div class="label__text">
      {{ label }} <span v-if="required" class="label__required">*</span>
      <span v-show="maxCharacters" class="character-counter" :class="{'character-counter--reached': maxCharactersReached}">
        {{ textCharacterCount }}/{{ maxCharacters }}
      </span>
    </div>
    <textarea
      class="input"
      rows="6"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue($event.target.value)"
    />
  </label>
</template>

<style lang="scss" scoped>
.input {
  padding: 1rem;
  width: 100%;
  border: 1px solid $gray;
  border-radius: 4px;

  &:focus {
    background-color: $yellow-light;
  }
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
  position: relative;
}

.character-counter {
  position: absolute;
  font-size: 0.8rem;
  right: 0;
  bottom: 0;

  &--reached {
    color: $red;
    font-weight: bold;
  }
}
</style>
