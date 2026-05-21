# Deploying to Your Own Domain

This guide walks you through deploying your landing page to a custom domain using Docker + Nginx.

---

## 1. Build & Push the Docker Image

```bash
# Build the image
docker build -t my-landing-page .

# (Optional) Tag for a registry, e.g. Docker Hub
docker tag my-landing-page yourdockerhubuser/my-landing-page:latest
docker push yourdockerhubuser/my-landing-page:latest
```

---

## 2. Point Your Domain to Your Server

1. Log in to your domain registrar (Namecheap, GoDaddy, Cloudflare, etc.).
2. Create an **A record** pointing your domain (e.g. `example.com`) to your server's public IP address.
3. Optionally add a **CNAME** for `www` → `example.com`.
4. DNS propagation can take up to 48 hours (usually under 1 hour).

---

## 3. Run the Container on Your Server

SSH into your server and run:

```bash
docker run -d \
  --name landing-page \
  --restart unless-stopped \
  -p 80:80 \
  -p 443:443 \
  my-landing-page
```

---

## 4. Enable HTTPS with Let's Encrypt (Recommended)

Use **Certbot** with Nginx on your server (outside Docker) or use the
[nginx-proxy + acme-companion](https://github.com/nginx-proxy/acme-companion) Docker setup.

### Option A — Certbot directly on the server

```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx -y

# Obtain a certificate (replace with your domain)
sudo certbot --nginx -d example.com -d www.example.com

# Auto-renewal is set up automatically; test it with:
sudo certbot renew --dry-run
```

### Option B — docker-compose with automatic HTTPS

Create a `docker-compose.yml` on your server:

```yaml
version: '3.9'
services:
  app:
    image: my-landing-page          # or yourdockerhubuser/my-landing-page:latest
    restart: unless-stopped
    environment:
      - VIRTUAL_HOST=example.com,www.example.com
      - LETSENCRYPT_HOST=example.com,www.example.com
      - LETSENCRYPT_EMAIL=you@example.com

  nginx-proxy:
    image: nginxproxy/nginx-proxy
    restart: unless-stopped
    ports:
      - '80:80'
      - '443:443'
    volumes:
      - /var/run/docker.sock:/tmp/docker.sock:ro
      - certs:/etc/nginx/certs
      - vhost:/etc/nginx/vhost.d
      - html:/usr/share/nginx/html

  acme-companion:
    image: nginxproxy/acme-companion
    restart: unless-stopped
    volumes_from:
      - nginx-proxy
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - acme:/etc/acme.sh

volumes:
  certs:
  vhost:
  html:
  acme:
```

Then run:

```bash
docker compose up -d
```

---

## 5. Update nginx.conf for Your Domain (Optional)

Edit `nginx.conf` before building if you want to lock the server name:

```nginx
server {
    listen 80;
    server_name example.com www.example.com;
    root /usr/share/nginx/html;
    index index.html;

    # Redirect HTTP → HTTPS
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name example.com www.example.com;
    root /usr/share/nginx/html;
    index index.html;

    ssl_certificate     /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## 6. Alternative — Deploy Without Docker

### Netlify / Vercel (easiest)

1. Push your code to GitHub.
2. Import the repo in [Netlify](https://netlify.com) or [Vercel](https://vercel.com).
3. Set **build command** → `npm run build` and **publish directory** → `dist`.
4. Add your custom domain in the platform's domain settings and follow their DNS instructions.

### Static hosting (AWS S3 + CloudFront, GitHub Pages, etc.)

1. Run `npm run build` locally.
2. Upload the contents of the `dist/` folder to your static host.
3. Configure the host to serve `index.html` for all routes (SPA mode).
4. Point your domain's DNS to the host's endpoint.

---

## Quick-Reference Checklist

- [ ] Server / hosting provider provisioned
- [ ] Domain A record pointed to server IP
- [ ] Docker image built and running on port 80
- [ ] HTTPS certificate obtained (Certbot or acme-companion)
- [ ] `nginx.conf` updated with real domain name
- [ ] `www` redirect configured
- [ ] Test: `https://example.com` loads correctly
