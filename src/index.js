module.exports = function toReadable (number) {
    let str = '';
      let zero = 'zero',           one = 'one',             two =    'two',
          three = 'three',         four =  'four', 
          five = 'five',           six =    'six',
          seven = 'seven',         eight =  'eight',
          nine = 'nine',           ten =    'ten',             
          eleven = 'eleven',       twelve = 'twelve',       
          thirteen = "thirteen",   fourteen = 'fourteen',
          fifteen = 'fifteen',     sixteen ='sixteen',    
          seventeen = 'seventeen', eighteen ='eighteen',   
          nineteen = 'nineteen',   twenty = 'twenty',      
          thirty = 'thirty',       forty =   'forty',        
          fifty = 'fifty',         sixty =   'sixty',       
          seventy = 'seventy',     eighty =  'eighty',       
          ninety = 'ninety',       hundred = ' hundred';
          let temp = '';
          let array = [];
        if(number < 20){
            switch (number) {
                case 0: return zero;
                    break;
                case 1: return one;
                    break;
                case 2: return two;
                    break;
                case 3: return three;
                    break;
                case 4: return four;
                    break;
                case 5: return five;
                    break;
                case 6: return six;
                    break;
                case 7: return seven;
                    break;
                case 8: return eight;
                    break;
                case 9: return nine;
                    break;
                case 10: return ten;
                    break;
                case 11: return eleven;
                    break;
                case 12: return twelve;
                    break;
                case 13: return thirteen;
                    break;
                case 14: return fourteen;
                    break;
                case 15: return fifteen;
                    break;
                case 16: return sixteen;
                    break;
                case 17: return seventeen;
                    break; 
                case 18: return eighteen;
                    break; 
                case 19: return nineteen;
                    break;
            }
        }
    
        if (number>=20 && number < 100) {
            array = number.toString().split('');
            switch(array[0])
            {
                case '2': str += twenty;
                    break;
                case '3': str += thirty;
                    break;
                case '4': str += forty;
                    break;
                case '5': str += fifty;
                    break;
                case '6': str += sixty;
                    break;
                case '7': str += seventy;
                    break;
                case '8': str += eighty;
                    break;
                case '9': str += ninety;
                    break;
            }
            if (array[1] != 0) {
            switch(array[1])
                {
                case '1': str += ' ' + one;
                    break;
                case '2': str += ' ' + two;
                    break;
                case '3': str += ' ' + three;
                    break;
                case '4': str += ' ' + four;
                    break;
                case '5': str += ' ' + five;
                    break;
                case '6': str += ' ' + six;
                    break;
                case '7': str += ' ' + seven;
                    break;
                case '8': str += ' ' + eight;
                    break;
                case '9': str += ' ' + nine;
                    break; 
                }
            }
        }
    
        if (number >= 100)
        {
            array = number.toString().split('');
            switch(array[0])
            {
                case '1': str += one;
                    break;
                case '2': str += two;
                    break;
                case '3': str += three;
                    break;
                case '4': str += four;
                    break;
                case '5': str += five;
                    break;
                case '6': str += six;
                    break;
                case '7': str += seven;
                    break;
                case '8': str += eight;
                    break;
                case '9': str += nine;
                    break;
            }
            if(array[1] == 0 && array[2] == 0) str += hundred;
            else{
                str += hundred + ' ';
                if(array[1] == 1){
                    switch(array[2]){
                    case '0': str +=  ten;
                        break;
                    case '1': str +=  eleven;
                        break;
                    case '2': str +=  twelve;
                        break;
                    case '3': str +=  thirteen;
                        break;
                    case '4': str +=  fourteen;
                        break;
                    case '5': str +=  fifteen;
                        break;
                    case '6': str +=  sixteen;
                        break;
                    case '7': str +=  seventeen;
                        break; 
                    case '8': str +=  eighteen;
                        break; 
                    case '9': str +=  nineteen;
                        break;
                    }
                }else{
                switch(array[1])
                    {
                case '2': str += twenty;
                    break;
                case '3': str += thirty;
                    break;
                case '4': str += forty;
                    break;
                case '5': str += fifty;
                    break;
                case '6': str += sixty;
                    break;
                case '7': str += seventy;
                    break;
                case '8': str += eighty;
                    break;
                case '9': str += ninety;
                    break;
                    }
                }
                if(array[1] != 1 && array[1] != 0 && array[2] != 0) str += ' ';
                if (array[2] != 0 && array[1] != 1) {
                switch(array[2])
                    {
                case '1': str +=one;
                       break;        
                case '2': str +=two;
                    break;
                case '3': str +=three;
                    break;
                case '4': str +=four;
                    break;
                case '5': str +=five;
                    break;
                case '6': str +=six;
                    break;
                case '7': str +=seven;
                    break;
                case '8': str +=eight;
                    break;
                case '9': str +=nine;
                    break;
                    }
                }
            }
        }
        return str;
}