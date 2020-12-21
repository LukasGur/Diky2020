<template>
  <div id="web">
    <MainHeader />
    <Nuxt />
    <MainFooter />
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: $font-primary
}

body {
  min-height: 100vh;
}

#web {
  color: $black;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  margin: 0 auto;
  max-width: 1055px;
  width: 90%;
  padding-bottom: 5rem;
}

.icon {
  position: relative;
  top: 3px;
  left: -3px;
  width: 1.3em;
  height: 1.3em;
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat;
}

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
