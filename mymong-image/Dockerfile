# step1
FROM alpine

#step2 : install software
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/main' >> /etc/apk/repositories
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/community' >> /etc/apk/repositories
RUN apk update
RUN apk add mongodb=3.4.4-r0
RUN apk add binutils

#step2.5 : configure software
VOLUME [ "/data/db" ]
WORKDIR /data
EXPOSE 27017

#step3 : set default command
CMD [ "mongod" ]