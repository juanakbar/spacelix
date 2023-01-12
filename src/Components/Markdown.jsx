import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import { marked } from 'marked';
import '../assets/monokai.css';




export default function Markdown({ children }) {
    useEffect(() => {
        hljs.highlightAll();
    }, []);
    return (
        <div className={'prose prose-lg'} dangerouslySetInnerHTML={{ __html: marked(children) }} />
    );
}
