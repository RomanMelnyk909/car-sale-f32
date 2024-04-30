import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import { INCERMENT, PLUS_NUMBER } from "../../constants/actionsNames.ts";
import Modal from "../Modal";
import { useState } from "react";

const Home = () => {
    const dispatch = useDispatch();
    const { count } = useSelector((state) => state.counter );
    const [isVisisble, setIsVisible] = useState();

    const onIncermentClickHandler = () => {
        dispatch({ type: INCERMENT })
    }

    const onPlusNumberClickHandler = () => {
        dispatch({ type: PLUS_NUMBER, payload: 5 })
    }

    const onCloseModalHandler = () => {
        setIsVisible(false)
    };

    return (
        <>
            <Modal
                onCloseModal={onCloseModalHandler}
                visible={isVisisble}
            >
                Modal children
            </Modal>
            <Box display="flex" alignItems="center" justifyContent="center">
                <Button variant="outlined" onClick={() => {setIsVisible(!isVisisble)}}>Primary</Button>
                <button onClick={onIncermentClickHandler} type="button">incerment</button>
                <button onClick={onPlusNumberClickHandler} type="button"> + 5 </button>
                <div>
                    {count}
                </div>
                {/*<Typography variant="h1">*/}
                {/*    However:*/}
                {/*    You should add pointer-events: none; back when you need to display tooltips on disabled elements.*/}
                {/*    The cursor won't change if you render something other than a button element, for instance, a lin element.*/}
                {/*    However:*/}
                {/*    You should add pointer-events: none; back when you need to display tooltips on disabled elements.*/}
                {/*    The cursor won't change if you render something other than a button element, for instance, a lin element.However:*/}
                {/*    You should add pointer-events: none; back when you need to display tooltips on disabled elements.*/}
                {/*    The cursor won't change if you render something other than a button element, for instance, a lin element.However:*/}
                {/*    You should add pointer-events: none; back when you need to display tooltips on disabled elements.*/}
                {/*    The cursor won't change if you render something other than a button element, for instance, a lin element.However:*/}
                {/*    You should add pointer-events: none; back when you need to display tooltips on disabled elements.*/}
                {/*    The cursor won't change if you render something other than a button element, for instance, a lin element.However:*/}
                {/*    You should add pointer-events: none; back when you need to display tooltips on disabled elements.*/}
                {/*    The cursor won't change if you render something other than a button element, for instance, a lin element.However:*/}
                {/*    You should add pointer-events: none; back when you need to display tooltips on disabled elements.*/}
                {/*    The cursor won't change if you render something other than a button element, for instance, a lin element.However:*/}
                {/*    You should add pointer-events: none; back when you need to display tooltips on disabled elements.*/}
                {/*    The cursor won't change if you render something other than a button element, for instance, a lin element.However:*/}
                {/*    You should add pointer-events: none; back when you need to display tooltips on disabled elements.*/}
                {/*    The cursor won't change if you render something other than a button element, for instance, a lin element.However:*/}
                {/*    You should add pointer-events: none; back when you need to display tooltips on disabled elements.*/}
                {/*    The cursor won't change if you render something other than a button element, for instance, a lin element.However:*/}
                {/*    You should add pointer-events: none; back when you need to display tooltips on disabled elements.*/}
                {/*    The cursor won't change if you render something other than a button element, for instance, a lin element.However:*/}
                {/*    You should add pointer-events: none; back when you need to display tooltips on disabled elements.*/}
                {/*    The cursor won't change if you render something other than a button element, for instance, a lin element.However:*/}
                {/*    You should add pointer-events: none; back when you need to display tooltips on disabled elements.*/}
                {/*    The cursor won't change if you render something other than a button element, for instance, a lin element.However:*/}
                {/*    You should add pointer-events: none; back when you need to display tooltips on disabled elements.*/}
                {/*    The cursor won't change if you render something other than a button element, for instance, a lin element.However:*/}
                {/*    You should add pointer-events: none; back when you need to display tooltips on disabled elements.*/}
                {/*    The cursor won't change if you render something other than a button element, for instance, a lin element.However:*/}
                {/*    You should add pointer-events: none; back when you need to display tooltips on disabled elements.*/}
                {/*    The cursor won't change if you render something other than a button element, for instance, a lin element.However:*/}
                {/*    You should add pointer-events: none; back when you need to display tooltips on disabled elements.*/}
                {/*    The cursor won't change if you render something other than a button element, for instance, a lin element.However:*/}
                {/*    You should add pointer-events: none; back when you need to display tooltips on disabled elements.*/}
                {/*    The cursor won't change if you render something other than a button element, for instance, a lin element.However:*/}
                {/*    You should add pointer-events: none; back when you need to display tooltips on disabled elements.*/}
                {/*    The cursor won't change if you render something other than a button element, for instance, a lin element.However:*/}
                {/*    You should add pointer-events: none; back when you need to display tooltips on disabled elements.*/}
                {/*    The cursor won't change if you render something other than a button element, for instance, a lin element.However:*/}
                {/*    You should add pointer-events: none; back when you need to display tooltips on disabled elements.*/}
                {/*    The cursor won't change if you render something other than a button element, for instance, a lin element.However:*/}
                {/*    You should add pointer-events: none; back when you need to display tooltips on disabled elements.*/}
                {/*    The cursor won't change if you render something other than a button element, for instance, a lin element.However:*/}
                {/*    You should add pointer-events: none; back when you need to display tooltips on disabled elements.*/}
                {/*    The cursor won't change if you render something other than a button element, for instance, a lin element.However:*/}
                {/*    You should add pointer-events: none; back when you need to display tooltips on disabled elements.*/}
                {/*    The cursor won't change if you render something other than a button element, for instance, a lin element.*/}
                {/*</Typography>*/}
            </Box>
        </>
    );
}

export default Home;
