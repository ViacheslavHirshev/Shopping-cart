export async function getData<T>(url: string): Promise<T>
{
    return fetch(url)
        .then((response) =>
        {
            if (!response.ok)
            {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .catch((error) =>
        {
            console.error("Error fetching data:", error);
            throw error;
        });
}