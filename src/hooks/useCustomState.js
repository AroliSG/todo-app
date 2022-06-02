import React, { useState, Component } from "react";

const useCustomState = (prop) => {
  const [store, setStoreData] = useState (prop);
  let tempStore = [...store]; 
 
    // save new data into state
  const updateState = (Id, option, dataTobeStoraged) => {
    if (tempStore) {
      let index = tempStore.findIndex (item => item.title === Id);    
      if (index === -1) return false;

      tempStore [index][option] = dataTobeStoraged;
      setStoreData (tempStore);
    }
    return tempStore;
  };

    // create new state
  const newState = (Id, option, dataTobeStoraged) => {
    if (tempStore) { 
        // if data already exists let's return true. for duplication purpose
      if (tempStore.findIndex (item => item.title === Id) !== -1) return true;

      tempStore.push ({ title: Id, [option]: dataTobeStoraged });
      setStoreData (tempStore);
    }
 
    return tempStore
  }

   // deleting state
   const deleteState = (Id) => {
    if (tempStore) {
      let index = tempStore.findIndex (item => item.title === Id);           
      if (index !== -1) return false;

      tempStore.splice (0, index);
      setStoreData (tempStore);
    }

    return tempStore
  }

  const getStates = (Id) => {
    if (Id) return tempStore [Id];
    else return tempStore;
  }

  return {updateState, newState, deleteState, getStates};
}

export default useCustomState;