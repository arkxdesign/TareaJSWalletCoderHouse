let wallet = [];
let saldo = 0;

let nombreCompleto;
while (true) {
  nombreCompleto = prompt("Ingresa tu nombre");
  if (nombreCompleto.length >= 10) {
    break;
  }
  alert("Ingresa tu nombre completo ")  
}
nombre = nombreCompleto;

let saldoInicial;
while(true){
  saldoInicial = parseFloat(prompt("Ingresa tu saldo inicial"));
  if (!isNaN(saldoInicial) && saldoInicial >= 1) {
    break;
  }
  alert("Ingresa una cantidad válida, por ejemplo: 1000");
}
saldo = saldoInicial;
wallet.push(saldo);
alert("Tu saldo inicial es de $" + saldo.toFixed(2) + " MXN");

function registrarTransaccion(monto) {
  wallet.push(monto);
  saldo += monto;
  alert("Tu saldo actual es de $" + saldo.toFixed(2) + " MXN");
}

function ingresarSaldo() {
  let ingresos;
  while (true) {
    ingresos = parseFloat(prompt("Ingresa el monto de ingresos"));
    if (!isNaN(ingresos) && ingresos >= 0) {
      break;
    }
    alert("Ingresa una cantidad válida.");
  }
  registrarTransaccion(ingresos);
}

function restarSaldo() {
  let egresos;
  while (true) {
    egresos = parseFloat(prompt("Ingresa el monto de egresos"));
    if (!isNaN(egresos) && egresos >= 0) {
      break;
    }
    alert("Ingresa una cantidad válida.");
  }
  registrarTransaccion(-egresos);
}

let ingresarMovimientos = true
while (ingresarMovimientos) {
  let walletMovimientos = prompt("Para INGRESOS escribe 0 para EGRESOS escribe 1 para SALIR escribe 2")
  switch (walletMovimientos) {
    case "0":
      ingresarSaldo()
      break;
    case "1":
      restarSaldo()  
      break;
    case "2":
      alert("Gracias " + nombre + "! Tu saldo final es de $" + saldo.toFixed(2) + " MXN");
      wallet.push("Saldo final: " + saldo.toFixed(2));
      ingresarMovimientos = false;  
      break
    default:
      ingresarMovimientos = true;
      alert("Esta opcion no esta disponible")
      break 
  }
}
