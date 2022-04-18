const defaultRequestConfig = {
  headers: {
    Accept: 'application/vnd.github.v3.text-match+json',
  },
};

export async function fetchData<T>(
  url: string,
  requestConfig: object = defaultRequestConfig,
): Promise<T> {
  try {
    const response = await fetch(url, requestConfig);
    const data = await response.json();

    if (!response.ok) {
      throw data.message;
    }
    return data;
  } catch (err) {
    throw `Error Getting data. The error is: ${err}`;
  }
}
