import React from "react";
import { Card, Icon } from 'semantic-ui-react';

export default function CharacterCard({
  name,
  image,
  location,
  status,
  episodes
}) {
  const episodesCount = (
    <a href='#'>
      <Icon name='user' />
      {episodes} Episodes
    </a>
  );
  return (
    <Card 
      image={image}
      header={name}
      meta={status}
      description={location}
      extra={episodesCount}
    />
  )
}
