export type Room = {
    keys: RoomKey[]
    solution: RoomKey[]
    machines: Machine[]
}

export type RoomKey = {
    prefab: Prefab
    name: string
    color: Color
    scale: number
    frameImage: string
}

export type Machine = "ChangeColorMachine" | "ReadColorMachine" | "ChangeScaleMachine" | "BrowserMachine"

export type Prefab = "Cube" | "Triangle" | "Sphere" | "Cylinder" | "Frame" | "Fish" | "Steak" | "Carrot" | "Bread"

export type Color = {
    r: number
    g: number
    b: number
}