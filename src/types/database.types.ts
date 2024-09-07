// npx suapbase login --token SUPABASE_ACCESS_TOKEN
// npx supabase gen types typescript --project-id byesrobylnspamdmwuuv > src/types/database-generated.types.ts
import { MergeDeep } from "type-fest";
import { Database as DatabaseGenerated } from "./database-generated.types";
export type {
  Json,
  Tables,
  TablesInsert,
  TablesUpdate,
  Enums,
} from "./database-generated.types";

// Override the type for a specific column in a view:
export type Database = MergeDeep<
  DatabaseGenerated,
  {
    public: {
      // Views: {
      //   movies_view: {
      //     Row: {
      //       // id is a primary key in public.movies, so it must be `not null`
      //       id: number;
      //     };
      //   };
      // };
    };
  }
>;
