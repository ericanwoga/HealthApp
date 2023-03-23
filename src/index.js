import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css'
import { Header } from 'semantic-ui-react'

const App = () => (
    // Screen size based on that of a recent iPhone (2532px X 1170px)
    <div style={{padding:'10px', position:'relative', top:'10px', left:'10px', height:'2532px', width:'1170px', overflow:'hidden', borderStyle:'solid', borderRadius:'200px'}}>
        <Header size='huge' textAlign='center'>Hello World!</Header>
    </div>
)

const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);
root.render(<App callback={() => console.log("renderered")} />);