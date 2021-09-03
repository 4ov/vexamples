


export function slugToTitle(slug){
    return slug.split("-").map((word,idx)=>idx == 0 ? `${word.slice(0, 1).toUpperCase()}${word.slice(1)}` : word).join(" ")
}