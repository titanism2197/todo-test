import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("todo_list")
    .select("*")
    .limit(10);
  if (error) {
    console.error(error);
    return <div>{error.message}</div>;
  }
  console.log(data);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
  );
}
