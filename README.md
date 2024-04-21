# Talking to redis via Node.js
* There are various clients that exist that let you talk to redis via Node.js
```
 https://www.npmjs.com/package/redis
```

# Docker Images and commands to access image
```
docker run --name my-redis -d -p 6379:6379 redis
docker exec -it container_id /bin/bash
redis-cli
```

# Redis as DB

* SET/GET/DEL
```
SET mykey "Hello" 
GET mykey
DEL mykey
```

* HSET/HGET/HDEL (H = Hash)
```
HSET user:100 name "John Doe" email "user@example.com" age "30"
HGET user:100 name
HGET user:100 email
```
* You should never use redis as your primary database

# Redis as a queue

* You can also push to a topic / queue on Redis and other processes can pop from it.
* Good example of this is Leetcode submissions that need to be processed asynchronously

* Push to a Queue
```
LPUSH problems 1
LPUSH problems 2
```

* Popping from a queue
```
RPOP problems
RPOP problems 
```

* Blocked pop
```
BRPOP problems 0
BRPOP problems 30
```
# Install

```
yarn init -y
yarn add typescript
yarn tsc --init
yarn add express @types/express 
yarn add redis
```