<script>
export default {
  data () {
    return {
      fileInputText: 'Nahrát obrázek'
    }
  },
  methods: {
    previewFiles (e) {
      if (e.target.files[0]) {
        this.fileInputText = e.target.files[0].name
        this.$emit('input', e.target.files[0])
      }
    },
    removeFile () {
      this.$emit('input', new File([''], ''))
      this.fileInputText = 'Nahrát obrázek'
    }
  }
}
</script>

<template>
  <div class="wrapper">
    <button v-show="fileInputText !== 'Nahrát obrázek'" class="remove-file" @click.prevent="removeFile">
      &#10005;
    </button>
    <label class="file-input">
      <i class="icon icon--paperclip" />
      {{ fileInputText }}
      <input
        ref="inputFile"
        accept="image/png, image/jpeg, image/gif"
        type="file"
        style="display: none;"
        name="image"
        @change="previewFiles"
      >
    </label>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  width: 100%;
}

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

.remove-file {
  background-color: $orange;
  color: $white;
  border: none;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  font-weight: bold;
  font-size: 1.5rem;
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: $orange-dark;
  }
}
</style>
