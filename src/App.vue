<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Helvetica Neue For Number, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, PingFang SC, Hiragino Sans GB, Microsoft YaHei,
    Helvetica Neue, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.input {
  width: 25%;
  height: 35px;
  padding: 0 10px;
  box-sizing: border-box;
  color: var(--fontColor);
  border: 1px solid var(--theme);
  border-radius: 5px;
  display: inline-block;
  font-size: 13px;
  outline: none;
  transition: border-color 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: box-shadow 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:focus {
    border: 1px solid var(--deepTheme);
    box-shadow: 3px 5px 5px rgba($color: #000000, $alpha: 0.09);
  }
}
</style>
