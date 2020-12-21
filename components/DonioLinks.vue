/* eslint-disable vue/valid-v-bind */
<script>
export default {
  props: {
    thanksId: {
      type: String,
      required: false,
      default: null
    }
  },
  methods: {
    redirectUrl (code) {
      if (this.thanksId) {
        return `https://www.donio.cz/prispevek/${code}?utm_medium=referral&utm_source=Diky2020.cz&utm_campaign=Diky2020&diky2020Id=${this.thanksId}`
      }
      return ` https://www.donio.cz/prispevek/${code}?utm_medium=referral&utm_source=Diky2020.cz&utm_campaign=Diky2020NoThanks`
    }
  }
}
</script>

<template>
  <div class="wrapper">
    <div class="links__wrapper">
      <div class="links__left">
        <img class="links__image-left" src="/hp-banner-illustration-left.png" alt="pán starající se o seniorku">
        <div class="link__box link__box--left">
          <h3 class="links__title">
            Podpořím seniory.
          </h3>
          <form-button :href="redirectUrl('000851')" :blank="true">
            Podpořit
          </form-button>
        </div>
      </div>
      <div class="links__right">
        <div class="link__box link__box--right">
          <h3 class="links__title">
            Podpořím samoživitele.
          </h3>
          <form-button :href="redirectUrl('000852')" :blank="true" type="primary-outline">
            Podpořit
          </form-button>
        </div>
        <img class="links__image-right" src="/mama-a-dite-transparent.png" alt="matka s dítětem">
      </div>
    </div>
    <p class="signature">
      Pro zaslání finančního příspěvku budete přesměrování na web Donio.cz
    </p>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  margin: 0;
}

.links__wrapper {
  display: flex;
  width: 100%;
  margin-bottom: 1.5rem;

  @include sm {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.links__left,
.links__right {
  flex-basis: 50%;
  width: 100%;
  padding: 1.5rem 2rem;
  position: relative;

  @include sm {
    padding: 1.5rem;
  }
}

.links__left {
  background-color: $orange-light;
  border-bottom-left-radius: 8px;

  @include sm {
    border-bottom-left-radius: 0;
  }
}

.links__right {
  background-color: $orange;
  color: $white;
  border-bottom-right-radius: 8px;

  @include sm {
    border-bottom-left-radius: 8px;
  }
}

.link__box {
  text-align: right;
  display: inline-block;

  &--left {
    text-align: right;
    display: block;

    @include xl {
      display: block;
    }

    @include md {
      text-align: left;
      margin-left: 0;
    }

    @include sm {
      text-align: right;
    }
  }

    @include xs {
      text-align: left;
    }
}

.links__image-right {
  position: absolute;
  right: 0.6rem;
  bottom: 20px;
  height: 181px;
  z-index: 0;

  @include sm {
    right: 0.7rem;
  }
}

.links__image-left {
  position: absolute;
  left: 25px;
  bottom: 20px;
  width: 108.8px;

  @include sm {
    left: 15px;
  }
}

.links__image-left,
.links__image-right {
  @include md {
    display: none;
  }

  @include sm {
    display: block;
  }

  @include xs {
    display: none;
  }
}

.links__title {
  font-family: $font-second;
  font-size: 1.75rem;
  margin-bottom: 1rem;

  @include xl {
    width: 171px;

    &:first-child {
      margin-left: auto;

      @include md {
        margin-left: 0;
        text-align: left;
      }

      @include sm {
        margin-left: auto;
        text-align: right;
      }

      @include xs {
        margin-left: 0;
        text-align: left;
      }
    }
  }
}

.text {
  max-width: 500px;
  text-align: center;
}

.signature {
  font-size: 12px;
  text-align: center;
}

.icon--tick {
  background-image: url('/checkbox.svg');
}
</style>
