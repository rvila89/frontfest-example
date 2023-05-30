import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
          <NavLink className='nav-link text-white' to='/catalog'>
            Cart App
          </NavLink>
          <div
            className='collapse navbar-collapse ms-3 justify-content-center'
            id='navbarNav'
          >
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className={'nav-link'} to='/catalog'>
                  Catalog
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className={'nav-link'} to='/cart'>
                  Cart
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
