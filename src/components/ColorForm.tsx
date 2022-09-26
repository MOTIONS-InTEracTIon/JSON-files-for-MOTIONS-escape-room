import React from "react"
import {TextField, Box, Typography} from "@mui/material";
import {Room} from "./types";
import {Controller, Control} from "react-hook-form";

type ColorFormProps = {
    control: Control<Room, any>
    keyType: 'keys' | 'solution'
    keyIndex: number
}

const ColorForm = (props: ColorFormProps) => {
    const {control, keyIndex, keyType} = props

    return <>
        <Typography
            style={{
                marginTop: "15px",
                textAlign: "left",
            }}>Color</Typography>
        <Box
            style={{
                display: "flex",
                justifyContent: "space-between"
            }}>
            <Controller
                name={`${keyType}.${keyIndex}.color.r`}
                control={control}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                    <TextField style={{
                        marginTop: "5px"
                    }} label="Red" onChange={onChange} onBlur={onBlur} ref={ref} value={value} type="number" inputProps={{step: "0.01"}}/>
                )}/>
            <Controller
                name={`${keyType}.${keyIndex}.color.g`}
                control={control}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                    <TextField style={{
                        marginTop: "5px"
                    }} label="Green" onChange={onChange} onBlur={onBlur} ref={ref} value={value} type="number" inputProps={{step: "0.01"}}/>
                )}/>
            <Controller
                name={`${keyType}.${keyIndex}.color.b`}
                control={control}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                    <TextField style={{
                        marginTop: "5px"
                    }} label="Blue" onChange={onChange} onBlur={onBlur} ref={ref} value={value} type="number" inputProps={{step: "0.01"}}/>
                )}/>
        </Box>
    </>

}

export default ColorForm