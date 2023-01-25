profile page modal
logout

server {
        listen 80;
        listen [::]:80;

        root /var/www/terrafood/html;
        index index.html index.htm index.nginx-debian.html;

        server_name terrafood www.terrafood;

        location / {
                try_files $uri $uri/ =404;
        }
}

