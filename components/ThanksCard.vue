<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      summary: null,
      truncate: null
    }
  },
  created () {
    if (this.data.text.length > 120) {
      this.summary = true
      this.truncate = this.data.text.substring(0, 120) + '...'
    } else {
      this.summary = false
    }
  },
  methods: {
    toggleSummary () {
      this.summary = !this.summary
    }
  }
}
</script>

<template>
  <div>
    <p class="card__dedication">
      <strong>{{ data.name }}</strong> děkuje
      <strong>{{ data.addressee }}</strong>
    </p>
    <!-- <p v-for="(value, key) in data" :key="key">
      {{ key }}: {{ value }}
    </p> -->
    <div class="card">
      <div v-if="summary" class="card__content">
        <p class="card__text card__text--elipsis">
          {{ truncate }}
        </p>
        <button-text class="card__show-more" @click.native="toggleSummary">
          Zobrazit více
        </button-text>
      </div>
      <div v-else class="card__content">
        <p class="card__text">
          {{ data.text }}
        </p>
        <button-text v-if="truncate" class="card__show-more" @click.native="toggleSummary">
          Zobrazit méně
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
  height: 100%;
  // max-height: 197px;
}

.card__content {
  padding: 1.5rem 2rem;
  padding-bottom: 0;
}

.card__dedication {
  margin-bottom: 0.7rem;
}

.card__text {
  line-height: 1.4rem;
  letter-spacing: 1px;

  &--elipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
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
    background-image: url("/darce.png");
    background-repeat: no-repeat;
    background-size: contain;
    display: block;
    height: 72px;
    width: 100%;
    bottom: 0;
  }

  &--text {
    margin-left: 5rem;
    display: block;
  }
}

.card__show-more {
  float: right;
}
</style>
