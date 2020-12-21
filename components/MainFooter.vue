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
  <footer class="footer">
    <div class="container footer__wrapper">
      <a href="mailto:info@diky2020.cz" class="mail-link">
        <i class="icon icon--email" />info<span class="copyright__icon">@</span>diky2020.cz
      </a>
      <div class="copyright">
        <span class="copyright__icon">&copy;</span> {{ year }} Diky2020.cz
      </div>
      <a href="https://noltio.com/" class="noltio__link">
        Vyvinulo
        <img class="notlio__logo" src="/noltio-logo.png" alt="Logo firmy Noltio, s.r.o.">Noltio
      </a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.container {
  padding: 0;
}

.footer {
  background-color: $yellow-light;
  color: $black;
  padding: 1.5rem 0;
}

.footer__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding-right: 2.4rem;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2px;

  @include sm {
    flex-direction: column;

    > * {
      margin-bottom: 0.7rem;
    }
  }

  &::after {
    content: '';
    background-image: url('/darce-pulka.svg');
    height: 100px;
    width: 70px;
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    bottom: -4.25rem;
    right: 0;
    transform: rotateY(180deg);
    z-index: 0;

    @include sm {
      bottom: -2.7rem;
    }
  }
}

.notlio__logo {
  height: 0.9em;
  margin-right: 2px;
  margin-left: 2px;
  top: 1px;
  position: relative;
}

.noltio__link,
.mail-link {
  color: $black;
  text-decoration: none;
  transition: 0.2s;
  z-index: 1;
  border-bottom: 1px solid $black;

  &:hover {
    color: $orange;
    border-bottom: 1px solid $orange;
  }
}

.mail-link {
  padding-left: 4px;
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
