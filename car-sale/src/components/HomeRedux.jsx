import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { INCERMENT, PLUS_NUMBER } from "../constants/actionsNames";

const Home = () => {
    const dispatch = useDispatch();
    const { count } = useSelector((state) => state.counter );

    const onIncermentClickHandler = () => {
        dispatch({ type: INCERMENT })
    }

    const onPlusNumberClickHandler = () => {
        dispatch({ type: PLUS_NUMBER, payload: 5 })
    }

    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <button onClick={onIncermentClickHandler} type="button">incerment</button>
            <button onClick={onPlusNumberClickHandler} type="button"> + 5 </button>
            <div>
                {count}
            </div>
        </Box>
    )
}

export default Home;