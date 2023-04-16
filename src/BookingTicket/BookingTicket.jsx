import React from 'react'
import danhSachGhe from './danhSachGhe.json'
import './style.css'
import HangGhe from './HangGhe'
import ThongTinGhe from './ThongTinGhe'

function BookingTicket() {
  const renderHangGhe = () => {
    return danhSachGhe.map((hangGhe, index) => {
      return <HangGhe hangGhe={hangGhe}
        order={index}
        key={index} />
    })
  }
  return (
    <div>


      <div>
        <div className='position-fixed' style={{ backgroundSize:"cover" ,backgroundRepeat: 'no-repeat' ,width: '100%', height: '100%', backgroundImage: "url('./bg-galaxy.jpg')" }}>

          <di v className='position-fixed' style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className='container-fluid'>
              <div className='row'>
              <h1 style={{ fontSize: '40px' }} className='text-warning text-center '>CYBERSOFT CINEMA</h1>
                <div className='col-8 text-center mt-3'>
                
            <div className='text-info' style={{ fontSize: '35px' }}>Màn hình</div>
                  <div className='mb-2'>
                    <div className='screen'></div>
                    {renderHangGhe()}
                  </div>

                </div>
                <div className='col-4 '>
                  <div style={{ fontSize: '30px'}} className=' text-info mt-2 text-center'>GHẾ ĐANG CHỌN</div>
                  <ThongTinGhe />
                </div>
              </div>
            </div>

          </di>

        </div>
      </div>

    </div>
  )
}

export default BookingTicket