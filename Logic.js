function Main()
{
	var operations_list = ["+", "-", "*", "/"];
			var operation = operations_list[Math.floor(Math.random()*operations_list.length)];
			var equation;
			var answer;
			if (operation == "+")
			{
				var add1 = Math.floor(Math.random() * 21);
				var add2 = (Math.floor(Math.random() * 21));
				equation = add1;
				equation +=  " + ";
				equation += add2;
				answer = add1 + add2;
			}
			else if (operation == '-')
			{
				var minus1 = (Math.floor(Math.random() * 21));
				var minus2 = Math.floor(Math.random() * 21);
				equation = minus1;
				equation += ' - ';
				equation += minus2;
				answer = minus1 - minus2;
			}
			else if (operation == '*')
			{
				var multiply1 = (Math.floor(Math.random() * 10) + 1);
				var multiply2 = (Math.floor(Math.random() * 10) + 1);
				equation = multiply1;
				equation += " x "; 
				equation += multiply2;
				answer = multiply1 * multiply2;
			}
			else if (operation == '/')
			{
				var divisor = Math.floor(Math.random() * 21);
				if (divisor % 1 == 0)
				{
					equation = divisor;
					equation += " / ";
					equation += 1;
					answer = divisor / 1;
				}
				else if (divisor % 2 == 0)
				{
					equation = divisor;
					equation += " / ";
					equation += 2;
					answer = divisor / 2;
				}
				else if (divisor % 3 == 0)
				{
					equation = divisor; 
					equation += " / ";
					equation += 3;
					answer = divisor / 3;
				}
				else if (divisor % 4 == 0)
				{
					equation = divisor;
					equation +=  " / ";
					equation += 4;
					answer = divisor / 4;
				}
				else if (divisor % 5 == 0)
				{
					equation = divisor;
					equation += " / ";
					equation += 5;
					answer = divisor / 5;
				}
				else if (divisor % 6 == 0)
				{
					equation = divisor;
					equation += " / ";
					equation += 6;
					answer = divisor / 6;
				}
				else if (divisor % 7 == 0)
				{
					equation = divisor; 
					equation += " / ";
					equation +=  7;
					answer = divisor / 7;
				}
				else if (divisor % 8 == 0)
				{
					equation = divisor;
					equation += " / ";
					equation += 8;
					answer = divisor / 8;
				}
				else if (divisor % 9 == 0)
				{
					equation = divisor;
					equation += " / ";
					equation +=  9;
					answer = divisor / 9;
				}
				else if (divisor % 10 == 0)
				{
					equation = divisor;
					equation += " / ";
					equation +=  10;
					answer = divisor / 10;
				}
			}
			document.getElementById("equation").innerHTML = equation;
			document.getElementById("answer").value = answer;
}
