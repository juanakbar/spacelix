import React from 'react';

export default function Markdown({ children }) {
    return (
        <div dangerouslySetInnerHTML={{__html: marked(children)}}/>
            );
        }
