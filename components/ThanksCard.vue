<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    summarize: {
      type: Boolean,
      required: false,
      default: true
    },
    detailLink: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  computed: {
    whiteSpaces () {
      return this.data.text.substring(0, 45).includes(' ')
    }
  },
  created () {
    if (this.data.text.length > 120 && this.summarize) {
      this.data.text = this.data.text.substring(0, 120) + '...'
    }
  }
}
</script>

<template>
  <div>
    <div class="card__dedication">
      <strong>{{ data.name }}</strong>
      děkuje
      <strong>{{ data.addressee }}</strong>
    </div>
    <div class="card">
      <div class="card__content">
        <p class="card__text" :class="{'card__text--break-all': !whiteSpaces}">
          {{ data.text }}
        </p>
        <button-text v-if="detailLink" :to="'/t/' + data.shortId" class="card__show-detail">
          Zobrazit detail
        </button-text>
      </div>
      <div v-if="data.donation" class="card__subsidy">
        <span class="card__subsidy--text">{{ data.name }} přispěl <strong>{{ data.donation.amount }} Kč</strong> {{ data.donation.target }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: $yellow-light;
  border-radius: 3px 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 40px);
}

.card__content {
  padding: 1.5rem 2rem;
  height: 100%;
}

.card__dedication {
  margin-bottom: 0.7rem;
}

.card__text {
  line-height: 1.4rem;
  letter-spacing: 1px;
  overflow: hidden;

  &--break-all {
    word-break: break-all;
  }
}

.card__subsidy {
  background-color: $orange-light;
  position: relative;
  bottom: 0;
  padding: 1.5rem 2rem;
  border-radius: 0 0 1rem 1rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    background-image: url("/darce-pulka.svg");
    background-repeat: no-repeat;
    background-size: contain;
    display: block;
    height: 72px;
    width: 65px;
    bottom: 0;

    @include xs {
      display: none;
    }
  }

  &--text {
    margin-left: 5rem;
    display: block;

    @include xs {
      margin-left: 0;
    }
  }
}

.card__show-detail {
  float: right;
  margin-top: 0.8rem;
}
</style>
