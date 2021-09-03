import { getPaths } from '../../lib/examples'
import { slugToTitle } from '../../lib/strings'

export default function ExamplesIndex(props){
    const titles = props.slugs.map(slugToTitle)
    console.log(titles);
    return <div className="section flex v-down x-center">
        {
            titles.map((title, idx)=>{
                return <a key={idx} href={`examples/${props.slugs[idx]}`}>{ title }</a>
            })
        }
    </div>
}



export function getStaticProps(ctx){

    return{
        props : {
            slugs : getPaths()
        }
    }
}