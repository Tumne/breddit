# Breddit 🍞

_Because bread has feelings too ..._ 😢

Live website at https://breddit.co/

### Tech Stack

The #1 Bread Reddit clone on the web (but really just an excuse to use the following technologies):

- React
- TypeScript
- GraphQL
- URQL/Apollo
- Node.js
- PostgreSQL
- TypeORM
- Redis
- Next.js
- TypeGraphQL
- Chakra

### Getting started

Make sure these are installed and/or running in the background:

- node version (10.x || 12.x || 14.x)
- redis server
- postgres

#### Installation server:

To start backend, navigate into the `server` folder:

```
yarn
yarn build
yarn dev
```

Then you can open up apollo graphql at http://localhost:4000/graphql

NOTE: You will have to configure the `.env` file and `ormconfig.json` with your postgres credentials. In addition, I have provided an easy way to migrate tables and dummy data into your db. In `src/index.ts` uncomment the commented out code to run migration only once.

#### Installation web:

To start frontend, navigate into the `web` folder:

```
yarn
yarn dev
```

Then you can open up http://localhost:3000/

### Voila!

And there you have it, a toast to all things bread!
