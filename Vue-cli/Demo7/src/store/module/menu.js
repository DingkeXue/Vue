const state = {
  wineItems: {}
};

const getters = {
  getWineItems: (state) => state.wineItems
};

const mutations = {
  setWineItems: (state, data) => {
    state.wineItems = data;
  },
  // 从 wineItems 中删除对象
  removeWineItems: (state, id) => {
    state.wineItems.forEach((item, index) => {
      if (item.id === id) {
        state.wineItems.splice(index, 1);
      }
    })
  },
// 将新增加的 酒类 添加到wineItems 中
  pushToWineItems: (state, data) => {
  state.wineItems.push(data);
}
};

const actions = {

};

export default {
  state,
  getters,
  mutations,
  actions
}
