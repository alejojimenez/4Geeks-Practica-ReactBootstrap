import React from 'react';
import HeaderSection from '../components/HeaderSection';
import { ListGroup } from 'react-bootstrap';

const Tasks = () => {

    return (
        <>
            <HeaderSection 
                title = 'Todas las tareas'
                description = 'Listado completo de tareas'
            />
            <ListGroup>
                <ListGroup.Item>Tarea 1</ListGroup.Item>
                <ListGroup.Item>Tarea 2</ListGroup.Item>
                <ListGroup.Item>Tarea 3</ListGroup.Item>
                <ListGroup.Item>Tarea 4</ListGroup.Item>
                <ListGroup.Item>Tarea 5</ListGroup.Item>
                <ListGroup.Item>Tarea 6</ListGroup.Item>
            </ListGroup>
        </>
    )

}

export default Tasks;