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
    <call-to-action />
  </div>
</template>

<style lang="scss">
.nuxt-content {
  h2 {
    font-weight: 800;
    margin-top: 3.2rem;
    font-size: 2.4rem;
    margin-bottom: 1.2rem;

    @include lg {
      font-size: 1.7rem;
      margin-top: 2rem;
    }

    a {
      display: none;
    }
  }

  h3 {
    font-weight: 700;
    margin-top: 3.2rem;
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
    @include lg {
      font-size: 1.4rem;
      margin-top: 2rem;
      margin-bottom: 0.7rem;
    }
  }

  p {
    margin-bottom: 1.8rem;
    font-size: 1.5rem;
    line-height: 2.25rem;
    margin-top: 0;
    margin-bottom: 1.3rem;

    @include lg {
      font-size: 1.2rem;
      line-height: 1.9rem;
      margin-top: 0;
      margin-bottom: 1.3rem;
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
    margin-bottom: 1.8rem;
    @include lg {
      margin-bottom: 1.3rem;
    }

    code {
      background: #222;
      color: #fff;
    }
  }

  ul,
  ol {
    font-size: 1.5rem;
    margin-left: 3rem;
    margin-bottom: 2rem;
    @include lg {
      margin-left: 1.75rem;
      margin-bottom: 1.5rem;
    }

    li {
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
      line-height: 2.25rem;
      @include lg {
        font-size: 1.2rem;
        line-height: 1.9rem;
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
