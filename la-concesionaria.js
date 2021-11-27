//Estapa 1

let autos = require ("./autos")
let cliente = require('./cliente')

let concesionaria  = {
autos: autos,
buscarAuto: function (patente){
for (let i= 0; i<=autos.length; i++){
if (autos[i].patente==patente){
return autos[i]
}else {
return null
}
}
},
}

//Etapa 2

let concesionaria = {
    autos: autos,
  
    buscarAuto: function(patente){
       let encontrado = null
       this.autos.forEach(function(auto){ if(auto.patente == patente){
        encontrado = auto
         }
          })
           return encontrado
     },
     //Etapa 3
     venderAuto:  function (patente){
        if  (this.buscarAuto(patente) ){  
         return  this.buscarAuto(patente).vendido = true
       }
     },
     //Funcionalidad extra
     autosParaLaVenta: function(){
        return this.autos.filter((function(auto)
          {return auto.vendido === false}),this)
       },
       //Una nueva funcionalidad extra
       autosNuevos: function (){ 
        return this.autosParaLaVenta().filter ( (function (nuevo){
          return nuevo.km < 100
        }),this)
        },
        //Más funcionalidades
        listaDeVentas: function () {
            lista1 = []
                for (let i = 0 ; i < this.autos.length ; i++){
                if (this.autos[i].vendido === true){  
                lista1.push (  autos[i].precio)
            }
              }return lista1
        },
        //Total de ventas
        totalDeVentas:  function(){ 
            return  this.listaDeVentas().reduce ( function (totalDeVenta,ventas){
               return totalDeVenta + ventas
              },0)
        },
        //Agregando funcionalidades
        puedeComprar: function(auto,cliente){ 
            let costoTotal = auto.precio;
            let autoCoutas =auto.cuotas;
            let compradorCoutas =cliente.capacidadDePagoEnCuotas;
            let compradorPagoTotal = cliente.capacidadDePagoTotal;
            if ( costoTotal <= compradorPagoTotal && 
               (costoTotal/autoCoutas) <= compradorCoutas) {
               return true
               console.log(true)
               }else{
                return false
                console.log(false)
                }
        },
        //Agregando funcionalidades parte 2
        autosQuePuedeComprar: function(cliente){
            let puede =[]
            this.autosParaLaVenta().forEach(function(auto){
             let pComprar =concesionaria.puedeComprar(auto,cliente)
             if (pComprar){
             puede.push(auto)
                }
                 })
               return puede
        }
 }