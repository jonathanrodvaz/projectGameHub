export const typePokemon = (data) => {
    //?Manera más sencilla, a continuación: //*css*//
    const nameTypeReapet = [];
    data.forEach((element, index)=>{
        element.type.forEach((singleType, index)=>{
           !nameTypeReapet.includes(singleType.type.name) && nameTypeReapet.push(singleType.type.name);
        });
    });    
    
    
    //!Manera alternativa, más compleja, con Set(); lo cual no se utiliza mucho en Javascript porque es más propio de Java. Abajo:///
    // const nameTypeReapet = new Set();

    // data.forEach((element, index) => {
    //     element.type.forEach((singleType, index)=>{
    //         nameTypeReapet.add(singleType.type.name);
    //     })

    // });

return nameTypeReapet;

}