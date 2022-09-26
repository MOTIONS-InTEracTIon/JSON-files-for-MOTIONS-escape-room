import React, {useState} from "react"
import {Room} from "./types";
import {Autocomplete, FormControl, TextField, Typography, Card, CardContent, Button} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import KeyForm from "./KeyForm";

const RoomForm = () => {
    const { handleSubmit, formState: { errors }, control } = useForm<Room>();
    const onSubmit = handleSubmit(data => {
        const jsonData = JSON.stringify(data)
        setJsonRepresentation(jsonData)
    })
    const machineOptions = ["ChangeColorMachine", "ReadColorMachine", "ChangeScaleMachine", "BrowserMachine"]
    const [jsonRepresentation, setJsonRepresentation] = useState("Nada por ahora")

    return <div style={{display: "flex"}}><form onSubmit={onSubmit} style={{display: "flex", flexDirection:"column", width:"50%"}}>
        <FormControl>
            <KeyForm control={control} keyIndex={0} keyType="keys"/>
            <KeyForm control={control} keyIndex={1} keyType="keys"/>
            <KeyForm control={control} keyIndex={2} keyType="keys"/>
            <KeyForm control={control} keyIndex={3} keyType="keys"/>
        </FormControl>
        <FormControl>
            <KeyForm control={control} keyIndex={0} keyType="solution"/>
            <KeyForm control={control} keyIndex={1} keyType="solution"/>
            <KeyForm control={control} keyIndex={2} keyType="solution"/>
            <KeyForm control={control} keyIndex={3} keyType="solution"/>
        </FormControl>
        <FormControl>
            <Card
                style={{
                    margin: "10px"
                }}>
                <CardContent
                    style={{
                        display: "flex",
                        flexDirection: "column"
                    }}>
                    <Typography variant="h5">Machines</Typography>
                    <Controller
                        name={`machines`}
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Autocomplete
                                style={{
                                    marginTop: "15px"
                                }}
                                multiple={true}
                                options={machineOptions}
                                onChange={(_e, data) => {onChange(data)}}
                                onBlur={onBlur}
                                value={value}
                                ref={ref}
                                placeholder="prefabs"
                                renderInput={(params) => <TextField {...params} label="Object" />}
                            />
                        )}/>
                </CardContent>
            </Card>
        </FormControl>
        <FormControl>
            <Button variant="contained" type="submit" style={{margin: "15px"}}>GENERATE JSON</Button>
        </FormControl>
    </form>
    <div>
        {jsonRepresentation}
    </div></div>
}

export default RoomForm