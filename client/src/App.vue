<template>
  <div class="container">
    <app-chat></app-chat>
    <div class="sub-container">
      <app-canvas></app-canvas>
      <app-palette></app-palette>
    </div>
  </div>
</template>

<script>
import Chat from "./components/Chat";
import Canvas from "./components/Canvas";
import Palette from "./components/Palette";

export default {
  components: {
    "app-chat": Chat,
    "app-canvas": Canvas,
    "app-palette": Palette
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Quicksand", sans-serif;
  background: #384047;
  color: #fff;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
}

button {
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  transition: 0.1s ease-out;
}

button:active {
  transform: translateY(3px);
}

.container {
  display: flex;
  height: 100vh;
  padding: 1.5rem;

  .sub-container {
    display: flex;
    flex-direction: column;
    flex: 4;
  }
}
</style>
