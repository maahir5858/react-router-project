import { useLoaderData } from "react-router-dom";

export default function Loader() {

    const data = useLoaderData();

    return (
        <>
            <div className="text-center my-35 mb-40 mx-25 text-4xl text-purple-500 font-bold">
                <p className="mb-15 text-6xl text-purple-900 underline underline-offset-10">Random Cat Fact</p>
                <p>{data?.data}</p>
            </div>
        </>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function catFactsLoader() {
    const response = await fetch('https://meowfacts.herokuapp.com');
    if (!response.ok) throw new Error("Could not fetch response from api");
    return response.json();
}