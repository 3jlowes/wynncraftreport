import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function DungeonCard({ name, playerStats }) {
  const classes = playerStats.data[0].classes
  let totalNormalDungeons = 0
  let totalCorruptDungeons = 0
  for (let character of classes) {
    // .find Go through every dungeon in the list of dungeons and find the function is true
    const dungeon = character.dungeons.list.find(dungeon => dungeon.name === name)
    const corruptDungeon = character.dungeons.list.find(dungeon => dungeon.name === "Corrupted " + name)
    if (dungeon != null) {
      totalNormalDungeons += dungeon.completed
    }
    if (corruptDungeon != null) {
      totalCorruptDungeons += corruptDungeon.completed
    }
  }
  
  let totalDungeons = totalNormalDungeons + totalCorruptDungeons
  const image = name.replace(" ", "") + ".png"
  return (
    <Card sx={{ maxWidth: 345, height:"100%"}} className="border-container">
      <h3>{name}</h3>
      <CardMedia
        component="img"
        height="256"
        image={`/images/${image}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Divider />
            STATS	CLEARS
          <Divider />
            <div>Total {totalDungeons}</div>
            <div>Normal {totalNormalDungeons}</div>
            {
              totalCorruptDungeons > 0 && <div>Corrupted {totalCorruptDungeons}</div>
            }
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card> 
  );
}