import { Metadata } from "next";
import axios from "axios";

async function getUserDetails() {
    // This is bad, needs to be fixed
    const response = await axios.get("http://localhost:3000/api/user");
    return response.data;
}

export const metadata: Metadata = {
    title: "Dashboard",
    description: "The description is here"
}

// async component (not in React) - only in server components
export default async function Home() {

    // -- ARTIFICIAL DELAY
    // This allows the component to load after 5 seconds
    // Introduce loader in loading.tsx
    // await new Promise((r) => setTimeout(r, 5000));

    // Harder to handle things with Recoil
    const userData = await getUserDetails();

    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="flex justify-center">
                <div className="border p-8 rounded">
                    <div>
                        Name: {userData?.name}
                    </div>
                    <div>
                        Email: {userData?.email}
                    </div>
                </div>
            </div>
        </div>
    );
}
