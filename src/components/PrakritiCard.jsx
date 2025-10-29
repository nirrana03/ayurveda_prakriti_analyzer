import React from 'react';

export default function PrakritiCard({title, body}){
  return (
    <article className="prakriti-card">
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}