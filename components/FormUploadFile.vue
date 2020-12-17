<script>
export default {
  data () {
    return {
      fileInputText: 'Nahrát obrázek'
    }
  },
  methods: {
    previewFiles (event) {
      this.fileInputText = event.target.files[0].name
    }
  }
}
</script>

<template>
  <label class="file-input">
    <i class="fa fa-image" />
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
}
</style>
