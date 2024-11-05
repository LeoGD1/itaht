import React from 'react' 
import DatosProfesor from './DatosProfesor'

import { Autoplay, Navigation, Pagination, Virtual } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const datosProfesores = [
  {id: 1, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWIffo1U4UPt2jv0v8eLRp83nvVzouqbVJNg&s', nombre: 'Antonio Lopez Huerta', grado: 'Lic. en Derecho', materia:'Derecho Penal'},
  {id: 2, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWIffo1U4UPt2jv0v8eLRp83nvVzouqbVJNg&s', nombre: 'Cesar Ríos Garatachea', grado: 'Lic. Actuaria Financiera', materia:'Calculo diferencial'},
  {id: 3, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWIffo1U4UPt2jv0v8eLRp83nvVzouqbVJNg&s', nombre: 'Leonardo de Gonzalez Díaz', grado: 'Lic. Informática', materia:'Programación'},
  {id: 4, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWIffo1U4UPt2jv0v8eLRp83nvVzouqbVJNg&s', nombre: 'Ricardo Hernández', grado: 'Analista', materia:'Sistemas de Informacion'},
  {id: 5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWIffo1U4UPt2jv0v8eLRp83nvVzouqbVJNg&s', nombre: 'Erikc Guerra', grado: 'Power Apps', materia:'Programacion declarativa'}
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
