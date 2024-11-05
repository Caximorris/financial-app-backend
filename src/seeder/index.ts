import { DataSource } from 'typeorm';
import { AppDataSource } from '../helpers/data-base';
import { User } from '../modules/user/user.entity';
import { Transaction } from '../modules/transaction/transaction.entity';
import {
  firstNames,
  lastNames,
  expenseCategories,
  incomeCategories,
  sample,
  randomAmount,
} from './helpers';
import * as argon2 from 'argon2';

const seed = async (dataSource: DataSource) => {
  const userRepository = dataSource.getRepository(User);
  const transactionRepository = dataSource.getRepository(Transaction);

  await dataSource.query(`TRUNCATE TABLE "transaction" CASCADE`);
  await dataSource.query(`TRUNCATE TABLE "user" CASCADE`);

  // Generate 20 random users
  for (let i = 0; i < 20; i++) {
    const firstName = sample(firstNames);
    const lastName = sample(lastNames);
    const secondLastName = sample(lastNames);
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}.${randomAmount(1, 99)}@example.com`;
    const password = await argon2.hash('password123');
    const salary = randomAmount(1000, 5000);

    const user = userRepository.create({
      firstName,
      lastName,
      secondLastName,
      email,
      password,
      salary,
    });
    try {
      await userRepository.save(user);
    } catch (error) {
      console.error('Error saving user:', error);
    }

    // Generate transactions for the last 3 months
    for (let monthOffset = 0; monthOffset < 3; monthOffset++) {
      const monthStartDate = new Date();
      monthStartDate.setMonth(monthStartDate.getMonth() - monthOffset);
      monthStartDate.setDate(1);

      // Generate random incomes
      for (let j = 0; j < 3; j++) {
        const transaction = transactionRepository.create({
          amount: randomAmount(400, 800),
          category: sample(incomeCategories),
          date: new Date(
            monthStartDate.getFullYear(),
            monthStartDate.getMonth(),
            j + 1,
          ),
          type: 'income',
          user,
        });
        try {
          await transactionRepository.save(transaction);
        } catch (error) {
          console.error('Error saving transaction:', error);
        }
      }

      // Generate random expenses
      for (let j = 0; j < 20; j++) {
        const transaction = transactionRepository.create({
          amount: randomAmount(10, 1000),
          category: sample(expenseCategories),
          date: new Date(
            monthStartDate.getFullYear(),
            monthStartDate.getMonth(),
            j + 1,
          ),
          type: 'expense',
          user,
        });
        try {
          await transactionRepository.save(transaction);
        } catch (error) {
          console.error('Error saving transaction:', error);
        }
      }
    }
  }
};

AppDataSource.initialize()
  .then(async (dataSource) => {
    await seed(dataSource);
    console.log('Seeding completed');
  })
  .catch((error) => console.log(error))
  .finally(() => AppDataSource.destroy());
