import React from 'react';

const Kudo = (props) => (

  props.kudo.map((kudo, i) => (
    <div key={i}>
      <p>Title: {kudo.title}</p>
      <p>From: {kudo.from}</p>
      <p>To: {kudo.to}</p>
      <p>Message: {kudo.message}</p>
    </div>
  )
      ));

export default Kudo;