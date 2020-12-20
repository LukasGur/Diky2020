<script>
export default {
  async asyncData ({ $content, store }) {
    const content = await $content('myslenka').fetch()
    store.commit('setNewMainTitle', content.title)
    return { content }
  }
}
</script>

<template>
  <div class="container">
    <nuxt-content :document="content" />
  </div>
</template>

<style lang="scss">
.nuxt-content {
  h2 {
    font-weight: 800;
    font-size: 1.7rem;
    margin-top: 2rem;
    margin-bottom: 1.2rem;

    @include lg {
      margin-top: 3.2rem;
      font-size: 2.4rem;
    }

    a {
      display: none;
    }
  }

  h3 {
    font-weight: 700;
    font-size: 1.4rem;
    margin-top: 2rem;
    margin-bottom: 0.7rem;
    @include lg {
      margin-top: 3.2rem;
      font-size: 1.8rem;
      margin-bottom: 1.2rem;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.9rem;
    margin-top: 0;
    margin-bottom: 1.3rem;
    @include lg {
      margin-bottom: 1.8rem;
      font-size: 1.5rem;
      line-height: 2.25rem;
    }
  }

  a {
    color: #684ada;

    &:hover {
      text-decoration: none;
    }
  }

  code {
    font-family: monospace;
    background: #f3f3f3;
    color: #000;
  }

  pre {
    border-left: 0;
    overflow-x: scroll;
    background: #222;
    font-family: monospace;
    font-size: 1.2rem;
    line-height: 1.3rem;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1.3rem;
    @include lg {
      margin-bottom: 1.8rem;
    }

    code {
      background: #222;
      color: #fff;
    }
  }

  ul,
  ol {
    font-size: 1.5rem;
    margin-left: 1.75rem;
    margin-bottom: 1.5rem;
    @include lg {
      margin-left: 3rem;
      margin-bottom: 2rem;
    }

    li {
      font-size: 1.2rem;
      line-height: 1.9rem;
      margin-bottom: 0.5rem;
      @include lg {
        font-size: 1.5rem;
        line-height: 2.25rem;
      }
    }
  }

  img {
    max-width: 100%;
    border: 1px solid #eee;
    border-radius: 8px;
  }
}
</style>
