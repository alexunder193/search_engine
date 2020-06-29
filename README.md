# search_engine
We search for words into books with elastic search(inverted index).
We download the books dataset externally.
There is a UI in which we can interact with the Application. When we type a word in the search engine
we can see the number of hits and the whole phrase in the sentence.
We have 3 docker containers:
1. gs-frontend : Vue js Application
2. gs-api : Backend search endpoints with node.js framework Koa (More lightweight than Express)
3. gs-search : Elasticsearch container for text search.

Run locally
1. git clone https://github.com/alexunder193/search_engine
2. cd search_engine (get into folder search_engine)
3. download books from https://drive.google.com/drive/folders/1dTDZ9HtjXQkQnT2Sf-Xj5Z9Mwk1Js1uX?usp=sharing
4.Extract zip file and place "books" folder in the same level as public/ and server/ folders.
5. docker-compose build
6. docker-compose up
7. docker exec gs-api "node" "server/load_books.js" (script need approximately 1 minute to complete).
8. Go to http://192.168.99.100:8080/ to use the search engine via UI.