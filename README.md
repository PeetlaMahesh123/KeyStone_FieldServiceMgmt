# 🚀 KeyStone Field Service Management System

A modern **Field Service Management System (FSM)** developed using **Spring Boot**, **React**, and **MySQL**. This application helps organizations efficiently manage field service operations by automating work order management, technician assignment, customer service requests, and real-time service tracking.

---

## 📖 Project Overview

The **KeyStone Field Service Management System** is a full-stack web application designed to simplify and automate field service operations. It provides a centralized platform where administrators, managers, technicians, and customers can collaborate throughout the complete service lifecycle.

The system enables organizations to create service requests, assign technicians, monitor work progress, maintain customer records, and generate reports. By replacing manual processes with an automated solution, the platform improves operational efficiency, reduces response time, and enhances customer satisfaction.

---

## ✨ Features

- 🔐 Secure User Authentication & Authorization
- 👥 Role-Based Access Control (Admin, Manager, Technician, Customer)
- 📋 Work Order Management
- 🛠️ Technician Assignment & Tracking
- 📍 Customer & Site Management
- 📊 Dashboard & Reports
- ⏱️ Service Status Tracking
- 📝 Time Logging
- 📦 Parts & Inventory Management
- 📈 Service History
- 🔍 Search & Filtering
- 📱 Responsive User Interface

---

## 👤 User Roles

### Admin
- Manage users
- Manage customers
- Manage technicians
- View reports
- Monitor overall system

### Manager
- Create and assign work orders
- Monitor technician activities
- View dashboards
- Manage customer requests

### Technician
- View assigned work orders
- Update work status
- Log working hours
- Complete assigned tasks

### Customer
- Raise service requests
- View work order status
- Track service history

---

## 🏗️ System Architecture

```
React Frontend
       │
       ▼
Spring Boot REST API
       │
       ▼
Service Layer
       │
       ▼
Repository Layer
       │
       ▼
MySQL Database
```

---

## 🛠️ Technology Stack

### Frontend
- React.js
- TypeScript
- Vite
- HTML5
- CSS3
- JavaScript
- Axios

### Backend
- Java 21
- Spring Boot
- Spring MVC
- Spring Data JPA
- Hibernate
- Spring Security
- JWT Authentication

### Database
- MySQL

### Tools
- Git
- GitHub
- Maven
- Postman
- IntelliJ IDEA
- VS Code

---

## 📂 Project Structure

```
KeyStone_FieldServiceMgmtSystem
│
├── keystone-frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.ts
│
├── FieldServiceMgmtSystem
│   ├── src
│   ├── pom.xml
│   ├── mvnw
│   └── application.properties
│
└── README.md
```

---

## 📊 Core Modules

- Authentication Module
- User Management
- Customer Management
- Site Management
- Work Order Management
- Technician Management
- Dashboard & Reports
- Service Tracking
- Inventory Management

---

## 🔒 Security Features

- JWT Authentication
- Spring Security
- Password Encryption (BCrypt)
- Role-Based Authorization
- Input Validation
- Exception Handling

---

## 📋 Functional Requirements

- User Registration & Login
- Customer Management
- Technician Management
- Work Order Creation
- Work Order Assignment
- Status Tracking
- Dashboard Analytics
- Report Generation
- Search & Filter

---

## ⚙️ Non-Functional Requirements

- High Performance
- Secure Authentication
- Scalable Architecture
- Responsive UI
- Reliable Data Storage
- Easy Maintenance

---

## 🗄️ Database

**Database:** MySQL

Main Tables:

- Users
- Customers
- Sites
- WorkOrders
- Parts
- PartUsage
- TimeLogs
- StatusHistory

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/PeetlaMahesh123/KeyStone_FieldServiceMgmt.git
```

### Backend

```bash
cd FieldServiceMgmtSystem
mvn clean install
mvn spring-boot:run
```

### Frontend

```bash
cd keystone-frontend
npm install
npm run dev
```

---

## 📡 REST API Modules

- Authentication API
- Customer API
- User API
- Work Order API
- Technician API
- Dashboard API
- Reports API

---

## 🎯 Future Enhancements

- Mobile Application
- Push Notifications
- GPS Tracking
- AI-Based Technician Assignment
- Email Notifications
- Analytics Dashboard
- Cloud Deployment

---

## 📸 Screenshots

Add screenshots of the following pages:

- Login
- Dashboard
- Customer Management
- Work Orders
- Technician Portal
- Reports

---

## 👨‍💻 Collaborators



---

## 📄 License

This project is developed for educational and learning purposes as part of a Full Stack Java Development project.
