const stateDefault = {
    listBookingSeats: []
}

export const BookingTicketReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "DAT_GHE": {
            const newList = [...state.listBookingSeats];
            let index = newList.findIndex(ghe => ghe.soGhe === action.ghe.soGhe);
            if (index !== -1) {
                newList.splice(index, 1);
            } else {
                newList.push(action.ghe);
            }

            return { ...state, listBookingSeats: newList };
        }
        case "HUY_GHE": {
            const newList = [...state.listBookingSeats];
            let index = newList.findIndex(ghe => ghe.soGhe === action.soGhe);

            if (index !== -1) newList.splice(index, 1);

            return { ...state, listBookingSeats: newList };
        }
        default:
            return state;
    }
}

