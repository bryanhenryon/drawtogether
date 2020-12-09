<template>
  <div class="canvas-container">
    <canvas
      class="canvas"
      :style="{ cursor: getCursor }"
      @mousedown="startDrawing"
      @mousemove="draw"
      @mouseup="stopDrawing"
      @mouseout="resetPath"
    ></canvas>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import io from "socket.io-client";

const socket = io();

export default {
  data() {
    return {
      drawing: false,
    };
  },
  computed: {
    ...mapGetters([
      "getColor",
      "getLineWidth",
      "getCursor",
      "getPaintbrush",
      "getEraser",
    ]),
  },
  methods: {
    startDrawing(e) {
      const canvas = document.querySelector(".canvas");
      this.drawing = true;
      this.draw(e);

      socket.emit("startDrawing", {
        mouseX: e.clientX - canvas.offsetLeft,
        mouseY: e.clientY - canvas.offsetTop,
        color: this.getEraser ? "#fff" : this.getColor,
        lineWidth: this.getLineWidth,
      });
    },
    stopDrawing() {
      window.addEventListener("mouseup", () => {
        this.drawing = false;
        const canvas = document.querySelector(".canvas");
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
      });

      socket.emit("stopDrawing");
    },
    resetPath() {
      const canvas = document.querySelector(".canvas");
      const ctx = canvas.getContext("2d");
      ctx.beginPath();

      socket.emit("resetPath");
    },

    draw(e) {
      if (!this.drawing) return;

      const canvas = document.querySelector(".canvas");
      const ctx = canvas.getContext("2d");

      const mouseX = e.clientX - canvas.offsetLeft;
      const mouseY = e.clientY - canvas.offsetTop;

      ctx.lineWidth = this.getLineWidth;
      ctx.lineCap = "round";

      ctx.strokeStyle = this.getColor;
      canvas.style.cursor = this.getCursor;

      if (this.getEraser) {
        ctx.strokeStyle = "#fff";
      }

      ctx.lineTo(mouseX, mouseY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(mouseX, mouseY);

      socket.emit("draw", {
        mouseX: e.clientX - canvas.offsetLeft,
        mouseY: e.clientY - canvas.offsetTop,
        color: this.getEraser ? "#fff" : this.getColor,
        lineWidth: this.getLineWidth,
      });
    },
  },
  mounted() {
    const canvas = document.querySelector(".canvas");
    const parentCanvas = document.querySelector(".canvas-container");
    canvas.width = parentCanvas.offsetWidth;
    canvas.height = parentCanvas.offsetHeight;

    socket.on("startDrawing", function(payload) {
      const canvas = document.querySelector(".canvas");
      const ctx = canvas.getContext("2d");

      const mouseX = payload.mouseX;
      const mouseY = payload.mouseY;

      (ctx.lineWidth = payload.lineWidth), (ctx.lineCap = "round");

      (ctx.strokeStyle = payload.color), (canvas.style.cursor = payload.cursor);

      ctx.lineTo(mouseX, mouseY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(mouseX, mouseY);
    });

    socket.on("draw", function(payload) {
      const canvas = document.querySelector(".canvas");
      const ctx = canvas.getContext("2d");

      const mouseX = payload.mouseX;
      const mouseY = payload.mouseY;

      (ctx.lineWidth = payload.lineWidth), (ctx.lineCap = "round");

      ctx.strokeStyle = payload.color;

      ctx.lineTo(mouseX, mouseY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(mouseX, mouseY);
    });

    socket.on("stopDrawing", () => {
      const canvas = document.querySelector(".canvas");
      const ctx = canvas.getContext("2d");
      ctx.beginPath();
    });

    socket.on("resetPath", () => {
      const canvas = document.querySelector(".canvas");
      const ctx = canvas.getContext("2d");
      ctx.beginPath();
    });

    socket.on("clearCanvas", () => {
      const canvas = document.querySelector(".canvas");
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
  },
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
