<script>
export default {
  data () {
    return {
      fileInputText: 'Nahrát obrázek'
    }
  },
  methods: {
    previewFiles (event) {
      if (event.target.files[0]) {
        this.fileInputText = event.target.files[0].name
      } else {
        this.fileInputText = 'Nahrát obrázek'
      }
    }
  }
}
</script>

<template>
  <label class="file-input">
    <i class="icon icon--paperclip" />
    {{ fileInputText }}
    <input accept="image/*," type="file" style="display: none;" name="image" @change="previewFiles">
  </label>
</template>

<style lang="scss" scoped>
.file-input {
  color: $orange;
  background-color: $white;
  border: 1px solid $orange;
  padding: 1rem;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2.4px;
  font-size: 12px;
  display: inline-block;
  width: 100%;
  text-align: center;
  font-weight: bold;
  transition: 0.2s;

  &:hover {
    background-color: $orange-light-2;
  }
}

.icon--paperclip {
  background-image: url('/paperclip.svg');
}
</style>
