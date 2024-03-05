
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation';

const admin = async () => {
    const session = await getServerSession(authOptions);
    if(session?.user)
    {
        return (
            <div>
                Enter
            </div>
        );
    }

    return redirect('/sign-in');
}

export default admin;