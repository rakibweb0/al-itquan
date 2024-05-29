import { promises as fs } from 'fs';
export async function getData() {
    const data = await fs.readFile(process.cwd() + '/database/data.json', 'utf8')
    const res = JSON.parse(data)
    return res
}