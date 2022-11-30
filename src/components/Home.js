import React, { Component } from "react"
import { Button, Nav } from "react-bootstrap";

function Home() {
    return (
        <div>
            <Button variant="light" className="buttons" type="buttonHomme" size="lg" ><Nav.Link href="/calendar" variant="info">Boton 1</Nav.Link>{' '}
            </Button>
            <Button variant="light" className="buttons" type="buttonHomme" size="lg" ><Nav.Link href="/calendar" variant="info">Boton 2</Nav.Link>{' '}
            </Button>
        </div>);
}

export default Home;