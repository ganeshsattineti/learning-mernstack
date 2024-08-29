function printSmallest(x,y,z)
{
  if(x<y&&x<z)
  {
    console.log("x is a small");
  }
   else if(y<x&&y<z)
  {
    console.log("y is small");

  }
  else
    {
    console.log("z is small");
  }
}
printSmallest(10,20,30);
printSmallest(50,20,40);
printSmallest(50,40,30);

//if else statement
function position(yearsOfExpereience)
{
  if(yearsOfExpereience>=0&&yearsOfExpereience<=2)
  {
    console.log('junior Developer');
  } else if(yearsOfExpereience>2&&yearsOfExpereience<=5)
    {
      console.log("senoir developer");
    } else if(yearsOfExpereience>5&&yearsOfExpereience<=7)
      {
        console.log("Team Lead");
      }else if(yearsOfExpereience>7&&yearsOfExpereience<=9)
      {
        console.log("project manager");
      }
      else
      {
        console.log("software Arch");
      }
}
position(7);
position(8.5);

// using swith
function func(value)
{
  switch(true)
  {
    case value<=2 :
        console.log("junior Developer");
        break;
    case value<=5 :
        console.log("senior Developer");
        break;
    case value<=7 :
       console.log("Team Lead")
       break;
    case value<=9 :
      console.log("project manager");
      break;
    default :
       console.log("software Arch");             
  }

  
}
func(4.5);

