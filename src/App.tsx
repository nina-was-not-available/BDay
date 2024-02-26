import React from 'react';
import './App.css'
import {OneMoreSharik} from "./OneMoreSharik";

const App = () => {

    const colors = ['red', 'blue', 'yellow', 'lightgreen', 'lightblue', 'lightpink', 'orange', 'violet'];

    return (
        <div className={"App"}>
            <div className={'shariks'}>
                {[...Array(colors.length)].map((_, index) => (
                    <OneMoreSharik color={colors[index]} speed={Math.random() * 4 + 1} key={index} index={index}
                                   total={colors.length}/>
                ))}
            </div>
            <div className={'content'}>
                <h1>HAPPY BIRTHDAY!!! 🥳🥳🥳</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/d1W7vaWfUFs?si=KUfXBJOayDi3p9da"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            </div>
        </div>
    );
};
export default App;