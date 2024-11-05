import React from 'react'
import Testimonio from './Testimonio'

import { Autoplay, Navigation, Pagination, Virtual } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonios = [
  {id: 1, img:'https://yt3.googleusercontent.com/BrHvTVuz3HnKJx656FpXzm_B8il50fI281AC0PtrE7RgHazzPqmUudw7yUzqmnuFsaCp6YkTEQ=s900-c-k-c0x00ffffff-no-rj', nombre: 'Nombre alumno', estatus: 'Ex alumno', comentario:'comentario'},
  {id: 2, img:'https://yt3.googleusercontent.com/BrHvTVuz3HnKJx656FpXzm_B8il50fI281AC0PtrE7RgHazzPqmUudw7yUzqmnuFsaCp6YkTEQ=s900-c-k-c0x00ffffff-no-rj', nombre: 'Nombre alumno', estatus: 'Alumno', comentario:'comentario'},
  {id: 3, img:'https://yt3.googleusercontent.com/BrHvTVuz3HnKJx656FpXzm_B8il50fI281AC0PtrE7RgHazzPqmUudw7yUzqmnuFsaCp6YkTEQ=s900-c-k-c0x00ffffff-no-rj', nombre: 'Nombre alumno', estatus: 'Ex alumno', comentario:'comentario'},
  {id: 4, img:'https://yt3.googleusercontent.com/BrHvTVuz3HnKJx656FpXzm_B8il50fI281AC0PtrE7RgHazzPqmUudw7yUzqmnuFsaCp6YkTEQ=s900-c-k-c0x00ffffff-no-rj', nombre: 'Nombre alumno', estatus: 'Alumno', comentario:'comentario'},
  {id: 5, img:'https://yt3.googleusercontent.com/BrHvTVuz3HnKJx656FpXzm_B8il50fI281AC0PtrE7RgHazzPqmUudw7yUzqmnuFsaCp6YkTEQ=s900-c-k-c0x00ffffff-no-rj', nombre: 'Nombre alumno', estatus: 'Ex alumno', comentario:'comentario'}
]

const Testimonios = () => {
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
        testimonios.map(testimonio => (
          <SwiperSlide key={testimonio.id}>
            <Testimonio
              img={testimonio.img}
              nombre={testimonio.nombre}
              estatus={testimonio.estatus}
              comentario={testimonio.comentario} />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default Testimonios
