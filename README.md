# ARPrint 
Photography Print Shop with Web‑Based Augmented Reality

ARPrint is a full‑stack marketplace that lets photographers sell their art and lets customers preview prints in their own space before buying. Photographers can sign up, upload images, and set print options (sizes, borders, pricing). Shoppers browse artist portfolios, customize print details, and use their phone’s camera to see the artwork to scale on their wall—no app download required.

## Home-page
![alt text](public/images/home.png)

## Sign in & User Account
![alt text](public/images/sign.png)

## Search Artist Page 
![alt text](public/images/search.png)

## Artist Public Profile
![alt text](public/images/artist.png)

## Unique Photo page
![alt text](public/images/photo.png)

## Augmented Reality With Unique Photo
screenshots displaying how a print looks on your own wall thorugh your phone camera, straight from the browser.
![alt text](public/images/ar.png)

## 🛠️ Tech Stack
- Backend: Node.js · Express · MongoDB (Mongoose ODM)
- Views & UI: EJS server‑rendered templates
- Augmented Reality: A‑Frame + 8th Wall Web (marker‑less WebXR)
- Auth: Passport.js (local, Google, Facebook, GitHub)
- Payments & Orders: Stripe API + Webhooks
- Image Handling: Multer uploads → /uploads directory (pluggable to S3)