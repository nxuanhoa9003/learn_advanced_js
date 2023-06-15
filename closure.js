// ứng dụng của closure về sử dụng localStorage

function createStorage(key) {
  // store sẽ ở phạm vi private
  const store = JSON.parse(localStorage.getItem(key)) ?? {};

  // save sẽ ở phạm vi private
  const save = () => {
    localStorage.setItem(key, JSON.stringify(store));
  };
  //   storage ở phạm vi public
  const storage = {
    get(key) {
      return store[key];
    },
    set(key, value) {
      store[key] = value;
      save();
    },
    remove(key) {
      delete store[key];
      save();
    },
  };

  return storage;
}

// example:
// const settingsStorage = createStorage("ZingMp333");
// console.log(settingsStorage.get("isPlaying"));

// settingsStorage.set("isPlaying", 234);
// settingsStorage.set("isRandom", false);
