import React from 'react'

export default function DatosProfesor({ img ,nombre, estatus, comentario  }) {
  return(
    <article className="p-6 text-center flex flex-col items-center">
      <img className="rounded-full mb-4 size-36"
        src={img}
        alt={nombre} />
      <h4 className="font-semibold mb-1">{nombre}</h4>
      <p className="mb-1">{estatus}</p>
      <p className='mb-5'>{comentario}</p>
    </article>
  )
}