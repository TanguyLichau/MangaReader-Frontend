const API_URL = "http://192.168.1.54:3000";
const USERNAME = "tanguy";
const PASSWORD = "mdp";

function fetchJSON(response) {
  return response.json();
}

export async function getJWT() {
  try {
    const response = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: USERNAME,
        password: PASSWORD,
      }),
    });
    return fetchJSON(response);
  } catch (error) {
    console.error(error);
  }
}

export async function getAllMangas() {
  try {
    const response = await fetch(`${API_URL}/manga`);
    return fetchJSON(response);
  } catch (error) {
    console.error(error);
  }
}

export async function createManga(manga) {
  const JWT_TOKEN = await getJWT();
  try {
    const response = await fetch(`${API_URL}/manga`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JWT_TOKEN.token,
      },
      body: JSON.stringify({
        name: manga.name,
        lastChapterRead: manga.lastChapterRead,
      }),
    });
    return fetchJSON(response);
  } catch (error) {
    console.error(error);
  }
}

export async function updateMangaAPI(manga) {
  const JWT_TOKEN = await getJWT();
  try {
    const response = await fetch(`${API_URL}/manga/${manga._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JWT_TOKEN.token,
      },
      body: JSON.stringify({
        name: manga.name,
        lastChapterRead: manga.lastChapterRead,
      }),
    });
    return fetchJSON(response);
  } catch (error) {
    console.error(error);
  }
}

export async function deleteMangaAPI(mangaId) {
  const JWT_TOKEN = await getJWT();
  try {
    await fetch(`${API_URL}/manga/${mangaId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JWT_TOKEN.token,
      },
    });
  } catch (error) {
    console.error(error);
  }
}
