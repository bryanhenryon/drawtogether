<template>
  <div class="palette">
    <div class="colors-container">
      <div class="current-color" :style="{ background: getColor }"></div>
      <div class="colors">
        <button
          class="color red"
          @click="
            changeColor({
              color: '#FF6464',
              cursor: {
                sm: `url('/img/dots/dot-sm/dot-sm-red.png'), pointer`,
                md: `url('/img/dots/dot-md/dot-md-red.png'), pointer`,
                lg: `url('/img/dots/dot-lg/dot-lg-red.png'), pointer`,
                xl: `url('/img/dots/dot-xl/dot-xl-red.png'), pointer`,
              },
            })
          "
        ></button>
        <button
          class="color skyblue"
          @click="
            changeColor({
              color: '#6ED3FF',
              cursor: {
                sm: `url('/img/dots/dot-sm/dot-sm-skyblue.png'), pointer`,
                md: `url('/img/dots/dot-md/dot-md-skyblue.png'), pointer`,
                lg: `url('/img/dots/dot-lg/dot-lg-skyblue.png'), pointer`,
                xl: `url('/img/dots/dot-xl/dot-xl-skyblue.png'), pointer`,
              },
            })
          "
        ></button>
        <button
          class="color white"
          @click="
            changeColor({
              color: '#fff',
              cursor: {
                sm: `url('/img/dots/dot-sm/dot-sm-white.png'), pointer`,
                md: `url('/img/dots/dot-md/dot-md-white.png'), pointer`,
                lg: `url('/img/dots/dot-lg/dot-lg-white.png'), pointer`,
                xl: `url('/img/dots/dot-xl/dot-xl-white.png'), pointer`,
              },
            })
          "
        ></button>
        <button
          class="color lightgreen"
          @click="
            changeColor({
              color: '#70DE8A',
              cursor: {
                sm: `url('/img/dots/dot-sm/dot-sm-lightgreen.png'), pointer`,
                md: `url('/img/dots/dot-md/dot-md-lightgreen.png'), pointer`,
                lg: `url('/img/dots/dot-lg/dot-lg-lightgreen.png'), pointer`,
                xl: `url('/img/dots/dot-xl/dot-xl-lightgreen.png'), pointer`,
              },
            })
          "
        ></button>
        <button
          class="color lightorange"
          @click="
            changeColor({
              color: '#FFD675',
              cursor: {
                sm: `url('/img/dots/dot-sm/dot-sm-lightorange.png'), pointer`,
                md: `url('/img/dots/dot-md/dot-md-lightorange.png'), pointer`,
                lg: `url('/img/dots/dot-lg/dot-lg-lightorange.png'), pointer`,
                xl: `url('/img/dots/dot-xl/dot-xl-lightorange.png'), pointer`,
              },
            })
          "
        ></button>
        <button
          class="color brown"
          @click="
            changeColor({
              color: '#875E5E',
              cursor: {
                sm: `url('/img/dots/dot-sm/dot-sm-brown.png'), pointer`,
                md: `url('/img/dots/dot-md/dot-md-brown.png'), pointer`,
                lg: `url('/img/dots/dot-lg/dot-lg-brown.png'), pointer`,
                xl: `url('/img/dots/dot-xl/dot-xl-brown.png'), pointer`,
              },
            })
          "
        ></button>
        <button
          class="color purple"
          @click="
            changeColor({
              color: '#AE56E8',
              cursor: {
                sm: `url('/img/dots/dot-sm/dot-sm-purple.png'), pointer`,
                md: `url('/img/dots/dot-md/dot-md-purple.png'), pointer`,
                lg: `url('/img/dots/dot-lg/dot-lg-purple.png'), pointer`,
                xl: `url('/img/dots/dot-xl/dot-xl-purple.png'), pointer`,
              },
            })
          "
        ></button>
        <button
          class="color darkgreen"
          @click="
            changeColor({
              color: '#5E8775',
              cursor: {
                sm: `url('/img/dots/dot-sm/dot-sm-darkgreen.png'), pointer`,
                md: `url('/img/dots/dot-md/dot-md-darkgreen.png'), pointer`,
                lg: `url('/img/dots/dot-lg/dot-lg-darkgreen.png'), pointer`,
                xl: `url('/img/dots/dot-xl/dot-xl-darkgreen.png'), pointer`,
              },
            })
          "
        ></button>
        <button
          class="color blue"
          @click="
            changeColor({
              color: '#6D89E6',
              cursor: {
                sm: `url('/img/dots/dot-sm/dot-sm-blue.png'), pointer`,
                md: `url('/img/dots/dot-md/dot-md-blue.png'), pointer`,
                lg: `url('/img/dots/dot-lg/dot-lg-blue.png'), pointer`,
                xl: `url('/img/dots/dot-xl/dot-xl-blue.png'), pointer`,
              },
            })
          "
        ></button>
        <button
          class="color black"
          @click="
            changeColor({
              color: '#000',
              cursor: {
                sm: `url('/img/dots/dot-sm/dot-sm-black.png'), pointer`,
                md: `url('/img/dots/dot-md/dot-md-black.png'), pointer`,
                lg: `url('/img/dots/dot-lg/dot-lg-black.png'), pointer`,
                xl: `url('/img/dots/dot-xl/dot-xl-black.png'), pointer`,
              },
            })
          "
        ></button>
        <button
          class="color fushia"
          @click="
            changeColor({
              color: '#F674FF',
              cursor: {
                sm: `url('/img/dots/dot-sm/dot-sm-fushia.png'), pointer`,
                md: `url('/img/dots/dot-md/dot-md-fushia.png'), pointer`,
                lg: `url('/img/dots/dot-lg/dot-lg-fushia.png'), pointer`,
                xl: `url('/img/dots/dot-xl/dot-xl-fushia.png'), pointer`,
              },
            })
          "
        ></button>
        <button
          class="color cyan"
          @click="
            changeColor({
              color: '#00FFEE',
              cursor: {
                sm: `url('/img/dots/dot-sm/dot-sm-cyan.png'), pointer`,
                md: `url('/img/dots/dot-md/dot-md-cyan.png'), pointer`,
                lg: `url('/img/dots/dot-lg/dot-lg-cyan.png'), pointer`,
                xl: `url('/img/dots/dot-xl/dot-xl-cyan.png'), pointer`,
              },
            })
          "
        ></button>
        <button
          class="color yellow"
          @click="
            changeColor({
              color: '#FFFF00',
              cursor: {
                sm: `url('/img/dots/dot-sm/dot-sm-yellow.png'), pointer`,
                md: `url('/img/dots/dot-md/dot-md-yellow.png'), pointer`,
                lg: `url('/img/dots/dot-lg/dot-lg-yellow.png'), pointer`,
                xl: `url('/img/dots/dot-xl/dot-xl-yellow.png'), pointer`,
              },
            })
          "
        ></button>
        <button
          class="color grey"
          @click="
            changeColor({
              color: '#CBCBCB',
              cursor: {
                sm: `url('/img/dots/dot-sm/dot-sm-grey.png'), pointer`,
                md: `url('/img/dots/dot-md/dot-md-grey.png'), pointer`,
                lg: `url('/img/dots/dot-lg/dot-lg-grey.png'), pointer`,
                xl: `url('/img/dots/dot-xl/dot-xl-grey.png'), pointer`,
              },
            })
          "
        ></button>
        <button
          class="color pink"
          @click="
            changeColor({
              color: '#F0A6B4',
              cursor: {
                sm: `url('/img/dots/dot-sm/dot-sm-pink.png'), pointer`,
                md: `url('/img/dots/dot-md/dot-md-pink.png'), pointer`,
                lg: `url('/img/dots/dot-lg/dot-lg-pink.png'), pointer`,
                xl: `url('/img/dots/dot-xl/dot-xl-pink.png'), pointer`,
              },
            })
          "
        ></button>
        <button
          class="color orange"
          @click="
            changeColor({
              color: '#FFA500',
              cursor: {
                sm: `url('/img/dots/dot-sm/dot-sm-orange.png'), pointer`,
                md: `url('/img/dots/dot-md/dot-md-orange.png'), pointer`,
                lg: `url('/img/dots/dot-lg/dot-lg-orange.png'), pointer`,
                xl: `url('/img/dots/dot-xl/dot-xl-orange.png'), pointer`,
              },
            })
          "
        ></button>
      </div>
    </div>
    <div class="helpers">
      <button class="helper" @click="changeLineWidth(8)">
        <span class="dot-sm"></span>
      </button>
      <button class="helper" @click="changeLineWidth(16)">
        <span class="dot-md"></span>
      </button>
      <button class="helper" @click="changeLineWidth(32)">
        <span class="dot-lg"></span>
      </button>
      <button class="helper" @click="changeLineWidth(48)">
        <span class="dot-xl"></span>
      </button>
      <button class="helper" @click="paint">
        <svg class="icon-paint-brush">
          <use xlink:href="sprite.svg#icon-paint-brush"></use>
        </svg>
      </button>
      <button
        class="helper"
        @click="
          erase({
            cursor: {
              sm: `url('/img/dots/dot-sm/dot-sm-white.png'), pointer`,
              md: `url('/img/dots/dot-md/dot-md-white.png'), pointer`,
              lg: `url('/img/dots/dot-lg/dot-lg-white.png'), pointer`,
              xl: `url('/img/dots/dot-xl/dot-xl-white.png'), pointer`,
            },
          })
        "
      >
        <svg class="icon-eraser">
          <use xlink:href="sprite.svg#icon-eraser"></use>
        </svg>
      </button>
      <button class="helper" @click="clearCanvas">
        <svg class="icon-trashcan">
          <use xlink:href="sprite.svg#icon-bin"></use>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import io from "socket.io-client";

const socket = io();

export default {
  computed: {
    ...mapGetters(["getColor", "getEraser"]),
  },
  methods: {
    changeColor(payload) {
      this.$store.dispatch("changeColor", payload);
    },
    changeLineWidth(payload) {
      this.$store.dispatch("changeLineWidth", payload);
    },
    paint() {
      this.$store.dispatch("paint");
    },
    erase(payload) {
      this.$store.dispatch("erase", payload);
    },
    clearCanvas() {
      const canvas = document.querySelector(".canvas");
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      socket.emit("clearCanvas");
    },
  },
};
</script>

<style lang="scss" scoped>
.palette {
  background: #444b57;
  box-shadow: 0 3px 30px rgba($color: #000000, $alpha: 0.5);
  flex: 1;
  margin-top: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 3rem;

  .colors-container {
    display: flex;
    align-items: center;
  }
  .current-color {
    height: 5.5rem;
    width: 5.5rem;
    background: #000;
    border-radius: 100rem;
    margin-right: 2rem;
    box-shadow: 0 0 30px rgba($color: #000, $alpha: 0.5);
  }

  .colors {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 600px;

    .color {
      height: 4rem;
      width: 4rem;
      background: #fff;
      border-radius: 100rem;
      margin: 0.3rem;
      box-shadow: 0 0 30px rgba($color: #000, $alpha: 0.5);
    }

    .red {
      background: #ff6464;
    }
    .skyblue {
      background: #6ed3ff;
    }
    .white {
      background: #ffffff;
    }
    .lightgreen {
      background: #70de8a;
    }
    .lightorange {
      background: #ffd675;
    }
    .brown {
      background: #875e5e;
    }
    .purple {
      background: #ae56e8;
    }
    .darkgreen {
      background: #5e8775;
    }
    .blue {
      background: #6d89e6;
    }
    .black {
      background: #090000;
    }
    .fushia {
      background: #f674ff;
    }
    .cyan {
      background: #00ffee;
    }
    .yellow {
      background: #ffff00;
    }
    .grey {
      background: #cbcbcb;
    }
    .pink {
      background: #f78baa;
    }
    .orange {
      background: #ffa500;
    }
  }

  .helpers {
    display: flex;
    flex-wrap: wrap;
    width: 300px;
    justify-content: center;

    .helper {
      height: 4rem;
      width: 4rem;
      background: #fff;
      border-radius: 100rem;
      margin: 0.3rem;
      box-shadow: 0 0 30px rgba($color: #000, $alpha: 0.5);
      display: flex;
      align-items: center;
      justify-content: center;

      .dot-sm,
      .dot-md,
      .dot-lg,
      .dot-xl {
        background: #000;
        display: block;
        border-radius: 100rem;
      }

      .dot-sm {
        height: 0.5rem;
        width: 0.5rem;
      }

      .dot-md {
        height: 1rem;
        width: 1rem;
      }

      .dot-lg {
        height: 2rem;
        width: 2rem;
      }

      .dot-xl {
        height: 3rem;
        width: 3rem;
      }

      .icon-paint-brush {
        height: 2rem;
        width: 2rem;
        fill: #50b5ae;
      }

      .icon-eraser {
        height: 2rem;
        width: 2rem;
        fill: #f78baa;
      }

      .icon-trashcan {
        height: 2rem;
        width: 2rem;
        fill: grey;
      }
    }
  }
}
</style>
