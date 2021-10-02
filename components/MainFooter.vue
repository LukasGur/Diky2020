<script>
export default {
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<template>
  <footer class="footer container">
    <div class="footer__wrapper">
      <a href="mailto:dotazy@diky2020.cz" class="mail-link">
        dotazy<span class="copyright__icon">@</span>diky2020.cz
      </a>
      <div class="copyright">
        <span class="copyright__icon">&copy;</span> {{ year }} Diky2020.cz
      </div>
      <a href="https://github.com/LukasGur" class="noltio__link">
        Vyvinulo
        <img class="notlio__logo" width="379px" height="377px" src="/noltio-logo.png" alt="Logo firmy Noltio, s.r.o.">
      </a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.container {
  padding: 0;

  @include md {
    width: 100%;
  }
}

.footer {
  background-color: $yellow-light;
  color: $black;
  padding: 1.5rem 2.7rem;
  margin-top: auto;
  border-radius: 5px 5px 0 0;
  font-weight: bold;
}

.footer__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 3px;

  @include sm {
    flex-direction: column;

    > * {
      margin-bottom: 0.7rem;
    }
  }
}

.notlio__logo {
  height: 12px;
  width: auto;
  top: 2px;
  position: relative;
}

.noltio__link,
.mail-link {
  color: $black;
  text-decoration: none;
  transition: 0.2s;
  z-index: 1;
  border-bottom: 1px solid transparent;

  &:hover {
    color: $orange-dark;
    border-bottom: 1px solid $orange-dark;
  }
}

.icon--email {
  background-image: url('/email.svg');
  font-size: 0.8em;
  top: 2px;
  margin-right: 1px;
}

.copyright {
  color: $orange;
}

.copyright__icon {
  font-size: 12px;
}
</style>
