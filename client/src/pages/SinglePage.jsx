import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function SinglePage() {

    const { id } = useParams();
    const { lang } = useParams();

    console.log(id);
    console.log(lang);
  return (
    <div>singlePage</div>
  )
}

export default SinglePage