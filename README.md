# Connectly

A language exchange social platform where you can find native speakers, chat in real time, and hop on video calls.

## What it does

- Auth with JWT stored in httpOnly cookies — signup, login, logout, onboarding flow
- Friend system — send/accept requests, browse recommended users by language profile
- Real-time messaging powered by Stream Chat
- Video calls via Stream Video SDK
- Randomly generated DiceBear avatars on signup

## Tech Stack

**Backend:** Node.js, Express, MongoDB, Mongoose  
**Frontend:** React, TanStack Query, Zustand, DaisyUI, Tailwind  
**Realtime:** Stream Chat & Video SDK

## Getting Started

1. Clone the repo
2. Add your `.env` — MongoDB URI, JWT secret, Stream API key/secret
3. `npm install` in both `/backend` and `/frontend`
4. `npm run dev`
