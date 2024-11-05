/* eslint-disable prettier/prettier */
export const firstNames = [
  "James", "Mary", "John", "Patricia", "Robert", "Jennifer", "Michael", "Linda", "William",
  "Elizabeth", "David", "Barbara", "Richard", "Susan", "Joseph", "Jessica", "Charles",
  "Sarah", "Thomas", "Karen", "Christopher", "Nancy", "Daniel", "Lisa", "Matthew",
  "Margaret", "Anthony", "Betty", "Mark", "Sandra", "Donald", "Ashley", "Steven",
  "Dorothy", "Paul", "Kimberly", "Andrew", "Emily", "Joshua", "Donna", "Kenneth",
  "Michelle", "Kevin", "Carol", "Brian", "Amanda", "George", "Melissa", "Timothy",
  "Deborah", "Ronald", "Stephanie", "Edward", "Rebecca", "Jason", "Laura", "Jeffery",
  "Helen", "Ryan", "Joan", "Jacob", "Christine", "Gary", "Kathy", "Nicholas",
  "Teresa", "Eric", "Ruth", "Stephen", "Shirley", "Larry", "Angela", "Justin",
  "Anna", "Scott", "Maria", "Brandon", "Pamela", "Benjamin", "Nicole", "Adam",
  "Helen", "Patrick", "Janet", "Frank", "Rachel", "Raymond", "Victoria", "Gregory",
  "Catherine", "Jerry", "Chloe", "Tyler", "Emily", "Aaron", "Kelsey", "Seth",
  "Megan", "Nathan", "Sydney"
];

export const lastNames = [
  "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis",
  "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson",
  "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson",
  "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker",
  "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill",
  "Flores", "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell",
  "Mitchell", "Carter", "Roberts", "Gomez", "Phillips", "Evans", "Turner",
  "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes", "Stewart", "Morris",
  "Morales", "Murphy", "Cook", "Rogers", "Gonzales", "Gutierrez", "Ortiz",
  "Walters", "Reed", "Simmons", "Foster", "Sanders", "Moreno", "Jenkins",
  "Perry", "Powell", "Long", "Patterson", "Hughes", "Flores", "Washington",
  "Butler", "Chavez", "Gordon", "Wagner", "Hunter", "Romero", "Hicks",
  "Dixon", "Henderson", "Bennett", "Russell", "Griffin", "Fernandez", "Hayes"
];

export const expenseCategories = [
  "Housing",                // Rent, Utilities, Home Maintenance, Home Improvements
  "Groceries",              // Groceries, Household Items
  "Transportation",         // Transportation, Fuel, Car Maintenance, Parking Fees, Tolls
  "Healthcare",             // Insurance, Medical Bills, Dental Care, Vision Care
  "Personal Care",          // Personal Care, Clothing, Fitness, Hobbies
  "Education",              // Education, Childcare, Student Loans
  "Entertainment",          // Entertainment, Dining Out, Movies, Concerts
  "Travel",                 // Travel, Vacations, Travel Insurance
  "Subscriptions",          // Subscriptions, Streaming Services, Memberships
  "Miscellaneous",          // Miscellaneous Expenses, Gifts, Charitable Donations
  "Debt Repayment"          // Credit Card Payments, Loans, Alimony
];

export const incomeCategories = [
  "Salary",                   // Salary, Wages
  "Bonus",                    // Bonuses, Incentives
  "Commission",               // Sales Commission, Performance Bonuses
  "Self-Employment",          // Freelancing, Consulting, Business Income
  "Investment Income",        // Dividends, Interest, Capital Gains
  "Rental Income",            // Rent from Property, Airbnb
  "Government Assistance",     // Unemployment Benefits, Social Security
  "Pension",                  // Retirement Benefits, Annuities
  "Gifts",                    // Monetary Gifts, Inheritances
  "Other Income"              // Side Hustles, Royalties, Any Additional Income
];

export const sample = <T>(array: T[]): T =>
  array[Math.floor(Math.random() * array.length)];

export const randomAmount = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;
