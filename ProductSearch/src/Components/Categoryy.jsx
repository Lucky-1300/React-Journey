import React, { useState } from 'react'
import Categories from './Categories'

const Categoryy = () => {
  const [data, setdata] = useState(Categories)

  
  const filterCategory = (cat) => {
    const result = Categories.filter((item) => item.category === cat)
    setdata(result)
  }

 
  const filterColor = (color) => {
    const result = Categories.filter((item) => item.color === color)
    setdata(result)
  }

  const showAll = () => {
    setdata(Categories)
  }

  return (
    <>
      <h1 className="text-center text-info">Let's shop</h1>
      <div className="container-fluid mx-2">
        <div className="row mt-5">
          {/* Sidebar */}
          <div className="col-md-3 mb-4">
            <button className="btn btn-warning w-100 mb-3" onClick={() => filterCategory('men')}>Men</button>
            <button className="btn btn-warning w-100 mb-3" onClick={() => filterCategory('women')}>Women</button>
            <button className="btn btn-warning w-100 mb-3" onClick={() => filterCategory('children')}>Children</button>
            <button className="btn btn-warning w-100 mb-3" onClick={() => filterColor('black')}>Black</button>
            <button className="btn btn-warning w-100 mb-3" onClick={() => filterColor('white')}>White</button>
            <button className="btn btn-warning w-100 mb-3" onClick={showAll}>All</button>
          </div>

          {/* Cards */}
          <div className="col-md-9">
            <div className="row g-3">
              {data.map((item) => {
                const { id, title, price, img, description } = item
                return (
                  <div className="col-12 col-sm-6 col-md-4" key={id}>
                    <div className="card h-100 d-flex flex-column shadow-sm">
                      {/* Image container grows to fill space */}
                      <div style={{ flex: '1 0 auto', overflow: 'hidden' }}>
                        <img
                          src={img}
                          alt={title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>

                      {/* Card body */}
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text flex-grow-1">{description}</p>
                        <p>Price: {price}/-</p>
                        <button className="btn btn-dark w-100 mt-auto">Buy now</button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Categoryy
