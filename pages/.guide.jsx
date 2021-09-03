



export default function addingGuide(){
    
    return <div className="section markdown-body">
        <h1 id="adding-new-example">Adding new example</h1>
        To add a new example 
        <ol>
            <li>
                fork this <a href="https://github.com/4ov/vexamples" target="_blank" referrerPolicy="no-referrer">repo</a>
            </li>
            <li>
                clone it ( <code>git clone https://github.com/YOUR_USERNAME/vexamples</code> )
            </li>
            <li>
                add a markdown file to <code>_examples</code> directory
            </li>
            <li>
                run <code>git add .</code> 
            </li>
            <li>
                then commit your changes <code>git commit -m 'create mew example'</code>
            </li>
            

        </ol>
    </div>
}