# Payoo Mobile Banking App 💸

A **simple web-based mobile banking simulation** built with HTML, CSS (Tailwind + DaisyUI), and JavaScript. Users can **login**, **add money**, **cash out**, **transfer money**, **pay bills** and view available balance.  

## 🔗 Live Demo

Check out the live project here: [Payoo Mobile Banking App](https://hoqueeprobal.github.io/Payoo-MFS/)  

**Login credentials:**
- **Mobile Number: 123456789**
- **Pin Number: 1234**

**Bonus codes:**
- **PAYOO100 - 100$**
- **BONUS50 - 50$**
- **FREE200 - 200$**


---

## Features

### 1. Login
- Users log in with a **mobile number** and **4-digit pin**.
- Validates user credentials.
- Redirects to the home page on successful login.

### 2. Dashboard
- Shows **available balance**.
- Interactive menu with the following features:
  - **Add Money**: Select a bank, enter account number, amount, and pin. Updates available balance.
  - **Cash Out**: Withdraw money via agent number with pin verification.
  - **Transfer Money**: Transfer funds to a recipient account (no name required) with pin verification.
  - **Pay Bill**: Pay utility bills (Electricity, Gas, Water, Internet). Requires bill number, amount, and pin.
  - **Get Bonus**: Placeholder section for bonus features.
  - **Transactions**: Placeholder section to view transaction history.

### 3. Validations
- Account number and recipient number length check (11 digits).
- Bill number validation (minimum 5 digits).
- Pin verification.
- Balance checks for withdrawals, transfers, and bill payments.

### 4. Responsive UI
- Built with **Tailwind CSS** and **DaisyUI**.
- Clean and simple mobile-friendly interface.

---

## Technologies Used
- **HTML5**
- **Tailwind CSS**
- **DaisyUI**
- **JavaScript (ES6)**

---

## 📂 Project Structure
```plaintext
Payoo-MFS/
├── index.html         # Login page
├── home.html          # Dashboard page
├── js/
│   ├── app.js         # Main app functionality
│   └── login.js       # Login page logic
├── assets/            # Images and icons
└── README.md
```
---



