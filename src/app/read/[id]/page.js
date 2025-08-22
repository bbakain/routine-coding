export default async function Read(props){
    const wow = await fetch(`${process.env.NEXT_PUBLIC_API_URL-1}cellStaffs/${props.params.id}`);
    const amazing = await wow.json();
    return(
        <>
            <h2>{amazing.title}</h2>
            {amazing.body}
        </>
    )
}