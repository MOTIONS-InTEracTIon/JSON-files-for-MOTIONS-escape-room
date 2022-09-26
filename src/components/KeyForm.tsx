import React from "react"
import {Autocomplete, TextField, Card, CardContent, Typography} from "@mui/material";
import {Room} from "./types";
import {Controller, Control} from "react-hook-form";
import ColorForm from "./ColorForm";

type KeyFormProps = {
    control: Control<Room, any>
    keyType: 'keys' | 'solution'
    keyIndex: number
}

const KeyForm = (props: KeyFormProps) => {
    const {control, keyIndex, keyType} = props
    const prefabOptions = ["Cube", "Triangle", "Sphere", "Cylinder", "Frame", "Fish", "Steak", "Carrot", "Bread"]

    return <Card
        style={{
            margin: "10px"
        }}>
        <CardContent
            style={{
                display: "flex",
                flexDirection: "column"
            }}>

            <Typography variant="h5">{keyType} {keyIndex}</Typography>
            <Controller
                name={`${keyType}.${keyIndex}.name`}
                control={control}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                    <TextField style={{
                        marginTop: "15px"
                    }} label="Name" onChange={onChange} onBlur={onBlur} ref={ref} value={value}/>
                )}/>
            <Controller
                name={`${keyType}.${keyIndex}.prefab`}
                control={control}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                    <Autocomplete
                        style={{
                            marginTop: "15px"
                        }}
                        options={prefabOptions}
                        onChange={(_e, data) => {onChange(data)}}
                        onBlur={onBlur}
                        value={value}
                        ref={ref}
                        placeholder="prefabs"
                        renderInput={(params) => <TextField {...params} label="Object" />}
                    />
                )}/>
            <ColorForm control={control} keyIndex={keyIndex} keyType={keyType}/>
            <Controller
                name={`${keyType}.${keyIndex}.scale`}
                control={control}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                    <TextField style={{
                        marginTop: "15px"
                    }} label="Scale" onChange={onChange} onBlur={onBlur} ref={ref} value={value} type="number" inputProps={{step: "0.01"}}/>
                )}/>
            <Controller
                name={`${keyType}.${keyIndex}.frameImage`}
                control={control}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                    <TextField style={{
                        marginTop: "15px"
                    }} label="Image File Name (If necessary)" onChange={onChange} onBlur={onBlur} ref={ref} value={value}/>
                )}/>
        </CardContent>
    </Card>

}

export default KeyForm