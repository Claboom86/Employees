import axios from "axios";
import { SET_ITEM_DETAILS } from "./types";

export function fetchItemDetails() {
    return function (dispatch) {
        return axios.get("http://dummy.restapiexample.com/api/v1/employees").then(({ data }) => {
            dispatch(setItemDetails(data));
        });
    };
}

function setItemDetails(data) {
    return {
        type: SET_ITEM_DETAILS,
        payload: data
    };
}