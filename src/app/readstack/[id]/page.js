export default async function Readstack(props){
    const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL2}topics/${props.params.id}`);
    const topic = await resp.json();
    return(
        <>
            <h2>{topic.title}</h2>
            {topic.body}
        </>
    )
}