import React from 'react'
import  "./RenderDia.css"




 function RenderDia(props ) {
const { vacaciones, fechaActual } = props;

const dia = vacaciones.datos.find(d => d.fecha === fechaActual);


//const actividades = hotel.actividad;

//console.log(hotel[0].hotel)
//console.log(actividades);

if (dia.actividades) {
  return (
    <div>
      <header className='header'>
      <h1 className='TitPrincipal'>¡Hoy estás de vacaciones! Dia: {dia.dia}</h1>
      <h2>Estas Alojado en {dia.hotel} </h2>

      </header>
      <div className='header2'>


      {/* <div  dangerouslySetInnerHTML={{ __html: hotel['ubicación'] }} ></div> */}
      {dia.actividades.map((actividad, index) => (
        <div className='actividades' key={index}>
            
          <div className='imaHora'>
          <h2 className='hora'>{actividad.hora}</h2>
          
          <div className='imagen'>
          <img className='foto' src={actividad.foto} alt={actividad.descripcion} />

          </div>
          </div>
          
          <div className='detalles' >
          <h3 className='actividad'>{actividad.descripcion}</h3>
          <p className='resumen'>{actividad.resumen}</p>
          <span>

          <p>Ubicación:</p>
          <a href={actividad.ubicacion}>Link</a>
          </span>
          </div>
          
        </div>
        
       
      ))}
      <div className='actividadBajo'></div>
      </div>
      
    </div>
  );
} else {
  return (
    <div>
      <h1>No estás de vacaciones hoy</h1>
      <p>¡Pero todavía puedes disfrutar del día!</p>
    </div>
  );
}
}


export default RenderDia