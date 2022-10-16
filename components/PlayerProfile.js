import { useState, useEffect } from 'react';
import DungeonCard from './DungeonCard';
import { Grid, InputAdornment } from '@mui/material';
import { Container } from '@mui/system';

function PlayerProfile({ name }) {
  const dungeons = [
    "Decrepit Sewers",
    "Infested Pit",
    "Lost Sanctuary",
    "Underworld Crypt",
    "Sand-Swept Tomb",
    "Ice Barrows",
    "Undergrowth Ruins",
    "Galleon's Graveyard",
    "Fallen Factory",
    "Eldritch Outlook",
  ]

  const [stats, setStats] = useState(null)
  const [uuid, setUuid] = useState(null)

  useEffect(() => {
    fetchStats()
    fetchUuid()
  }, []);

  function fetchStats() {
    fetch(`https://api.wynncraft.com/v2/player/${name}/stats`)
      .then((response) => response.json()) 
      .then((data) => setStats(data));
  }

  function fetchUuid(){
    fetch(`https://api.ashcon.app/mojang/v2/user/${name}`)
      .then((response) => response.json()) 
      .then((data) => {
        setUuid(data.uuid)
        console.log(data.uuid)
      });
  }
  
  if(!stats){
    return
  }

  
  let totalDungeons = 0
  const classes = stats.data[0].classes
  for (let character of classes) {
    totalDungeons += character.dungeons.completed
  }

  return (
    <div className="App">
      <h1>{name} {totalDungeons}</h1>
      <img src={`https://visage.surgeplay.com/bust/${uuid}`}/>
      <Container>
        <Grid container rowSpacing={5} columnSpacing={5}>
          {
            stats &&
            dungeons.reverse().map((dungeon, i) => {
              return (
                <Grid item xs={3} key={i} sx={{minWidth:280}}>
                  <DungeonCard name={dungeon} playerStats={stats} />
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </div>
  );
}

export default PlayerProfile;