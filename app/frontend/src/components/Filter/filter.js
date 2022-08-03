import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option) => option.title,
});

export default function Filter() {
  return (
    <Autocomplete
      id="filter"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      filterOptions={filterOptions}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Custom filter" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Wind Rises', year: 1994 },
  { title: 'One Piece', year: 1972 },
  { title: 'ORIENT', year: 1974 },
  { title: 'Classroom', year: 2008 },
  { title: 'aharen san wa hakarenai', year: 1957 },
  { title: "World Trigger", year: 1993 },
  { title: 'Demon Slayer', year: 1994 },
  { title: 'Love of Kill', year: 2003,},
  { title: 'The 8th son', year: 1966 },
  { title: 'Yu-Gi-Oh', year: 1999 },
  { title: 'LINK CLICK',year: 2001,},
  { title: 'Plunderer',year: 1980,},
  { title: 'Ahiru no Sora', year: 1994 },
  { title: 'Attack on Titan', year: 2010 },
  { title: 'SPY x FAMILY',year: 2002,},
  { title: '86 EIGHTY-SIX', year: 1975 },
  { title: 'TSUKIMICHI', year: 1990 },
  { title: 'Horimiya', year: 1999 },
  { title: 'RWBY', year: 1954 },
  { title: 'Food Wars',year: 1977,},
  { title: 'Worlds End Harem', year: 2002 },
  { title: 'Masamune-kuns revenge', year: 1995 },
  { title: 'Cardfight vanguard', year: 1991 },
  { title: "Spirited Away", year: 1946 },
  { title: 'Grave of the Fireflies', year: 1997 },
  { title: 'Your Name', year: 1995 },
  { title: 'Nausicaä of the Valley of the Wind', year: 1994 },
  { title: 'Tokyo Godfathers', year: 2001 },
  { title: 'Paprika', year: 1998 },
  { title: 'I Lost My Body', year: 1968 },
  { title: 'Weathering with You', year: 1998 },
  { title: 'Wolf Children', year: 2014 },
  { title: 'Raya', year: 1942 },
  { title: 'Spider-Man', year: 1931 },
  { title: 'Klus', year: 1960 },
  { title: 'Soul', year: 1999 },
  { title: 'Inside out', year: 2011 },
  { title: 'Mary and Max', year: 1936 },
  { title: 'Wolfwalkers', year: 1981 },
  { title: 'Zootopia', year: 1954 },
  { title: 'Boss-Baby', year: 2002 },
  { title: 'Fantastic Mr. Fox', year: 2006 },
  { title: 'Kubo and the Two Strings', year: 1991 },
  { title: 'Big Hero 6 ', year: 1985 },
  { title: 'The Secret Life of Pets', year: 2014 },
  { title: 'Coco', year: 2000 },
  { title: 'The Emoji Movie', year: 2000 },
  { title: 'The Mitchells vs the Machines ', year: 2006 },
  { title: 'Wreck-It Ralph ', year: 1994 },
  { title: 'The Little Prince', year: 1979 },
  { title: 'The Lego Movie', year: 1979 },
  { title: 'Moana', year: 1950 },
  { title: 'Despicable Me',year: 1964,},
  { title: 'The Little Mermaid', year: 1940 },
  { title: 'Luca', year: 1988 },
  { title: 'Finding Dory', year: 2006 },
  { title: 'My Life as a Zucchini', year: 1988 },
  { title: 'The Book of Life ', year: 1957 },
  { title: 'Lilo & Stitch', year: 2012 },
  { title: 'Sing', year: 1980 },
  { title: 'Cars', year: 2008 },
  { title: 'The Princess and the Frog', year: 1999 },
  { title: 'Ferdinand ', year: 2012 },
  { title: 'Minions ', year: 1997 },
  { title: 'Happy Feet', year: 1986 },
  { title: 'The Good Dinosaur', year: 2003 },
  { title: 'Early Man', year: 1984 },
  { title: 'Onward', year: 1957 },
  { title: 'Home', year: 1981 },
  { title: 'Mulan', year: 1941 },
  { title: 'The Iron Giant ', year: 1959 },
  // End
  { title: 'Vertigo', year: 1958 },
  {
    title: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  {
    title: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];