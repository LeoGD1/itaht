import React from 'react'

export default function DatosProfesor({ img ,nombre, grado, materia }) {
  return(
    <article className="p-6 text-center flex flex-col items-center">
      <img className="rounded-full mb-4 size-36"
        src={img}
        alt={nombre} />
      <h4 className="font-semibold mb-1">{nombre}</h4>
      <p className="mb-1">{grado}</p>
      <p className='mb-5'><strong>Mat. </strong> {materia}</p>
    </article>
  )
}