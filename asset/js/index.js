const url = "https://api.npoint.io/97d89162575a9d816661";
fetch(url)
  .then(response => response.json())
  .then(data => {
    const cuentas = data.cuentas; // Todas las cuentas
    
    //Se filtran las cuentas con los filtros especificados
    const filtroCuentas = cuentas.filter(cuenta => {
      return (
        (cuenta.moneda === "u$s" || cuenta.moneda === "$") &&
        (cuenta.tipo_letras === "CC" || cuenta.tipo_letras === "CA")
      );
    })
    
    const divCuentas = document.querySelector("#cuentas");
    
    let paginaActual = 1;
    let cantCuentasPorPagina = 5;
    
    //Funcion que muestra las cuentas
    function mostrarCuentas(page) {
      divCuentas.innerHTML = ""; 

      let startIndex = (page - 1) * cantCuentasPorPagina;
      let endIndex = startIndex + cantCuentasPorPagina;
      let cuentasVisibles = filtroCuentas.slice(startIndex, endIndex);

      if (startIndex > 0) {
        const btn_back = document.createElement("button");
        btn_back.classList.add("card");
        btn_back.innerHTML = "<< Opciones Anteriores";
        btn_back.addEventListener("click", () => {
          paginaActual--;
          mostrarCuentas(paginaActual);
        });
        divCuentas.append(btn_back);
      }

      
      cuentasVisibles.forEach(cuenta => {
        let button = document.createElement("button");
        button.classList.add("card");
        if (cuenta.tipo_letras === "CC") {
          button.innerHTML = `
            <p>Cuenta Corriente</p>
            <p>Nro.: ${cuenta.n}</p>
          `;
        } else {
          button.innerHTML = `
            <p>Caja de Ahorro</p>
            <p>Nro.: ${cuenta.n}</p>
          `;
        }
        divCuentas.append(button);

        button.addEventListener(`click`, () => {
          divCuentas.innerHTML = "";
          divCuentas.innerHTML = `

          <div class="datosCuenta">
          <p>Saldo de la cuenta: ${cuenta.saldo}</p> 
          <p>Tipo de cuenta: ${cuenta.tipo_letras}</p>
          <p>Numero de cuenta: ${cuenta.n}</p> 
          </div>
        `;
        })
      });

      if (endIndex < filtroCuentas.length) {
        const btn_next = document.createElement("button");
        btn_next.classList.add("card");
        btn_next.innerHTML = "Mas Opciones >>";
        btn_next.addEventListener("click", () => {
          paginaActual++;
          mostrarCuentas(paginaActual);
        });
        divCuentas.append(btn_next);
      }
    }

    mostrarCuentas(paginaActual);

    let btn_out = document.querySelector(`#salir`);
    btn_out.addEventListener(`click`, function (){
    mostrarCuentas(paginaActual);
  });
  
  })
  .catch(error => {
    console.error('Error en la solicitud:', error);
    console.log('Mensaje de error en catch');
  });
