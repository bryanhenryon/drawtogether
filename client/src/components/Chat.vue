<template>
  <div class="chat">
    <div class="menu">
      <svg class="icon-chat">
        <use xlink:href="sprite.svg#icon-chat"></use>
      </svg>
      <div class="icon-group-container">
        <svg class="icon-group">
          <use xlink:href="sprite.svg#icon-group"></use>
        </svg>
        <span class="visitors-counter">3</span>
      </div>
      <svg class="icon-sun">
        <use xlink:href="sprite.svg#icon-sun"></use>
      </svg>
    </div>
    <div class="messages">
      <div class="message">
        <span class="author">Bryan</span>
        <span> :</span>
        <p class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, rerum
          totam? Neque architecto iste, impedit cupiditate voluptatem inventore
          est reprehenderit odit dignissimos. Natus repellendus tempore
          excepturi ab asperiores provident quaerat!
        </p>
      </div>
      <div class="message">
        <span class="author">Bryan</span>
        <span> :</span>
        <p class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, rerum
          totam? Neque architecto iste, impedit cupiditate voluptatem inventore
          est reprehenderit odit dignissimos. Natus repellendus tempore
          excepturi ab asperiores provident quaerat!
        </p>
      </div>
      <div class="message">
        <span class="author">Bryan</span>
        <span> :</span>
        <p class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, rerum
          totam? Neque architecto iste, impedit cupiditate voluptatem inventore
          est reprehenderit odit dignissimos. Natus repellendus tempore
          excepturi ab asperiores provident quaerat!
        </p>
      </div>
      <div class="message">
        <span class="author">Bryan</span>
        <span> :</span>
        <p class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, rerum
          totam? Neque architecto iste, impedit cupiditate voluptatem inventore
          est reprehenderit odit dignissimos. Natus repellendus tempore
          excepturi ab asperiores provident quaerat!
        </p>
      </div>
      <div class="message">
        <span class="author">Bryan</span>
        <span> :</span>
        <p class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, rerum
          totam? Neque architecto iste, impedit cupiditate voluptatem inventore
          est reprehenderit odit dignissimos. Natus repellendus tempore
          excepturi ab asperiores provident quaerat!
        </p>
      </div>

      <div class="message">
        <span class="author">Bryan</span>
        <span> :</span>
        <p class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, rerum
          totam? Neque architecto iste, impedit cupiditate voluptatem inventore
          est reprehenderit odit dignissimos. Natus repellendus tempore
          excepturi ab asperiores provident quaerat!
        </p>
      </div>

      <div class="message">
        <span class="author">Bryan</span>
        <span> :</span>
        <p class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, rerum
          totam? Neque architecto iste, impedit cupiditate voluptatem inventore
          est reprehenderit odit dignissimos. Natus repellendus tempore
          excepturi ab asperiores provident quaerat!
        </p>
      </div>

      <div class="message">
        <span class="author">Bryan</span>
        <span> :</span>
        <p class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, rerum
          totam? Neque architecto iste, impedit cupiditate voluptatem inventore
          est reprehenderit odit dignissimos. Natus repellendus tempore
          excepturi ab asperiores provident quaerat!
        </p>
      </div>

      <div class="message">
        <span class="author">Bryan</span>
        <span> :</span>
        <p class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, rerum
          totam? Neque architecto iste, impedit cupiditate voluptatem inventore
          est reprehenderit odit dignissimos. Natus repellendus tempore
          excepturi ab asperiores provident quaerat!
        </p>
      </div>

      <div class="message">
        <span class="author">Bryan</span>
        <span> :</span>
        <p class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, rerum
          totam? Neque architecto iste, impedit cupiditate voluptatem inventore
          est reprehenderit odit dignissimos. Natus repellendus tempore
          excepturi ab asperiores provident quaerat!
        </p>
      </div>

      <div class="message">
        <span class="author">Bryan</span>
        <span> :</span>
        <p class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, rerum
          totam? Neque architecto iste, impedit cupiditate voluptatem inventore
          est reprehenderit odit dignissimos. Natus repellendus tempore
          excepturi ab asperiores provident quaerat!
        </p>
      </div>

      <div class="message">
        <span class="author">Bryan</span>
        <span> :</span>
        <p class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, rerum
          totam? Neque architecto iste, impedit cupiditate voluptatem inventore
          est reprehenderit odit dignissimos. Natus repellendus tempore
          excepturi ab asperiores provident quaerat!
        </p>
      </div>
    </div>
    <form class="form">
      <input type="text" placeholder="Tapez votre message" />
    </form>
  </div>
</template>

<script>
export default {};
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

  .menu {
    height: 5rem;
    background: #5d626b;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .icon-group-container {
      position: relative;
      cursor: pointer;

      .visitors-counter {
        position: relative;
        left: 4px;
        top: -2px;
        font-weight: bold;
        font-size: 1.2rem;
      }
    }

    .icon-chat,
    .icon-group,
    .icon-sun {
      fill: #fff;
      height: 2.5rem;
      width: 2.5rem;
    }

    .icon-chat,
    .icon-sun {
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

  .message {
    padding: 0.5rem 1rem;

    .author {
      color: #ff6464;
      font-weight: 500;
    }

    .content {
      display: inline;
      word-break: break-all;
    }
  }

  .form {
    flex: 1;
    margin: 0.5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;

    input[type="text"] {
      padding: 0.8rem 1rem;
      border-radius: 100rem;
      outline: none;
      border: none;
      margin: 0 1rem;
      width: 100%;
    }

    input[type="text"]::placeholder {
      font-family: "Quicksand", sans-serif;
      font-size: 0.9rem;
    }
  }
}
</style>
