function printinbar(obj){
    let value = document.getElementById('screen').value;
    if(obj == '+' || obj == '-' || obj == '/' || obj == '*'){
      if(value.endsWith('+')){
      value = value.replace('+', obj);
    } else if(value.endsWith('-')){
      value = value.replace('-', obj);
    } else if(value.endsWith('/')){
      value = value.replace('/', obj);
    } else if(value.endsWith('*')){
      value = value.replace('*', obj);
    } else {
      value = value + obj;
    }
    } else {
      value = value + obj;
    }
    document.getElementById('screen').value = value;
  }
  function clearData(){
    document.getElementById('screen').value='';
  }

  function clearOne(){
    let value = document.getElementById('screen').value;
    value = value.slice(0, value.length -1);
    document.getElementById('screen').value = value;
  }

  function get_result()
  {
    let expression = document.getElementById('screen').value;
    let result = eval(expression);
      document.getElementById('screen').value = result;
    // if(expression.includes('+')){
    //   let array = expression.split("+");
    //   let result = Number(array[0]) + Number(array[1]);
    //   document.getElementById('screen').value = result;
    // }

    // if(expression.includes('-')){
    //   let array = expression.split("-");
    //   let result = Number(array[0]) - Number(array[1]);
    //   document.getElementById('screen').value = result;
    // }

    // if(expression.includes('/')){
    //   let array = expression.split("/");
    //   let result = Number(array[0]) / Number(array[1]);
    //   document.getElementById('screen').value = result;
    // }

    // if(expression.includes('*')){
    //   let array = expression.split("*");
    //   let result = Number(array[0]) * Number(array[1]);
    //   document.getElementById('screen').value = result;
    // }

  }