const getStoreApp = () => {
  const storeAppSTR = localStorage.getItem("installList");

  if (storeAppSTR) {
    const storeAppData = JSON.parse(storeAppSTR);
    return storeAppData;
  } else {
    return [];
  }
};

const addToStoreDB = (id) => {
  const storeAppData = getStoreApp();
  if (storeAppData.includes(id)) {
    return false;
  } else {
    storeAppData.push(id);

    const data = JSON.stringify(storeAppData);
    localStorage.setItem("installList", data);
    return true;
  }
};

// remove

const removeStoreApp = (id) => {
  const appData = getStoreApp();
  const data = appData.filter((appId) => appId !== id);

  const removeData = JSON.stringify(data);
  localStorage.setItem("installList", removeData);
};

export { addToStoreDB, getStoreApp, removeStoreApp };
