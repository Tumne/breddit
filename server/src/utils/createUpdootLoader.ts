import DataLoader from 'dataloader';
import { Updoot } from '../entities/Updoot';

// [{postId, userId}]
// [{postId, userId, value: 1}]
export const createUpdootLoader = () =>
  new DataLoader<{ postId: number; userId: number }, Updoot | null>(
    async (keys) => {
      console.log('keys: ', keys);
      const updoots = await Updoot.findByIds(keys as any);
      const updootIdsToUpdoot: Record<string, Updoot> = {};
      updoots.forEach((updoot) => {
        updootIdsToUpdoot[`${updoot.userId}|${updoot.postId}`] = updoot;
      });

      return keys.map(
        (key) => updootIdsToUpdoot[`${key.userId}|${key.postId}`]
      );
    }
  );
