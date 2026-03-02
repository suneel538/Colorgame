const colors={1:'#ff0000',2:'0000ff',3:'3cb371',4:'ffa500'};
const randomcolor = (object) => {
    const keys = Object.keys(colors);
    if (keys.length > 0) {
        const index = Math.floor(keys.length * Math.random());
      	const key = keys[index];
        const value = colors[key];
        return {index, key, value}
    }
    return null;
};
const list=['red','green','yellow','cyne','orange'];

const property = randomcolor(colors);
if(property.key){

}
console.log(`key:   ${property.key}  `);
console.log(`value: ${property.value}`);