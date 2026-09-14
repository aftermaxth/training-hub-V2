# Training Hub V2

A coaching web app I built to write training and publish it to the runners I coach. Just vanilla HTML, CSS, and JavaScript on top of Supabase.

## Why

I wanted to understand how to use front end and back end, so I built something that would challenge me.

The design is mine. Took along time to flesh it out on paper before Claude wrote the code.

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

## Demo

Two short clips of it in use.

**Coach: paste, validate, publish**
[coach_demo.mp4](coach_demo.mp4)

**Athlete: week view and logging**
[app_demo.mp4](app_demo.mp4)

## Schema

Tables for athletes, athlete config, weeks, sessions, resets, goals, races, and lift cycles. Row-level security scopes visibility per athlete/coach, with column-level guards on top so an athlete can log a session without being able to edit the prescribed workout.

## Status

In active use, coaching real athletes. Still finding bugs as it goes.
