const firstfunction = () => {
    console.log("first")
};

const secondfunction = a => a();
secondfunction(firstfunction)