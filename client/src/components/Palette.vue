<template>
  <div class="palette">
    <div class="colors-container">
      <div class="current-color"></div>
      <div class="colors">
        <button class="color red"></button>
        <button class="color skyblue"></button>
        <button class="color white"></button>
        <button class="color lightgreen"></button>
        <button class="color lightorange"></button>
        <button class="color brown"></button>
        <button class="color purple"></button>
        <button class="color darkgreen"></button>
        <button class="color blue"></button>
        <button class="color black"></button>
        <button class="color fushia"></button>
        <button class="color cyan"></button>
        <button class="color yellow"></button>
        <button class="color grey"></button>
        <button class="color pink"></button>
        <button class="color orange"></button>
      </div>
    </div>
    <div class="helpers">
      <button class="helper">
        <span class="dot-xs"></span>
      </button>
      <button class="helper">
        <span class="dot-sm"></span>
      </button>
      <button class="helper">
        <span class="dot-md"></span>
      </button>
      <button class="helper">
        <span class="dot-lg"></span>
      </button>
      <button class="helper">
        <svg class="icon-paint-brush">
          <use xlink:href="sprite.svg#icon-paint-brush"></use>
        </svg>
      </button>
      <button class="helper">
        <svg class="icon-eraser">
          <use xlink:href="sprite.svg#icon-eraser"></use>
        </svg>
      </button>
      <button class="helper">
        <svg class="icon-trashcan">
          <use xlink:href="sprite.svg#icon-bin"></use>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
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
      background: #F78BAA;
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

      .dot-xs,
      .dot-sm,
      .dot-md,
      .dot-lg {
        background: #000;
        display: block;
        border-radius: 100rem;
      }

      .dot-xs {
        height: 0.5rem;
        width: 0.5rem;
      }

      .dot-sm {
        height: 1rem;
        width: 1rem;
      }

      .dot-md {
        height: 2rem;
        width: 2rem;
      }

      .dot-lg {
        height: 3rem;
        width: 3rem;
      }

      .icon-paint-brush {
        height:2rem;
        width:2rem;
        fill:#50B5AE;
      }

      .icon-eraser {
        height:2rem;
        width:2rem;
        fill: #F78BAA;
      }

      .icon-trashcan {
        height:2rem;
        width:2rem;
        fill: grey;
      }
    }
  }
}
</style>
