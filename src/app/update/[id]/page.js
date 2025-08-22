'use client'
  
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
  
export default function Update(props){
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  async function refresh(){
    const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL-1}cellStaffs/${id}`);
    const cellStaffs = await resp.json();
    setTitle(cellStaffs.title);
    setBody(cellStaffs.body);
  }
  useEffect(()=>{
    refresh();
  },[]);

  return<form onSubmit={async evt=>{
    evt.preventDefault();
    const title = evt.target.title.value;
    const body = evt.target.body.value;
    
    const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL-1}cellStaffs/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title, body})
    });

    
      
    const cellStaffs = await resp.json();
    router.push(`/read/${cellStaffs.id}`);
    router.refresh();
    }}>
    
    <h2>Update</h2>
    <p><input type="text" name="title" placeholder="title" value={title} onChange={e=>setTitle(e.target.value)} /></p>
    <p><textarea name="body" placeholder="body" value={body} onChange={e=>setBody(e.target.value)}></textarea></p>
    <p><input type="submit" value="update" /></p>
  </form>
}