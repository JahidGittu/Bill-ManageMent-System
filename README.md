# 💡 Bill Management Website | বিল ম্যানেজমেন্ট ওয়েবসাইট

এই প্রজেক্টটি একটি সুন্দর ও সহজ বিল পেমেন্ট প্ল্যাটফর্ম যেখানে ইউজাররা তাদের বিদ্যুৎ, পানি, গ্যাস ইত্যাদি ইউটিলিটি বিল গুলো দেখতে এবং পেমেন্ট করতে পারে।

## 🌐 Live Website
🔗 [Click Here to Visit](https://bill-management-system-1b076.web.app/)

## 🎯 Project Purpose
একটি ইউজার-ফ্রেন্ডলি ওয়েবসাইট তৈরি করা যেখানে ইউজার লগইন করে তাদের বিভিন্ন বিল দেখতে ও পরিশোধ করতে পারবে, পাশাপাশি নিজের প্রোফাইল ও কার্ড ব্যবস্থাপনাও করতে পারবে।

---

## 🚀 Key Features

### 🔐 Authentication
- Email & Password Login/Register
- Google Login (Social Auth)
- Forget Password (No email verification)
- Firebase Authentication with `.env` config

### 📄 Pages & Routing
- Home Page (with slider & utility cards)
- Login & Register Pages
- Bills Page (JSON data based)
- Bill Details Page (payment with balance deduction)
- My Cards Page (showing card list)
- My Profile Page (photo, name, email update)

### 🧾 Bills System
- JSON file থেকে বিল ডেটা লোড করা হয়
- “Pay Now” বাটনে ক্লিক করলে বিল পেমেন্ট হয়ে যায় এবং ব্যালেন্স কমে যায়
- Protected Route ছাড়া অন্য পেজে ঢোকা যায় না

### 💳 Cards System
- ইউজারের কার্ডগুলো আলাদা পেজে সুন্দরভাবে শো করে

### 🎨 UI/UX
- TailwindCSS & DaisyUI দিয়ে রেসপনসিভ ডিজাইন
- SwiperJS দিয়ে স্মার্ট স্লাইডার
- Toastify দিয়ে ইউজার ফিডব্যাক

---

## 🛠️ Used NPM Packages

| Package | Description |
|--------|-------------|
| `react` | Frontend Framework |
| `react-router` | Routing System |
| `firebase` | Authentication |
| `react-toastify` | Toast Notification |
| `swiper` | Image Slider |
| `react-icons` | Beautiful Icons |
| `lucide` | Clean SVG Icons |
| `@headlessui/react` | Accessible UI elements |
| `tailwindcss` | Utility-First CSS |
| `daisyui` | Tailwind CSS Component Library |
| `@vitejs/plugin-react` | React Plugin for Vite |
| `vite` | Build Tool for React |

---

## 🧪 Bonus Features
- 🔒 Protected Route (Without login, user can't access internal pages)
- 💰 Real-time balance deduction after bill payment
- 📸 Profile update with image URL
- ☁️ Hosted with Firebase

---

## 👨‍💻 Developer Info

Developed by: [Jahid Hossen]  
GitHub: [https://github.com/JAHIDUTC]  
Email: [jahid.hossen.me@gmail.com]

---

## 📸 Screenshots

> 🖼️ Screenshots of Home Page, Bills Page, Bill Payment Page, and Profile Page can be added here for better presentation.

---

**শেষ কথা 🥰**  
এই প্রজেক্টটি তৈরি করার মূল উদ্দেশ্য হলো ইউজারদের জন্য একটি সিম্পল অথচ কার্যকর বিল ম্যানেজমেন্ট সিস্টেম তৈরি করা। আশা করি আপনাদের ভালো লাগবে ও ব্যবহার উপভোগ করবেন।

