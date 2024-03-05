import { db } from "@/lib/db";
import { redirect } from 'next/navigation';
export default async function Page({ params }: { params: { slug: string } }) {
  
    const deleteUser = await db.test.delete({
        where: {
          id: parseInt(`${params.slug}`),
        },
      });

     return redirect('/admin/medee');
  }