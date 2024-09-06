import React from 'react'
import ReactDOM from 'react-dom/client'

const Booklist=()=>{
    <section>
    <Book/>
    </section>
}

const Book=()=>{
    return (<article>
    <Image/>
    <Title/>
    <Author/>
    </article>)
}

const Image=()=>{
    return (<img src="https://m.media-amazon.com/images/I/51wxQRFK+iL._SX342_SY445_.jpg"/>)
}

const Title=()=>{
    return (<p>World’s Greatest Books For Personal Growth & Wealth</p>)
}

const Author=()=>{
    return (<p>Dale Carneige</p>)
}

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<Booklist/>)

