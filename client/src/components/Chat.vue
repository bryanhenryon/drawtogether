<template>
  <div class="chat">
    <div class="menu">
      <svg class="icon-chat" @click="tab = 'chat'">
        <use xlink:href="sprite.svg#icon-chat"></use>
      </svg>
      <div class="icon-group-container" @click="tab = 'connectedUsers'">
        <svg class="icon-group">
          <use xlink:href="sprite.svg#icon-group"></use>
        </svg>
        <span class="visitors-counter">{{ connectedUsersCounter }}</span>
      </div>
    </div>
    <div class="messages" v-show="tab === 'chat'"></div>
    <form class="form" @submit="submit" v-show="tab === 'chat'">
      <input
        class="input"
        type="text"
        placeholder="Tapez votre message"
        spellcheck="false"
      />
      <button class="sendMsgBtn">
        <svg class="icon-arrow-right">
          <use xlink:href="sprite.svg#icon-arrow-right"></use>
        </svg>
      </button>
    </form>
    <ul class="connected-users" v-show="tab === 'connectedUsers'">
      <li class="user" v-for="(user, index) of connectedUsers" :key="index">
        {{ user }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      connectedUsersCounter: null,
      tab: "chat",
      connectedUsers: []
    };
  },
  computed: {
    ...mapGetters(["getUsername", "getJoinedRoom"])
  },
  methods: {
    submit(e) {
      const input = document.querySelector(".input");
      e.preventDefault();

      if (input.value.trim() === "") {
        input.value = "";
        return;
      }

      this.$socket.emit("newMsg", {
        author: this.getUsername,
        body: input.value
      });

      input.value = "";
    }
  },
  updated() {
    const messages = document.querySelector(".messages");
    messages.scrollTo(0, messages.scrollHeight);
  },
  created() {
    this.$socket.emit("userConnected", this.getUsername);

    this.$socket.emit("startCounter");

    this.$socket.on("userConnected", payload => {
      const messages = document.querySelector(".messages");

      messages.innerHTML += `<div class="notification" style="padding: 0.5rem 1rem;">
            ${payload.username} s'est connecté(e)
        </div>`;

      this.connectedUsers = payload.connectedUsers;
    });

    this.$socket.on("connectedUsersCounter", payload => {
      this.connectedUsersCounter = payload;
    });

    this.$socket.on("newMsg", payload => {
      const messages = document.querySelector(".messages");

      messages.innerHTML += `<div class="message" style="padding: 0.5rem 1rem;">
        <span class="author" style="color: ${payload.color}; font-weight: 500;">
        ${payload.author}:
        </span>
        <p class="content" style="display: inline; word-break: break-all;">
          ${payload.body}
        </p>
      </div>`;
    });

    this.$socket.on("userDisconnected", payload => {
      const messages = document.querySelector(".messages");

      messages.innerHTML += `<div class="notification" style="padding: 0.5rem 1rem;">
            ${payload.username} s'est déconnecté(e)
        </div>`;

      this.connectedUsers = payload.connectedUsers;
    });
  }
};
</script>

<style lang="scss" scoped>
.chat {
  background: #444b57;
  box-shadow: 0 3px 30px rgba($color: #000000, $alpha: 0.5);
  height: 100%;
  flex: 1;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  min-width: 380px;

  .menu {
    height: 5rem;
    background: #5d626b;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .icon-group-container {
      position: relative;
      cursor: pointer;
      padding: 10px;

      .visitors-counter {
        position: relative;
        left: 4px;
        top: -2px;
        font-weight: bold;
        font-size: 1.2rem;
      }
    }

    .icon-chat,
    .icon-group {
      fill: #fff;
      height: 2.5rem;
      width: 2.5rem;
    }

    .icon-chat {
      cursor: pointer;
    }
  }

  .messages {
    overflow-y: auto;
    flex: 15;
    margin: 1rem 0;

    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 0.5rem;
      background-color: #5d626b;
    }
  }

  .form {
    flex: 1;
    margin: 0.5rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      .icon-arrow-right {
        transform: translateX(0.3rem);
      }
    }

    input[type="text"] {
      padding: 0 0 0 1rem;
      outline: none;
      border: none;
      width: 100%;
      font-family: "Quicksand", sans-serif;
      border-radius: 100rem 0 0 100rem;
      height: 100%;
      font-size: 0.9rem;
    }

    input[type="text"]::placeholder {
      font-size: 0.9rem;
    }

    .sendMsgBtn {
      padding: 0.8rem;
      padding-right: 1.5rem;
      border-radius: 0 100rem 100rem 0;
      background: #fff;
      height: 100%;

      .icon-arrow-right {
        height: 1.2rem;
        width: 1.2rem;
        fill: #384047;
        transition: 0.2s;
      }
    }
  }
}

.connected-users {
  list-style: none;
  margin: 0 auto;
  text-align: center;
  margin: 1rem 0;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.5rem;
    background-color: #5d626b;
  }

  .user {
    font-size: 1.3rem;
    margin: 1rem 0;
  }
}
</style>
