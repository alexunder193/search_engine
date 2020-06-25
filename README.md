# search_engine
##We search for words into books with elastic search(inverted index).
##We download the books dataset externally.
##We have 3 docker containers:
1)gs-frontend : Vue js Application
2)gs-api : Backend endpoints with node.js framework (More lightweight than Express)
3)gs-search : Elasticsearch container for text search.

##Run locally
1. git clone https://github.com/alexunder193/search_engine
2. cd search_engine (get into folder search_engine)
3. download books from https://drive.google.com/drive/u/0/folders/1dTDZ9HtjXQkQnT2Sf-Xj5Z9Mwk1Js1uX 
(Probably need access to my Google drive to download it.)
4.Extract zip file and place "books" folder in the same level as public/ and server/ folders.
3. docker-compose build
4. docker-compose up
5. docker exec gs-api "node" "server/load_data.js"
6. Go to http://192.168.99.100:8080/ to use the search engine via UI.