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
    alert("already Exist");
  } else {
    storeAppData.push(id);
    console.log(storeAppData);

    const data=JSON.stringify(storeAppData)
    localStorage.setItem('installList',data)
  }
};


// remove 

export { addToStoreDB,getStoreApp };
