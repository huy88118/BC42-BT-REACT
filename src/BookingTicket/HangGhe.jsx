import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function HangGhe({ hangGhe, order }) {
  const { listBookingSeats } = useSelector(state => state.BookingTicketReducer);
  const dispatch = useDispatch();

  const renderSoHang = () => {
    return hangGhe.danhSachGhe.map((soHang, index) => {
      return <button className='rowNumber' key={index}>
        {soHang.soGhe}
      </button>
    })
  }


  const renderHangGhe = () => {
    return hangGhe.danhSachGhe.map((ghe, index) => {
      // Trạng thái ghế đã đặt
      let cssGheDaDat = '';
      let disabled = false;

      if (ghe.daDat) {
        cssGheDaDat = 'gheDuocChon';
        disabled = true;
      }


      // Trạng thái ghế đang chọn
      let cssGheDangDat = '';
      let indexGheDangDat = listBookingSeats.findIndex(bookingSeat => bookingSeat.soGhe === ghe.soGhe);
      if (indexGheDangDat !== -1) {
        cssGheDangDat = 'gheDangChon';
      }
      return <button onClick={() => {
        dispatch({
          type: "DAT_GHE",
          ghe
        })
      }} disabled={disabled} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index}>
        {ghe.soGhe}
      </button>
    })
  }


  const renderSoHangGhe = () => {
    if (order === 0) {
      return <div className='mt-1'>
        {hangGhe.hang} {renderSoHang()}
      </div>
    } else {
      return <div>
        {hangGhe.hang} {renderHangGhe()}
      </div>
    }
  }

 
  return (
    <div className='text-light'>
      {renderSoHangGhe()}
    </div>
  )
}

export default HangGhe