var input = document.getElementById('input');
var result = document.getElementById('result');
var inputUnit = document.getElementById('inputUnit');
var resultUnit = document.getElementById('resultUnit');

input.addEventListener = ("keyup", StartConvert)
inputUnit.addEventListener = ("change", StartConvert)
resultUnit.addEventListener = ("change", StartConvert)



function StartConvert() {
    
    if(inputUnit.value === "Meter" && resultUnit.value === "Kilometer"){
        result.value = input.value / 1000;
        
    }  else  if(inputUnit.value === "Meter" && resultUnit.value === "Centimeter"){
        result.value = input.value * 100;

    }  else  if(inputUnit.value === "Meter" && resultUnit.value === "Meter"){
        result.value = input.value;

    }  else  if(inputUnit.value === "Meter" && resultUnit.value === "Millimeter"){
        result.value = input.value / 1000;

    }  else  if(inputUnit.value === "Meter" && resultUnit.value === "Yard"){
        result.value = input.value * 1.094;
        
    }  else  if(inputUnit.value === "Meter" && resultUnit.value === "Foot"){
        result.value = input.value * 3.281;

    }  else  if(inputUnit.value === "Meter" && resultUnit.value === "Inch"){
        result.value = input.value * 39.37;

    }  else  if(inputUnit.value === "Meter" && resultUnit.value === "Mile"){
        result.value = input.value /1609;

}


    if(inputUnit.value === "Kilomter" && resultUnit.value === "Meter"){
        result.value = input.value * 1000;
        
    }  else  if(inputUnit.value === "Kilometer" && resultUnit.value === "Kilometer"){
        result.value = input.value;

    }  else  if(inputUnit.value === "Kilometer" && resultUnit.value === "Centimeter"){
        result.value = input.value * 100000;
        
    }  else  if(inputUnit.value === "Kilometer" && resultUnit.value === "Millimeter"){
        result.value = input.value * 1e+6;

    }  else  if(inputUnit.value === "Kilometer" && resultUnit.value === "Yard"){
        result.value = input.value * 1094;

    }  else  if(inputUnit.value === "Kilometer" && resultUnit.value === "Foot"){
        result.value = input.value * 3280.84 ;

    }  else  if(inputUnit.value === "Kilometer" && resultUnit.value === "Inch"){
        result.value = input.value * 39370.1;

    }  else  if(inputUnit.value === "Kilometer" && resultUnit.value === "Mile"){
        result.value = input.value / 1.609
        ;
     }

    if(inputUnit.value === "Centimeter" && resultUnit.value === "Meter"){
        result.value = input.value /100 ;

    }  else  if(inputUnit.value === "Centimeter" && resultUnit.value === "Kilometer"){
        result.value = input.value / 100000;

    }  else  if(inputUnit.value === "Centimeter" && resultUnit.value === "Centimeter"){
        result.value = input.value;

    }  else  if(inputUnit.value === "Centimeter" && resultUnit.value === "Millimeter"){
        result.value = input.value * 10;

    }  else  if(inputUnit.value === "Centimeter" && resultUnit.value === "Yard"){
        result.value = input.value / 91.44;

    }  else  if(inputUnit.value === "Centimeter" && resultUnit.value === "Foot"){
        result.value = input.value / 30.48;

    }  else  if(inputUnit.value === "Centimeter" && resultUnit.value === "Inch"){
        result.value = input.value / 2.54;

    }  else  if(inputUnit.value === "Centimeter" && resultUnit.value === "Mile"){
        result.value = input.value / 160934;

    }
  
      if(inputUnit.value === "Millimeter" && resultUnit.value === "Meter"){
        result.value = input.value / 1000;

    }  else  if(inputUnit.value === "Millimeter" && resultUnit.value === "Kilometer"){
        result.value = input.value / 1000000;

    }  else  if(inputUnit.value === "Millimeter" && resultUnit.value === "Centimeter"){
        result.value = input.value /10;

    }  else  if(inputUnit.value === "Millimeter" && resultUnit.value === "Millimeter"){
        result.value = input.value;

    }  else  if(inputUnit.value === "Millimeter" && resultUnit.value === "Yard"){
        result.value = input.value /914.4;

    }  else  if(inputUnit.value === "Millimeter" && resultUnit.value === "Foot"){
        result.value = input.value /304.8;

    }  else  if(inputUnit.value === "Millimeter" && resultUnit.value === "Inch"){
        result.value = input.value /25.4;        ;

    }  else  if(inputUnit.value === "Millimeter" && resultUnit.value === "Mile"){
        result.value = input.value /1,609,344 ;
    }

        if(inputUnit.value === "Yard" && resultUnit.value === "Meter"){
            result.value = input.value / 1.094
            ;
    
        }  else  if(inputUnit.value === "Yard" && resultUnit.value === "Kilometer"){
            result.value = input.value / 1094;
    
        }  else  if(inputUnit.value === "Yard" && resultUnit.value === "Centimeter"){
            result.value = input.value * 91.44;
    
        }  else  if(inputUnit.value === "Yard" && resultUnit.value === "Millimeter"){
            result.value = input.value * 914.4;            ;
    
        }  else  if(inputUnit.value === "Yard" && resultUnit.value === "Yard"){
            result.value = input.value;
    
        }  else  if(inputUnit.value === "Yard" && resultUnit.value === "Foot"){
            result.value = input.value * 3;
    
        }  else  if(inputUnit.value === "Yard" && resultUnit.value === "Inch"){
            result.value = input.value * 36;
    
        }  else  if(inputUnit.value === "Yard" && resultUnit.value === "Mile"){
            result.value = input.value / 1760;
        }


     if(inputUnit.value === "Foot" && resultUnit.value === "Meter"){
        result.value = input.value / 3.281;

    }  else  if(inputUnit.value === "Foot" && resultUnit.value === "Kilometer"){
        result.value = input.value / 3281;

    }  else  if(inputUnit.value === "Foot" && resultUnit.value === "Centimeter"){
        result.value = input.value * 30.48;

    }  else  if(inputUnit.value === "Foot" && resultUnit.value === "Millimeter"){
        result.value = input.value * 304.8;        ;

    }  else  if(inputUnit.value === "Foot" && resultUnit.value === "Yard"){
        result.value = input.value / 3;

    }  else  if(inputUnit.value === "Foot" && resultUnit.value === "Foot"){
        result.value = input.value;

    }  else  if(inputUnit.value === "Foot" && resultUnit.value === "Inch"){
        result.value = input.value * 12;

    }  else  if(inputUnit.value === "Foot" && resultUnit.value === "Mile"){
        result.value = input.value / 5280;        ;
    }

    if(inputUnit.value === "Inch" && resultUnit.value === "Meter"){
        result.value = input.value / 39.37;

    }  else  if(inputUnit.value === "Inch" && resultUnit.value === "Kilometer"){
        result.value = input.value / 39370
        ;

    }  else  if(inputUnit.value === "Inch" && resultUnit.value === "Centimeter"){
        result.value = input.value * 2.54;

    }  else  if(inputUnit.value === "Inch" && resultUnit.value === "Millimeter"){
        result.value = input.value *25.4
        ;

    }  else  if(inputUnit.value === "Inch" && resultUnit.value === "Yard"){
        result.value = input.value /36;

    }  else  if(inputUnit.value === "Inch" && resultUnit.value === "Foot"){
        result.value = input.value /12;

    }  else  if(inputUnit.value === "Inch" && resultUnit.value === "Inch"){
        result.value = input.value;

    }  else  if(inputUnit.value === "Inch" && resultUnit.value === "Mile"){
        result.value = input.value/63360;        ;
    }

    if(inputUnit.value === "Mile" && resultUnit.value === "Meter"){
        result.value = input.value * 1609.34 ;

    }  else  if(inputUnit.value === "Mile" && resultUnit.value === "Kilometer"){
        result.value = input.value * 1.609;

    }  else  if(inputUnit.value === "Mile" && resultUnit.value === "Centimeter"){
        result.value = input.value * 160900
        ;

    }  else  if(inputUnit.value === "Mile" && resultUnit.value === "Millimeter"){
        result.value = input.value * 1,609,344 ;

    }  else  if(inputUnit.value === "Mile" && resultUnit.value === "Yard"){
        result.value = input.value * 1760;

    }  else  if(inputUnit.value === "Mile" && resultUnit.value === "Foot"){
        result.value = input.value & 5280;

    }  else  if(inputUnit.value === "Mile" && resultUnit.value === "Inch"){
        result.value = input.value * 63360;

    }  else  if(inputUnit.value === "Mile" && resultUnit.value === "Mile"){
        result.value = input.value;
    }

        
    }

    function resetForm () {

        document.querySelector("form").reset();

    }
