let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>
{
  button.addEventListener('click', (e)=>
  {
    if(e.target.innerHTML == '=')
    {
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'AC')
    {
      string = ""
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'X')
    {
        string = string + '*';
        document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == '÷')
    {
        string = string + '/';
        document.querySelector('input').value= string;
    }
    else if(e.target.id == '+/-')
    { 
        string = negate(string);
        document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == '%') 
    {
        string = string + '%';
        document.querySelector('input').value = string;
    }
    else if (e.target.id == 'C') 
    {
        string = removeLastEntry(string);
        document.querySelector('input').value = string;
    }
    else
    { 
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
    }
  })
})

function negate(value) 
{
    if (value.startsWith('-')) 
    {
      return value.substring(1);
    }
    else
    {
      return '-' + value;
    }
}
function removeLastEntry(value) 
{
    return value.slice(0, -1);
}