import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { randomUUID } from 'node:crypto';

export async function saveInquiry(payload: Record<string, unknown>) {
  // shortcut: local preview uses disk; configure persistent storage before hosting on ephemeral servers.
  const directory=process.env.KEY24_INTAKE_DIR || join(process.cwd(),'.data','inquiries');
  await mkdir(directory,{recursive:true,mode:0o700});
  const id=randomUUID();
  await writeFile(join(directory,`${id}.json`),JSON.stringify({id,...payload},null,2),{flag:'wx',mode:0o600});
  return id;
}
