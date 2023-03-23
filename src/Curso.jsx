import React from 'react'
import './style/actualizarPagina.css'
import { useState } from 'react';

function Curso(props) {

  const [curso, setCurso] = useState('Curso de React');
  const [software, setsotfware] = useState('Visual Studio Code');
  const [description, setDescription] = useState('Curso de React con Hooks');
  const [image, setImage] = useState('../multimedia/3d.jpg')


  const changeCourse = (e) => {
    e.preventDefault();
    const valueInput = e.target.previousSibling.value;
    setCurso(valueInput)

    e.target.previousSibling.value = '';
  }
  const changeCourse2 = (e) => {
    e.preventDefault();
    const valueInput = e.target.previousSibling.value;
    setsotfware(valueInput)

    e.target.previousSibling.value = '';
  }

  const changeCourse3 = (e) => {
    e.preventDefault();
    const valueInput = e.target.previousSibling.value;
    setDescription(valueInput)

    e.target.previousSibling.value = '';
  }
  const changeImage = (e) => {
    e.preventDefault();
    const valueInput = e.target.src;
    setImage(valueInput)


  }
  return (

    <main>
      <div className='row'>
        <div className=' curso col-12 col-lg-6  d-flex align-items-center ps-5' style={{ background: `url(${image}) center/cover` }}>
          <div>
            <h1 className='text-white d-flex fw-bold me-5'> {curso}</h1>
            <p className='text-white rounded text-lg-start fw-bold '> {software}</p>
            <p className='text-white'> {description}</p>
            <button className='btn-ins'>¡Inscribete!</button>
          </div>
        </div>

        <div className="form col-12 col-lg-6 mt-5 d-flex flex-column justify-content-center align-items-center pe-5 ps-5">
        <section>
          <div className='pb-3 '>
            <input className='controles' type="text" name="Nombres" id="nombres" placeholder="Nombre del curso" />
            <button onClick={changeCourse} className='btn-act'>Actualizar</button>
          </div>

          <div className='pb-3'>
            <input className='controles ' type="text" name="Apellidos" id="apellidos" placeholder="Software" />
            <button onClick={changeCourse2} className='btn-act'>Actualizar</button>
          </div>

          <div className='pb-3'>
            <input className='controles' type="email" name="Correo" id="correo" placeholder="Descripción" />
            <button onClick={changeCourse3} className='btn-act'>Actualizar</button>
          </div>
          <div onClick={changeImage} className='mt-3'>
            <p >Nueva imagen</p>
            <a href=""><img className='pe-3' src="../multimedia/car.jpg" alt="" /></a>
            <a href=""><img className='pe-3' src="../multimedia/K6Rz.gif" alt="" /></a>
            <a href=""><img className='pe-3' src="../multimedia/film.jpg" alt="" /></a>
            <a href=""><img className='pe-3' src="../multimedia/3d.jpg" alt="" /></a>
          </div>
          </section>
        </div>

      </div>


    </main>

  );
}
export default Curso
