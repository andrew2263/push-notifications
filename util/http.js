import axios from "axios";

const url = "https://react-native-test-b384d-default-rtdb.firebaseio.com";

export async function storeExpense(expenseData) {
  const response = await axios.post(`${url}/expenses.json`, expenseData);
  return response.data.name;
}

export async function fetchExpenses() {
  const response = await axios.get(`${url}/expenses.json`);

  const expenses = [];

  for (const key in response.data) {
    const expense = response.data[key];
    const expenseObj = {
      id: key,
      amount: expense.amount,
      date: new Date(expense.date),
      description: expense.description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(`${url}/expenses/${id}.json`);
}

export function deleteExpense(id) {
  return axios.delete(`${url}/expenses/${id}`);
}
