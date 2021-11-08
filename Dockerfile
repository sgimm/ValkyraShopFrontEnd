FROM nginx:1.15.8-alpine

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./wwwroot/index.html /usr/share/nginx/html/index.html
COPY ./wwwroot/js/*.js /usr/share/nginx/html/js/
COPY ./wwwroot/js/ComponentBase/*.js /usr/share/nginx/html/js/ComponentBase/
COPY ./wwwroot/js/Controls/*.js /usr/share/nginx/html/js/Controls/
COPY ./wwwroot/js/Dtos/*.js /usr/share/nginx/html/js/Dtos/
COPY ./wwwroot/js/Helpers/*.js /usr/share/nginx/html/js/Helpers/
COPY ./wwwroot/js/Views/*.js /usr/share/nginx/html/js/Views/
COPY ./wwwroot/css/*.css /usr/share/nginx/html/css/
COPY ./wwwroot/images/*.png /usr/share/nginx/html/images/