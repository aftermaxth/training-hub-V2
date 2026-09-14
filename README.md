# Training Hub V2

A coaching web app I built to write training and publish it to the runners I coach. No framework, no build step — vanilla HTML, CSS, and JavaScript on top of Supabase.

## Why

I'm a mechanical engineering student. Nothing about this is in my lane, and that was deliberate — I wanted to understand where the front end and back end actually meet, so I built something I'd use every day: a tool for coaching.

The design is mine. Every screen, every function, what the athlete sees versus what the coach sees, was on paper before a line of code existed. Claude wrote the code.

## Stack

- Vanilla HTML/CSS/JS, no build step
- [Supabase](https://supabase.com) for accounts, auth, and storage
- Hosted on Cloudflare Pages
- PWA — installs to a phone home screen

## Screens

- **Home** — snapshot of the current week
- **Week** — the published plan day by day, with today expanded into a logging card (distance, duration, session type, how it felt)
- **Reset** — a Sunday check-in with a nine-area injury scan plus stress, vibe, and notes
- **Goals** — outcome goals, weekly process goals, races, and a trophy shelf
- **Lift** — the current lift block, with exercises on a progression ladder
- **Calendar** — a twelve-week view where each dot scales with that day's mileage

## Coach side

A coach account gets panels an athlete never sees. Pick an athlete, paste a week or a full block of training as JSON, and it runs through a read-only validation step before anything gets written — checking every field, naming what failed and why, and warning before it overwrites something already published.

## Schema

Tables for athletes, athlete config, weeks, sessions, resets, goals, races, and lift cycles. Row-level security scopes visibility per athlete/coach, with column-level guards on top so an athlete can log a session without being able to edit the prescribed workout.

## Status

In active use, coaching real athletes. Still finding bugs as it goes.
