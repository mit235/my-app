import React from "react";
const App = () => {
    const fullname = ['mit', 'limbani'];
    const biodata = [1, ...fullname, 26, 'male','ssgm','nalanda','ahmedabad'];
    console.log(fullname);
    console.log(biodata);
    const[frs,nfrs,...rmn]=biodata;
    console.log(frs);
    console.log(rmn);
 }
export default App;