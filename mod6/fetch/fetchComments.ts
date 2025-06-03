interface SwapiFilm {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  [key: string]: any;
}

interface SwapiFilmResponse {
  count: number;
  results: SwapiFilm[];
}

async function fetchAndModify(): Promise<void> {
  try {
    // GET request
    const getRes = await fetch('https://swapi.info/api/films/');
    if (!getRes.ok) throw new Error('Failed to fetch SWAPI films');

    const data: SwapiFilm[] = await getRes.json();

    // Trim each film to first 3 properties only
    const trimmedFilms = data.map(film => {
      const entries = Object.entries(film).splice(0, 3); // first 3 entries
      return Object.fromEntries(entries);
    });

    console.log('Fetched films with first 3 properties each:', trimmedFilms);

    // PATCH request (expected to fail because SWAPI is read-only)
    console.log('Attempting PATCH request to SWAPI...');

    const patchRes = await fetch('https://swapi.info/api/films/1/', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'New Title' }),
    });

    if (!patchRes.ok) {
      console.warn('PATCH request failed as expected:', patchRes.status, patchRes.statusText);
    } else {
      const patchData = await patchRes.json();
      console.log('PATCH response:', patchData);
    }
  } catch (error: any) {
    console.error('Error:', error.message || error);
  }
}

fetchAndModify();
