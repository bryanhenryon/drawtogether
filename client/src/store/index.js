import { createStore } from "vuex";

export default createStore({
  state: {
    username: null,
    joinedRoom: false,
    color: "#000",
    lineWidth: 8,
    cursor: "url('/img/dots/dot-sm/dot-sm-black.png'), pointer",
    lastCursor: null,
    paintbrush: true,
    eraser: false
  },
  getters: {
    getJoinedRoom: state => state.joinedRoom,
    getUsername: state => state.username,
    getColor: state => state.color,
    getLineWidth: state => state.lineWidth,
    getCursor: state => state.cursor,
    getPaintbrush: state => state.paintbrush,
    getEraser: state => state.eraser
  },
  mutations: {
    changeColor: (state, payload) => {
      state.color = payload.color;
      if (!state.eraser) {
        switch (state.lineWidth) {
          case 8:
            state.cursor = payload.cursor.sm;
            break;
          case 16:
            state.cursor = payload.cursor.md;
            break;
          case 32:
            state.cursor = payload.cursor.lg;
            break;
          case 48:
            state.cursor = payload.cursor.xl;
            break;
        }
      } else {
        switch (state.lineWidth) {
          case 8:
            state.lastCursor = payload.cursor.sm;
            break;
          case 16:
            state.lastCursor = payload.cursor.md;
            break;
          case 32:
            state.lastCursor = payload.cursor.lg;
            break;
          case 48:
            state.lastCursor = payload.cursor.xl;
            break;
        }
      }
    },
    changeLineWidth: (state, payload) => {
      state.lineWidth = payload;

      switch (state.lineWidth) {
        case 8:
          state.cursor = state.cursor
            .replaceAll("sm", "sm")
            .replaceAll("md", "sm")
            .replaceAll("lg", "sm")
            .replaceAll("xl", "sm");
          break;
        case 16:
          state.cursor = state.cursor
            .replaceAll("sm", "md")
            .replaceAll("md", "md")
            .replaceAll("lg", "md")
            .replaceAll("xl", "md");
          break;
        case 32:
          state.cursor = state.cursor
            .replaceAll("sm", "lg")
            .replaceAll("md", "lg")
            .replaceAll("lg", "lg")
            .replaceAll("xl", "lg");
          break;
        case 48:
          state.cursor = state.cursor
            .replaceAll("sm", "xl")
            .replaceAll("md", "xl")
            .replaceAll("lg", "xl")
            .replaceAll("xl", "xl");
          break;
      }
    },
    erase: (state, payload) => {
      state.paintbrush = false;
      state.eraser = true;

      state.lastCursor = state.cursor;
      switch (state.lineWidth) {
        case 8:
          state.cursor = payload.cursor.sm;
          break;
        case 16:
          state.cursor = payload.cursor.md;
          break;
        case 32:
          state.cursor = payload.cursor.lg;
          break;
        case 48:
          state.cursor = payload.cursor.xl;
          break;
      }
    },
    paint: state => {
      state.paintbrush = true;
      state.eraser = false;
      state.lastCursor !== "#fff"
        ? (state.cursor = state.lastCursor)
        : state.cursor;
    },
    joinRoom: (state, payload) => {
      state.joinedRoom = true;
      state.username = payload.username;
    }
  },
  actions: {
    changeColor: ({ commit }, payload) => commit("changeColor", payload),
    changeLineWidth: ({ commit }, payload) =>
      commit("changeLineWidth", payload),
    erase: ({ commit }, payload) => commit("erase", payload),
    paint: ({ commit }) => commit("paint"),
    joinRoom: ({ commit }, payload) => commit("joinRoom", payload)
  },
  modules: {}
});
