import { airtable } from "./core";
import { z } from "zod";

const textesDuSiteBase = airtable.base("appGoJm0yLoMjVSeC");

const schema = z.array(
  z
    .object({
      fields: z.object({
        URI: z.string(),
        Titre: z.string(),
        Contenu: z.string(),
      }),
    })
    .transform((item) => item.fields),
);

export type TTextesDuSite = z.infer<typeof schema>;

// TODO: remove empty lines
export const textesDuSiteData = textesDuSiteBase("Textes du site")
  .select()
  .all()
  .then(schema.parseAsync);
