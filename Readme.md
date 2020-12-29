https://stackoverflow.com/questions/41984399/denied-requested-access-to-the-resource-is-denied-docker

# build docker
docker build --tag (Version) .

# tag docker before push
docker tag (Version) {docker-hub-username}/{default-repo-folder-name}:version

# push image to hub
docker push {docker-hub-username}/{default-repo-folder-name}:version

# pull on the server 
docker pull {docker-hub-username}/{default-repo-folder-name}:version

# run docker 
docker run -t -i -p 4001:4001 -p 3000:3000 {docker-hub-username}/{default-repo-folder-name}:version
