import { toast } from "react-toastify";

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

export function displaySuccessToast(message: string): void
{
    toast.success(message, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
    });
}

export function displayErrorToast(message: string): void
{
    toast.error(message, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
    });
}