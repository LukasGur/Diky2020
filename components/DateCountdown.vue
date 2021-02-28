<template>
  <div v-if="days > 0">
    Zbývá <span>{{ days }}</span> dnů <span>{{ hours }}</span> hodin a&nbsp;<span>{{ minutes }}</span> minut
  </div>
  <div v-else-if="seconds > 0">
    Zbývá <span>{{ hours }}</span> hodin <span>{{ minutes }}</span> minut a&nbsp;<span>{{ seconds }}</span> sekund
  </div>
  <div v-else>
    Zbývá <span>0</span>&nbsp;sekund
  </div>
</template>

<script>
export default {
  props: {
    countDownDate: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      now: new Date().getTime(),
      myInterval: null,
      expired: false
    }
  },
  computed: {
    distance () {
      return this.countDownDate - this.now
    },
    days () {
      return Math.floor(this.distance / (1000 * 60 * 60 * 24))
    },
    hours () {
      return Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    },
    minutes () {
      return Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60))
    },
    seconds () {
      return Math.floor((this.distance % (1000 * 60)) / 1000)
    }
  },
  created () {
    this.refreshTime()
  },
  methods: {
    refreshTime () {
      this.myInterval = setInterval(() => {
        this.now = new Date().getTime()

        if (this.distance < 0) {
          clearInterval(this.myInterval)
          this.expired = true
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
  span {
    color: $orange;
  }
</style>
