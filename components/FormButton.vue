<template>
  <component
    :is="elementType"
    :to="to"
    class="button"
    :class="[type ? 'button--'+type : '']"
    :target="blank ? '_blank' : ''"
    :href="href"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: null
    },
    to: {
      type: String,
      required: false,
      default: null
    },
    href: {
      type: String,
      required: false,
      default: null
    },
    blank: {
      type: Boolean,
      required: false,
      default: null
    }
  },
  computed: {
    elementType () {
      if (this.to) {
        return 'router-link'
      } else if (this.href) {
        return 'a'
      } else {
        return 'button'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  border: none;
  background-color: $orange;
  color: $white;
  padding: 16px 44px;
  border-radius: 4px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2.4px;
  font-size: 12px;
  font-weight: bold;
  transition: 0.2s;

  @include xs {
    padding: 16px 30px;
  }

  &:hover {
    background-color: $orange-dark;
  }
}

.button--primary-outline {
  color: $orange;
  background-color: $white;
  border: 1px solid $orange;
  padding: 17px 45px;

  @include xs {
    padding: 17px 31px;
  }

  &:hover {
    background-color: $orange-light-2;
  }
}
</style>
