import React from 'react'
import White from '../../assets/White.svg'
import Black from '../../assets/Black.svg'
function Logo() {
  return (
    <div className='brand_wrap'>
        <a  href="/" data-w-id="045f99fe-ac6b-eb28-1f16-d72c0e5c6059" aria-current="page" className='brand w-nav-brand w--current'>
            <img src={White} alt="" data-w-id="045f99fe-ac6b-eb28-1f16-d72c0e5c605a"  className='logo'/>
            <img src={Black} alt=""  className='logo_black'/>
        </a>
    </div>
  )
}

export default Logo