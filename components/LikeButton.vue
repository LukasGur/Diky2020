<script>
export default {
  props: {
    count: {
      type: Number,
      required: true
    },
    thanksId: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <button class="like-button">
    <span class="count">{{ count }}</span>
    <svg width="25" height="25" viewBox="0 0 189 162" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path id="heart" stroke="#030303" stroke-miterlimit="10" d="M94.3 28.8C94.3 28.8 128.5 -29.3 174.4 22C227.9 81.9 102.8 150.9 86.8 160.9C73.7 160.4 7.5 126 1.6 80C-4.3 34 33.1 -27.8 94.3 28.8Z" />
        <path
          id="Vector"
          d="M42.9 16C42.9 16 73 11.9 91.8 37.6C108.8 60.9 99.1 79.6 99.1 79.6"
        />
      </g>
    </svg>
  </button>
</template>

<style lang="scss" scoped>
.like-button {
  display: flex;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    #heart {
      fill: $orange;
    }
    #Vector {
      stroke: $white;
    }
  }
}

.count {
  margin-right: 0.5rem;
}

#heart {
  fill: $orange-light-2;
}

#Vector {
  stroke: $orange;
  stroke-width: 3;
}
</style>
