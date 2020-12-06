<template>
  <div class="canvas-container">
    <canvas
      class="canvas"
      @mousedown="startDrawing"
      @mousemove="draw"
      @mouseup="stopDrawing"
      @mouseout="resetPath"
    ></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawing: false,
      color: "#000",
      lineWidth: 8
    };
  },
  methods: {
    startDrawing(e) {
      this.drawing = true;
      this.draw(e);
    },
    stopDrawing() {
      window.addEventListener("mouseup", () => {
        this.drawing = false;
        const canvas = document.querySelector(".canvas");
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
      });
    },
    resetPath() {
      const canvas = document.querySelector(".canvas");
      const ctx = canvas.getContext("2d");
      ctx.beginPath();
    },

    draw(e) {
      if (!this.drawing) return;

      const canvas = document.querySelector(".canvas");
      const ctx = canvas.getContext("2d");

      const mouseX = e.clientX - canvas.offsetLeft;
      const mouseY = e.clientY - canvas.offsetTop;

      ctx.lineWidth = this.lineWidth;
      ctx.lineCap = "round";
      ctx.strokeStyle = this.color;

      ctx.lineTo(mouseX, mouseY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(mouseX, mouseY);
    }
  },
  mounted() {
    const canvas = document.querySelector(".canvas");
    const parentCanvas = document.querySelector(".canvas-container");
    canvas.width = parentCanvas.offsetWidth;
    canvas.height = parentCanvas.offsetHeight;
  }
};
</script>

<style lang="scss" scoped>
.canvas-container {
  background: white;
  flex: 4;
  box-shadow: 0 3px 30px rgba($color: #000000, $alpha: 0.5);

  .canvas {
    height: 100%;
    width: 100%;
  }
}
</style>
