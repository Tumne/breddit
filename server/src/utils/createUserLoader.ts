import DataLoader from 'dataloader';
import { User } from '../entities/User';

export const createUserLoader = () =>
  new DataLoader<number, User>(async (userIds) => {
    const users = await User.findByIds(userIds as number[]);
    const userIdToUsers: Record<number, User> = {};
    users.forEach((u) => (userIdToUsers[u.id] = u));

    return userIds.map((userId) => userIdToUsers[userId]);
  });
