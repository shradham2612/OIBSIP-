const calculatetemp = () => {
  const enterednum = document.getElementById("temp").value;
  const typesel = document.getElementById("temp_diff");
  const typeind = temp_diff.options[typesel.selectedIndex].value;

  console.log(typeind);
  console.log(enterednum);

 

  const celcon = (cel) => {
    var res = [];
    fah = Math.round(parseInt(cel) * (9 / 5) + 32);
    kel = parseInt(cel) + 273.15;
    res.push(fah);
    res.push(kel);
    return res;
  };
  const farcon = (far) => {
    var res = [];
    cel = Math.round(parseInt(far) - 32) * 0.5556;
   
    kel = parseInt(cel) + 273.15;
  
    res.push(cel);
    res.push(kel);
    return res;
  };
  const kelcon = (kel) => {
    var res = [];
    fah = Math.round((parseInt(kel) - 273.15) * (9 / 5) + 32);
    cel = parseInt(kel) - 273.15;
    res.push(fah);
    res.push(cel);
    return res;
  };

  var arr = [];

  if (typeind == "celcius") {
    var arr = [];
    arr = celcon(enterednum);
    document.getElementById("result1").innerHTML = `${arr[0]} °Fahrenheit`;
    document.getElementById("result2").innerHTML = `${arr[1]} °Kelvin`;
  } else if (typeind == "fahrenheit") {
    var arr = [];
    arr = farcon(enterednum);
    document.getElementById("result1").innerHTML = `${arr[0]} °Celcius`;
    document.getElementById("result2").innerHTML = `${arr[1]} °Kelvin`;
  } else {
    var arr = [];
    arr = kelcon(enterednum);
    document.getElementById("result1").innerHTML = `${arr[0]} °Fahrenheit`;
    document.getElementById("result2").innerHTML = `${arr[1]} °Celcius`;
  }





 
};
