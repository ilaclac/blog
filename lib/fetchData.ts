import Logger from "./logger";

export function getApiUrl(path: string) {
  return `${process.env.API_URL}${path}`;
}

export async function fetchData(path: string) {
  const requestUrl = getApiUrl(path);

  try {
    const response = await fetch(requestUrl);

    // handle bad responses
    if (!response.ok) {
      Logger.error(
        `Bad response from API: ${requestUrl} : ${response.status} ${response.statusText}`,
        JSON.stringify(response)
      );

      return null;
    }
    return await response.json();
  } catch (error) {
    Logger.error(`Error fetching data from API.`, error);
  }
}
