<script>
export default {
  asyncData ({ store }) {
    store.commit('setNewMainTitle', 'Podpoř sbírku samoživitelkám')
  }
}
</script>

<template>
  <div class="container wrapper">
    <donio-links />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}

.links__wrapper {
  display: flex;
  width: 100%;
  margin: 1.5rem 0;

  @include xl {
    flex-direction: column;
  }
}

.links__left,
.links__right {
  flex-basis: 50%;
  width: 100%;
  padding: 2rem;
  position: relative;
}

.links__left {
  background-color: $orange-light;
  border-bottom-left-radius: 8px;
}

.links__right {
  background-color: $orange;
  color: $white;
  border-bottom-right-radius: 8px;
}

.link__box {
  text-align: right;
  display: inline-block;

  &:last-child {
    margin-left: 8rem;
  }
}

.links__image-right {
  position: absolute;
  right: 1rem;
  bottom: 30px;
  height: 181px;
  z-index: 0;
}

.links__image-left {
  position: absolute;
  left: 25px;
  bottom: 30px;
  width: 92px;
  height: 181px;
}

.links__title {
  font-family: $font-second;
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.text {
  max-width: 500px;
  text-align: center;
}

.signature {
  font-size: 12px;
}

.icon--tick {
  background-image: url('/checkbox.svg');
}
</style>
