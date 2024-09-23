# Attendance Tracker System

Welcome to the **TrackMate**, your go-to solution for managing employee attendance with ease! This platform allows employees to log in with their unique ID, mark their attendance, view records by year and month, and manage their attendance history effortlessly. It streamlines attendance tracking with automatic date recognition and user-friendly features for correcting errors.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Database Schema](#database-schema)
- [Usage](#usage)
- [Demo](#demo)

## Features
- **Login**: Employees can securely log in using their unique ID to access the system.
- **Automatic Date Detection**: Upon logging in, the current date is automatically displayed for easy attendance marking.
- **Mark Attendance**: Employees can mark themselves as present for the day by clicking a button.
- **Monthly & Yearly Overview**: The app provides a detailed breakdown of attendance for each month and year, showing the number of days present and a list of the dates.
- **Manage Attendance**: If a date is incorrectly marked, employees can easily delete the wrong entry.
- **Secure Logout**: Employees can securely log out of the system after managing their attendance.

## Tech Stack

- **HTML**: Provides the structure and content of the web pages.
- **CSS**: Enhances the appearance and layout of the web interface.
- **React.js**: Used for building the user interface of the application.
- **Vite**: A fast build tool for modern web development.
- **Node.js**: JavaScript runtime used for backend development.
- **Express.js**: Web framework for building APIs and handling backend logic.
- **MongoDB**: NoSQL database for storing attendance and user information.

## Database Schema

The MongoDB database is designed with collections like:

- **Users**: Stores user (employee) details such as ID, name, and login credentials.
- **Attendance**: Stores attendance records, including dates and status (present/absent).
- **Logs**: Tracks updates, deletions, and any corrections made by users.

## Usage

The **TrackMate** is designed to make employee attendance management straightforward and efficient. With automatic date recognition and a simple one-click interface for marking attendance, it reduces human error and provides employees with a quick overview of their records.

This system is ideal for companies looking for a minimalistic and efficient way to handle attendance tracking, with features for correcting mistakes and managing records across different time periods.

## Demo
A demo of the Attendance Tracker System is available [here](#).

