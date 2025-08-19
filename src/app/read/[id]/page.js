export default async function Read(props){
    const wow = await fetch(`http://localhost:9998/cellStaffs/${props.params.id}`);
    const amazing = await wow.json();
    return(
        <>
            <h2>{amazing.title}</h2>
            {amazing.body}
        </>
    )
}