
function EquivalentKeyPresses(strArr) {
    var strArr = ["-B,b,c,d,d", "b,c,d,d"]

    const array1 = strArr[0].split(","); 
    const array2 = strArr[1].split(",");

    
    const firstString= [];
    const secondString = [];

    array1.forEach(char => {
        if (char === '-B') {
            firstString.pop();
        } else {
            firstString.push(char);
        }
    });
    

    array2.forEach(char => {
        if (char === '-B') {
            secondString.pop();
        } else {
            secondString.push(char);
        }
    });


   let equality = 
   firstString.length === secondString.length && firstString.every(function (element) {
    return secondString.includes(element);
   });

   console.log(equality)

      
};

EquivalentKeyPresses();




