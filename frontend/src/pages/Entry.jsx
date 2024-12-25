import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Entry(props) {
    
    const [str, setStr] = useState('');
    const [name, setName] = useState('');

    var chatString = "Enter a name for chatting"

    useEffect(() => {
        for (let i = 0; i < chatString.length + 1; i++) {
            setTimeout(() => {
                setStr(chatString.substring(0, i) + "_");
                if (i === chatString.length) setStr(chatString);
            }, i * 60);
        }
    }, []);

    function getName(event) {
        setName(event.target.value);
    }

    return (
        <div>
            <div className="entry-container">
                <h3>{str}</h3>
                <h4>{name.length == 0?null:"Hello, "+name}</h4>
                <input onChange={getName}/>
                <button>Chat</button>
                <h4>online: {props.count} {props.count == 1?"(you)":null}</h4>
            </div>
        </div>
    );
}

export default Entry;
