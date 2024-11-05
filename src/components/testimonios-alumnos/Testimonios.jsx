import React from 'react'
import Testimonio from './Testimonio'

import { Autoplay, Navigation, Pagination, Virtual } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonios = [
  {id: 1, img:'https://yt3.googleusercontent.com/BrHvTVuz3HnKJx656FpXzm_B8il50fI281AC0PtrE7RgHazzPqmUudw7yUzqmnuFsaCp6YkTEQ=s900-c-k-c0x00ffffff-no-rj', nombre: 'Moure Dev', estatus: 'Ex alumno', comentario:'lorem ipsum lasf oaluvis okashfa oasfas wfasgg asfxsef asdftgt'},
  {id: 2, img:'https://yt3.googleusercontent.com/BrHvTVuz3HnKJx656FpXzm_B8il50fI281AC0PtrE7RgHazzPqmUudw7yUzqmnuFsaCp6YkTEQ=s900-c-k-c0x00ffffff-no-rj', nombre: 'Mariana Gonzaga', estatus: 'Ex alumno', comentario:'lorem ipsum lasf oaluvis okashfa oasfas wfasgg asfxsef asdftgt'},
  {id: 3, img:'https://yt3.googleusercontent.com/BrHvTVuz3HnKJx656FpXzm_B8il50fI281AC0PtrE7RgHazzPqmUudw7yUzqmnuFsaCp6YkTEQ=s900-c-k-c0x00ffffff-no-rj', nombre: 'Aldo Montañez', estatus: 'Alumno', comentario:'lorem ipsum lasf oaluvis okashfa oasfas wfasgg asfxsef asdftgt'},
  {id: 4, img:'https://yt3.googleusercontent.com/BrHvTVuz3HnKJx656FpXzm_B8il50fI281AC0PtrE7RgHazzPqmUudw7yUzqmnuFsaCp6YkTEQ=s900-c-k-c0x00ffffff-no-rj', nombre: 'Jesus Humberto', estatus: 'Alumno', comentario:'lorem ipsum lasf oaluvis okashfa oasfas wfasgg asfxsef asdftgt'},
  {id: 5, img:'https://yt3.googleusercontent.com/BrHvTVuz3HnKJx656FpXzm_B8il50fI281AC0PtrE7RgHazzPqmUudw7yUzqmnuFsaCp6YkTEQ=s900-c-k-c0x00ffffff-no-rj', nombre: 'Pamela Lopez', estatus: 'Alumna', comentario:'lorem ipsum lasf oaluvis okashfa oasfas wfasgg asfxsef asdftgt'}
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
