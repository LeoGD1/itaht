import React from 'react' 
import DatosProfesor from './DatosProfesor'

import { Autoplay, Navigation, Pagination, Virtual } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const datosProfesores = [
  {id: 1, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWIffo1U4UPt2jv0v8eLRp83nvVzouqbVJNg&s', nombre: 'Nombre profesor', grado: 'Grado académico', materia:'Nombre materia'},
  {id: 2, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWIffo1U4UPt2jv0v8eLRp83nvVzouqbVJNg&s', nombre: 'Nombre profesor', grado: 'Grado académico', materia:'Nombre materia'},
  {id: 3, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWIffo1U4UPt2jv0v8eLRp83nvVzouqbVJNg&s', nombre: 'Nombre profesor', grado: 'Grado académico', materia:'Nombre materia'},
  {id: 4, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWIffo1U4UPt2jv0v8eLRp83nvVzouqbVJNg&s', nombre: 'Nombre profesor', grado: 'Grado académico', materia:'Nombre materia'},
  {id: 5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWIffo1U4UPt2jv0v8eLRp83nvVzouqbVJNg&s', nombre: 'Nombre profesor', grado: 'Grado académico', materia:'Nombre materia'}
]

export default function Profesor(){
  return (
    <Swiper
      modules={[Navigation, Pagination, Virtual, Autoplay]}
      navigation
      virtual
      autoplay={true}
      pagination={{ clickable: true }}
      breakpoints={
        {
          640: {
            slidesPerView: 1,
            spaceBetween: 50
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          1042: {
            slidesPerView: 3,
            spaceBetween: 20,
          }
        }
      }
    >
      {
        datosProfesores.map(profesor => (
          <SwiperSlide key={profesor.id}>
            <DatosProfesor
              img={profesor.img}
              nombre={profesor.nombre}
              grado={profesor.grado}
              materia={profesor.materia} />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
}
