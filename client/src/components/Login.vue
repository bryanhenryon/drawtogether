<template>
  <div class="container">
    <div class="login-box">
      <h1 class="app-name">Draw Together</h1>
      <form class="form" @submit="joinRoom">
        <input
          class="pseudo"
          type="text"
          placeholder="Pseudo"
          @focus="hidePlaceholder"
          @blur="showPlaceholder"
          spellcheck="false"
        />
        <button class="submit-btn" type="submit">Rejoindre</button>
      </form>
      <div class="copyright">
        &copy; {{ copyrightYear }} Bryan Henryon —
        <a
          class="portfolio-link"
          href="https://www.bryanhenryon.fr"
          target="_blank"
          rel="noopener"
          >www.bryanhenryon.fr</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import "animate.css";

export default {
  data() {
    return {
      copyrightYear: new Date().getFullYear()
    };
  },
  methods: {
    hidePlaceholder() {
      document.querySelector(".pseudo").placeholder = "";
    },

    showPlaceholder() {
      document.querySelector(".pseudo").placeholder = "Pseudo";
    },

    joinRoom(e) {
      const validateUsername = this.validateUsername(e);

      if (!validateUsername) return;

      const username = document.querySelector(".pseudo").value.trim();
      this.$store.dispatch("joinRoom", {
        username
      });
    },

    validateUsername(e) {
      const inputVal = document.querySelector(".pseudo").value.trim();
      const error = document.querySelector(".input-error");
      const form = document.querySelector(".form");
      const submitBtn = document.querySelector(".submit-btn");

      e.preventDefault();

      if (inputVal === "") {
        if (!error) {
          const error = document.createElement("div");
          this.shakeXAnimation(error, "Veuillez indiquer une valeur");

          form.insertBefore(error, submitBtn);
        } else {
          if (
            error.classList.contains("animate__animated", "animate__shakeX")
          ) {
            return false;
          } else {
            this.shakeXAnimation(error, "Veuillez indiquer une valeur");
          }
        }
        return false;
      }

      if (inputVal.length >= 20) {
        if (!error) {
          const error = document.createElement("div");
          this.shakeXAnimation(
            error,
            "Veuillez indiquer un pseudo de moins de 20 caractères"
          );
          form.insertBefore(error, submitBtn);
        } else {
          if (
            error.classList.contains("animate__animated", "animate__shakeX")
          ) {
            return false;
          } else {
            this.shakeXAnimation(
              error,
              "Veuillez indiquer un pseudo de moins de 20 caractères"
            );
          }
        }
        return false;
      }
      return true;
    },

    shakeXAnimation(error, errorMessage) {
      error.classList.add(
        "input-error",
        "animate__animated",
        "animate__shakeX"
      );

      error.style.color = "#F7665E";
      error.style.fontSize = ".9rem";
      error.style.marginTop = ".3rem";

      setTimeout(() => {
        error.classList.remove("animate__animated", "animate__shakeX");
      }, 1500);

      error.textContent = errorMessage;
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");

.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-box {
  text-align: center;
  background: #444b57;
  padding: 2rem 3rem;

  .app-name {
    margin-bottom: 3rem;
    font-family: "Permanent Marker", cursive;
    font-weight: normal;
  }

  .pseudo {
    display: block;
    margin: 0 auto;
    background: none;
    border: none;
    outline: none;
    border-bottom: 1px solid #fff;
    color: #fff;
    text-align: center;
    padding: 5px;
    font-size: 1rem;
    font-family: "Quicksand", sans-serif;

    &::placeholder {
      color: rgba($color: #fff, $alpha: 0.8);
      font-size: 1rem;
      font-family: "Quicksand", sans-serif;
    }
  }

  .submit-btn {
    background: #5c6c7a;
    padding: 1rem 0;
    width: 100%;
    color: #fff;
    font-size: 1rem;
    border-radius: 5px;
    margin: 2rem 0;
  }

  .copyright {
    font-size: 0.9rem;

    .portfolio-link {
      color: #fff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
