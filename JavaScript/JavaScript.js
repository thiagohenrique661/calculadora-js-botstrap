function calcular(type, valor) {

      		if (type === 'action') {

      			if (valor === 'c') {

      				//clear 
      				document.getElementById('result').value = '';
      			}

      			if (valor === '/' || valor === '*' || valor === '+' || valor === '-' || valor === '.' ) {
      				document.getElementById('result').value += valor;
      			} 

      			if (valor === '=') {
      				var input_value = eval(document.getElementById('result').value);

      				document.getElementById('result').value = input_value;
      			}


      		} else if (type === 'valor') {


      			document.getElementById('result').value += valor;
      		}

      	}