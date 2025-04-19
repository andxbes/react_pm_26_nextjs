import sql from 'better-sqlite3';
const db = sql('meals.db');

export async function getMeals(params) {
    return await db.prepare('SELECT * FROM meals').all();
};
