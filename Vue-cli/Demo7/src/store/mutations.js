// 改变属性的状态
export const setWineItems =(state, data) => {
  state.wineItems = data;
};
// 从 wineItems 中删除对象
export const removeWineItems = (state, id) => {
  state.wineItems.forEach((item, index) => {
    if (item.id === id) {
      state.wineItems.splice(index, 1);
    }
  })
};
// 将新增加的 酒类 添加到wineItems 中
export const pushToWineItems = (state, data) => {
  state.wineItems.push(data);
};
// 用户登录显示
export const userStatus = (state, user) => {
  if (user) {
    state.currentUser = user;
    state.isLogin = true;
  } else {
    state.currentUser = null;
    state.isLogin = false;
  }
};
