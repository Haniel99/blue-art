'use client'
import { useRef } from "react";
import { VoxelRabbitContainer } from "./voxel-rabbit-loader";


const VoxelRabbit = () => {
    const container = useRef();
    return (<VoxelRabbitContainer ref={container}>
        <>Modelo</>
    </VoxelRabbitContainer>)
}


export default VoxelRabbit;