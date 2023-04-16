import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function ThongTinGhe() {
  const { listBookingSeats } = useSelector(state => state.BookingTicketReducer);
  const dispatch = useDispatch();



  // Hủy ghế
  const huyGhe = (soGhe) => {
    dispatch({
      type: "HUY_GHE",
      soGhe
    })
  }
  return (
    <div className='mt-2'>
      <button className='gheDuocChon mt-1'></button> <span className='text-light' style={{ fontSize: '20px' }}> Đã đặt</span>
      <br />
      <button className='gheDangChon mt-1'></button> <span className='text-light' style={{ fontSize: '20px' }}> Đang đặt</span>
      <br />
      <button className='ghe mt-1' style={{ marginLeft: 0 }}></button> <span className='text-light' style={{ fontSize: '20px' }}> Còn trống</span>
      <br />
      <div className='mt-2'>
        <div className=' '>
          <table className=" table table-bordered text-light  " >
            <thead>
              <tr>
                <th>Số ghế</th>
                <th >Giá</th>
                <th>Hủy</th>
              </tr>
            </thead>
            <tbody>
              {listBookingSeats.map((bookingSeat, index) => {
                return <tr key={index}>
                  <td className='text-warning'>{bookingSeat.soGhe}</td>
                  <td className='text-warning'>{bookingSeat.gia.toLocaleString()}</td>
                  <td>
                    <button className='btn btn-danger' onClick={(soGhe) => { huyGhe(bookingSeat.soGhe) }}>x</button>
                  </td>
                </tr>
              })}
            </tbody>
            <tbody>
            <tr>
               
                  <td className='text-warning'>Tổng :</td>
              
                <td style={{fontSize:'25px'}} className=''>{listBookingSeats.reduce((result, bookingSeat, index) => {
                  return result + bookingSeat.gia;
                }, 0).toLocaleString()}</td>
                <td></td>
                
                
              </tr>
            </tbody>
           
          </table>
          <button className='btn btn-primary  '>Thanh toán</button>
        </div>
      </div>
    </div>
  )
}

export default ThongTinGhe