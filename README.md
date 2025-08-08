# 💡 Bill Management Website | বিল ম্যানেজমেন্ট ওয়েবসাইট

A modern and simple utility bill payment platform where users can log in to view and pay their electricity, water, gas, and other utility bills.

একটি সুন্দর ও সহজ ইউটিলিটি বিল পেমেন্ট ওয়েবসাইট, যেখানে ইউজাররা লগইন করে বিদ্যুৎ, পানি, গ্যাস ইত্যাদি বিল দেখতে ও পেমেন্ট করতে পারে।

---

## 🌐 Live Website

🔗 [Click Here to Visit](https://bill-management-system-1b076.web.app/)

---

## 🎯 Project Purpose | প্রজেক্ট উদ্দেশ্য

To build a user-friendly platform where users can log in, manage their bills, make payments, and update profile/card information.

একটি ইউজার-ফ্রেন্ডলি প্ল্যাটফর্ম তৈরি করা যেখানে ইউজাররা বিল দেখতে, পরিশোধ করতে ও নিজের প্রোফাইল/কার্ড পরিচালনা করতে পারবে।

---

## 🚀 Key Features | প্রধান ফিচারসমূহ

### 🔐 Authentication
- Email & Password Login/Register
- Google Login (Social Auth)
- Forget Password (No email verification)
- Firebase Authentication (.env based)

### 📄 Pages & Routing
- Home Page (Slider + Utility Cards)
- Login & Register
- Bills Page (Loaded from JSON)
- Bill Details Page (Pay Now + Balance Deduction)
- My Cards Page (Card listing)
- My Profile Page (Update name, photo, email)

### 🧾 Bills System
- Bill data loaded from JSON file
- Balance deducted after bill payment
- Protected Routes (Unauthorized access blocked)

### 💳 Cards System
- Displays user's cards in a clean layout

### 🎨 UI/UX
- Responsive design with TailwindCSS + DaisyUI
- Smart slider with SwiperJS
- Toastify notifications for feedback

---

## 🛠️ Used Technologies & Packages | ব্যবহৃত টুলস ও প্যাকেজসমূহ

| Package                | Description                     |
|------------------------|---------------------------------|
| `react`               | Frontend Framework              |
| `react-router`        | Routing System                  |
| `firebase`            | Authentication + Hosting        |
| `react-toastify`      | Toast Notification              |
| `swiper`              | Image Slider                    |
| `react-icons`         | Icon Library                    |
| `lucide`              | Clean SVG Icons                 |
| `@headlessui/react`   | Accessible UI Elements          |
| `tailwindcss`         | Utility-First CSS               |
| `daisyui`             | Tailwind CSS Component Library  |
| `@vitejs/plugin-react`| React Plugin for Vite           |
| `vite`                | Build Tool                      |

---

## 🧪 Bonus Features | অতিরিক্ত সুবিধাসমূহ

- 🔒 Protected Route (Unauthorized users blocked)
- 💰 Real-time balance deduction after bill payment
- 📸 Profile update with image URL
- ☁️ Firebase Hosting (Live deployment)

---

## 🧭 Run Locally (Optional)

```bash
git clone https://github.com/JahidGittu/Bill-ManageMent-System.git
cd Bill-ManageMent-System
npm install
npm run dev
