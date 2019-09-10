import { Request } from 'express';
import * as SteamAPI from 'steamapi';

const steam = new SteamAPI('BFDE1D9F980FA41E09F683B55C15DAA0');

export async function getSteamProfileID(req: Request) {
  const id = req.params.id;

  try {
    return await steam.resolve(`https://steamcommunity.com/id/${id}`);
  } catch (error) {
    throw new Error(error);
  }
}

export async function getSteamProfileDetails(req: Request) {
  const id = req.params.id;

  try {
    return await steam.getUserSummary(id);
  } catch (error) {
    throw new Error(error);
  }
}
