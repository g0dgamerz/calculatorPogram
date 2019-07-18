var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("enter add, minus, multiply \n to do operation \n you  input should be like \n aaddb instead of a+b \n aminusb instead a-b \n amultiplyb instead a*b:", function(str) {
    var output = [];
    var json = str.split(' ');
    json.forEach(function (item) {
        output.push(item.replace(/\'/g, '').split(/(\d+)/).filter(Boolean));

        if(output[0][1]=="add")
        {
            var x= parseInt(output[0][0]);
            console.log(x)
            var y = parseInt(output[0][2]);
            console.log(y)
            z=x+y;
            console.log(`the sum is ${output[0][0]} + ${output[0][2]} = ` +  z);
            console.log('thanks for using our program we are exploring more - Jidesh and romak');
        }
        else if(output[0][1]=="minus")
        {
            var x= parseInt(output[0][0]);
            var y = parseInt(output[0][2]);
            z=x-y;
            console.log(`the difference is ${output[0][0]} - ${output[0][2]} = ` +  z);    
            console.log('thanks for using our program we are exploring more - Jidesh and romak');

            }
        else if(output[0][1]=="multiply")
        {
            var x= parseInt(output[0][0]);
            var y = parseInt(output[0][2]);
            z=x*y;
            console.log(z);
            console.log(`the sum is ${output[0][0]} * ${output[0][2]} = ` +  z);  
            console.log('thanks for using our program we are exploring more - Jidesh and romak');
        }
        else{
            console.log('enter the add minus or multiply keyword only okey');
        }

        
    });

  rl.close();
});